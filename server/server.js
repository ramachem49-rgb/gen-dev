const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
require('dotenv').config();

// Import security services
const securityService = require('./services/securityService');
const telegramService = require('./services/telegramService');

// Import middleware
const { 
  ddosProtection, 
  detectSQLInjection, 
  detectXSS, 
  detectPortScan,
  logAdminAction 
} = require('./middleware/securityMiddleware');

// Import routes
const authRoutes = require('./routes/authRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const contactRoutes = require('./routes/contactRoutes');
const securityRoutes = require('./routes/securityRoutes');

// Import DB connection
const connectDB = require('./config/db');

// Create Express app
const app = express();

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.FRONTEND_URL],
    },
  },
}));

// CORS configuration — allow any localhost port in development
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Electron, file://)
    if (!origin || origin === 'null') return callback(null, true);
    // Allow any localhost / 127.0.0.1 port in development
    if (
      process.env.NODE_ENV !== 'production' &&
      (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:'))
    ) {
      return callback(null, true);
    }
    // Allow configured FRONTEND_URL in production
    if (origin === process.env.FRONTEND_URL) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser with size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Apply security middleware (order matters!)
app.use(ddosProtection);           // DDoS protection
app.use(detectSQLInjection);        // SQL Injection detection
app.use(detectXSS);                 // XSS detection
app.use(detectPortScan);            // Port scan detection
app.use(logAdminAction);            // Admin action logging

// Request logging middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  
  // Log request to console (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log(`${req.method} ${req.url} - ${req.ip}`);
  }
  
  // Log security events for suspicious requests
  res.on('finish', () => {
    const responseTime = Date.now() - startTime;
    
    // Log unauthorized access attempts
    if (res.statusCode === 401 || res.statusCode === 403) {
      securityService.detectSecurityEvent({
        type: res.statusCode === 401 ? 'UNAUTHORIZED_ACCESS' : 'FORBIDDEN_ACCESS',
        severity: 'WARNING',
        ip: req.ip,
        path: req.path,
        method: req.method,
        userAgent: req.get('user-agent'),
        description: `${req.method} ${req.path} returned ${res.statusCode}`,
        metadata: { 
          statusCode: res.statusCode, 
          responseTime,
          query: req.query,
          params: req.params
        }
      });
    }
    
    // Log all API requests for audit
    if (req.user && req.user.role === 'admin') {
      const logEntry = {
        timestamp: new Date().toISOString(),
        user: req.user.email,
        action: `${req.method} ${req.path}`,
        ip: req.ip,
        status: res.statusCode,
        responseTime
      };
      
      fs.appendFileSync(
        path.join(logsDir, 'api_access.log'),
        JSON.stringify(logEntry) + '\n'
      );
    }
  });
  
  next();
});

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve the Lab from the server so relative /api/* calls work
app.use('/lab', express.static(path.join(__dirname, '../client/public/lab')));
app.use('/lab', express.static(path.join(__dirname, '../lab')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/security', securityRoutes);
app.use('/api/hierarchical-lessons', require('./routes/hierarchicalLessonRoutes'));
app.use('/api/run', require('./routes/runCodeRoutes'));
app.use('/api/user', require('./routes/runCodeRoutes')); // /api/user/limits alias

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      security: securityService.initialized,
      telegram: telegramService.isEnabled,
      database: mongoose.connection.readyState === 1
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Learning Platform API',
    version: '1.0.0',
    status: 'running',
    environment: process.env.NODE_ENV || 'development',
    security: {
      enabled: true,
      telegram: telegramService.isEnabled,
      ddosProtection: true,
      sqlInjection: true,
      xssProtection: true
    },
    endpoints: {
      auth: '/api/auth',
      lessons: '/api/lessons',
      contact: '/api/contact',
      security: '/api/security',
      health: '/health'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  
  // Log error to file
  fs.appendFileSync(
    path.join(logsDir, 'error.log'),
    `[${new Date().toISOString()}] ${err.stack}\n`
  );
  
  // Send security alert for critical errors
  if (err.status === 500 || err.code === 'ECONNREFUSED') {
    telegramService.sendSecurityAlert({
      title: 'Server Error',
      type: 'SERVER_ERROR',
      severity: 'ERROR',
      description: err.message,
      action: 'Check server logs',
      threatScore: 60
    });
  }
  
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// Connect to database and start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('✅ MongoDB connected');
    
    // Start server
    const server = app.listen(PORT, () => {
      console.log(`
╔══════════════════════════════════════════════════════════╗
║     🚀 Learning Platform API Server Started              ║
╠══════════════════════════════════════════════════════════╣
║  Port: ${PORT}                                           ║
║  Environment: ${process.env.NODE_ENV || 'development'}   ║
║  Security: ACTIVE                                        ║
║  Telegram Bot: ${telegramService.isEnabled ? '✅' : '❌'} ${telegramService.isEnabled ? 'Connected' : 'Not configured'} ║
║  Time: ${new Date().toLocaleString()}                    ║
╚══════════════════════════════════════════════════════════╝
      `);
      
      // Send startup notification via Telegram
      telegramService.sendSecurityAlert({
        title: 'Server Started',
        type: 'SYSTEM_STARTUP',
        severity: 'INFO',
        description: `Server started successfully\nPort: ${PORT}\nEnvironment: ${process.env.NODE_ENV || 'development'}`,
        action: 'Monitoring active',
        threatScore: 0
      });
    });
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM signal received: closing HTTP server');
      server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
          console.log('MongoDB connection closed');
          process.exit(0);
        });
      });
    });
    
    process.on('SIGINT', () => {
      console.log('SIGINT signal received: closing HTTP server');
      server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
          console.log('MongoDB connection closed');
          process.exit(0);
        });
      });
    });
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  
  // Log to file
  fs.appendFileSync(
    path.join(logsDir, 'uncaught.log'),
    `[${new Date().toISOString()}] ${err.stack}\n`
  );
  
  // Send Telegram alert
  telegramService.sendSecurityAlert({
    title: 'Uncaught Exception',
    type: 'SYSTEM_ERROR',
    severity: 'CRITICAL',
    description: err.message,
    action: 'Server will restart',
    threatScore: 90
  });
  
  process.exit(1);
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  
  // Log to file
  fs.appendFileSync(
    path.join(logsDir, 'unhandled.log'),
    `[${new Date().toISOString()}] ${reason}\n`
  );
  
  // Send Telegram alert
  telegramService.sendSecurityAlert({
    title: 'Unhandled Rejection',
    type: 'SYSTEM_ERROR',
    severity: 'ERROR',
    description: reason.message || 'Unknown error',
    action: 'Check application logs',
    threatScore: 70
  });
});

// Start the server
startServer();
