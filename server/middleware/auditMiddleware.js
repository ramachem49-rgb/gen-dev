const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');

// Create logs directory if it doesn't exist
const logDirectory = path.join(__dirname, '../logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// Create a rotating write stream for access logs
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory,
  maxFiles: 30, // keep 30 days of logs
  compress: 'gzip' // compress rotated files
});

// Create a rotating write stream for error logs
const errorLogStream = rfs.createStream('error.log', {
  interval: '1d',
  path: logDirectory,
  maxFiles: 30,
  compress: 'gzip'
});

// Custom token for user ID
morgan.token('user', (req) => {
  return req.user ? req.user.id : 'anonymous';
});

// Custom token for request body (sanitized)
morgan.token('body', (req) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    // Remove sensitive data
    const sanitized = { ...req.body };
    delete sanitized.password;
    delete sanitized.token;
    delete sanitized.creditCard;
    return JSON.stringify(sanitized);
  }
  return '-';
});

// Access log format
const accessLogFormat = ':remote-addr - :user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms - :body';

// Error log format
const errorLogFormat = ':remote-addr - :user [:date[iso]] ":method :url" :status - :body - :error';

// Access logger
const accessLogger = morgan(accessLogFormat, {
  stream: accessLogStream,
  skip: (req, res) => res.statusCode >= 400 // Skip errors
});

// Error logger
const errorLogger = morgan(errorLogFormat, {
  stream: errorLogStream,
  skip: (req, res) => res.statusCode < 400,
  // Add error to log
  format: (tokens, req, res) => {
    tokens.error = req.error || res.statusMessage;
    return morgan.compile(errorLogFormat)(tokens, req, res);
  }
});

// Audit trail for sensitive operations
const auditTrail = (action) => {
  return async (req, res, next) => {
    const oldJson = res.json;
    
    res.json = function(data) {
      // Log the action
      const logEntry = {
        timestamp: new Date().toISOString(),
        user: req.user ? req.user.id : 'anonymous',
        action: action,
        ip: req.ip,
        method: req.method,
        path: req.path,
        params: req.params,
        query: req.query,
        status: res.statusCode,
        userAgent: req.get('User-Agent'),
      };
      
      // Write to audit log
      fs.appendFileSync(
        path.join(logDirectory, 'audit.log'),
        JSON.stringify(logEntry) + '\n'
      );
      
      // Call the original json method
      oldJson.call(this, data);
    };
    
    next();
  };
};

// Monitor for suspicious patterns
const monitorSuspiciousActivity = (req, res, next) => {
  const suspiciousPaths = [
    '/admin',
    '/config',
    '/.env',
    '/wp-admin',
    '/phpmyadmin',
    '/sql',
    '/backup',
    '/database'
  ];
  
  const suspiciousExtensions = [
    '.php', '.asp', '.aspx', '.jsp', '.cgi', '.pl', '.py'
  ];
  
  const path = req.path.toLowerCase();
  
  // Check for path traversal attempts
  if (path.includes('..') || path.includes('%2e%2e')) {
    fs.appendFileSync(
      path.join(logDirectory, 'security.log'),
      `[${new Date().toISOString()}] Path traversal attempt from IP: ${req.ip}, Path: ${req.path}\n`
    );
    return res.status(403).json({ error: 'Access denied' });
  }
  
  // Check for attempts to access sensitive paths
  if (suspiciousPaths.some(p => path.includes(p))) {
    fs.appendFileSync(
      path.join(logDirectory, 'security.log'),
      `[${new Date().toISOString()}] Sensitive path access attempt from IP: ${req.ip}, Path: ${req.path}\n`
    );
  }
  
  // Check for attempts to access non-API paths
  if (suspiciousExtensions.some(ext => path.endsWith(ext))) {
    return res.status(404).json({ error: 'Not found' });
  }
  
  next();
};

module.exports = {
  accessLogger,
  errorLogger,
  auditTrail,
  monitorSuspiciousActivity
};