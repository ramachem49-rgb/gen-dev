const threatDetector = require('../services/securityService');
const telegramService = require('../services/telegramService');
const SecurityLog = require('../models/SecurityLog');
const rateLimit = require('express-rate-limit');


// បន្ថែមនៅក្នុង server/middleware/securityMiddleware.js
const axios = require('axios');

class SecurityMiddleware {
  constructor() {
    this.monitoringUrl = process.env.MONITORING_URL || 'http://localhost:3001';
    this.enabled = process.env.ENABLE_MONITORING === 'true';
  }

  // Middleware សម្រាប់ផ្ញើ request logs ទៅកាន់ monitoring
  async logRequestToMonitoring(req, res, next) {
    if (!this.enabled) return next();

    const startTime = Date.now();
    const originalSend = res.send;

    // Capture response
    res.send = function(data) {
      const responseTime = Date.now() - startTime;
      
      // ផ្ញើទិន្នន័យទៅ monitoring system
      const logData = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        statusCode: res.statusCode,
        responseTime: responseTime,
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers
      };

      // Async send to monitoring (non-blocking)
      axios.post(`${this.monitoringUrl}/api/logs/request`, logData)
        .catch(err => console.error('Failed to send log to monitoring:', err.message));

      return originalSend.call(this, data);
    };

    next();
  }

  // Middleware សម្រាប់ពិនិត្យ IP ដែលត្រូវបាន block
  async checkBlockedIP(req, res, next) {
    if (!this.enabled) return next();

    try {
      const response = await axios.get(`${this.monitoringUrl}/api/security/check-ip/${req.ip}`);
      if (response.data.blocked) {
        return res.status(403).json({
          success: false,
          error: 'Your IP has been blocked due to suspicious activity'
        });
      }
      next();
    } catch (error) {
      next();
    }
  }
}

module.exports = new SecurityMiddleware();
// Rate limiter for DDoS protection
const ddosProtection = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: { error: 'Too many requests, please try again later.' },
  handler: async (req, res) => {
    await threatDetector.detectSecurityEvent({
      type: 'RATE_LIMIT_EXCEEDED',
      severity: 'WARNING',
      ip: req.ip,
      path: req.path,
      method: req.method,
      description: `Rate limit exceeded: ${req.ip}`,
      metadata: { limit: 100, window: '1 minute' }
    });
    
    res.status(429).json({ error: 'Too many requests' });
  }
});

// SQL Injection detection middleware
const detectSQLInjection = async (req, res, next) => {
  const sources = [req.body, req.query, req.params];
  let detected = false;
  let payload = null;
  
  const checkValue = (value, path = '') => {
    if (typeof value === 'string') {
      const patterns = [
        /(\b(select|insert|update|delete|drop|union|exec|execute)\b)/i,
        /(';|--|\bOR\b.*=.*\bOR\b)/i,
        /(\|\||&&|;\s*$)/
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(value)) {
          detected = true;
          payload = value;
          return true;
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        if (checkValue(value[key], `${path}.${key}`)) {
          return true;
        }
      }
    }
    return false;
  };
  
  for (const source of sources) {
    if (checkValue(source)) {
      break;
    }
  }
  
  if (detected) {
    await threatDetector.detectSecurityEvent({
      type: 'SQL_INJECTION',
      severity: 'CRITICAL',
      ip: req.ip,
      path: req.path,
      method: req.method,
      payload: payload,
      userAgent: req.get('user-agent'),
      description: `SQL Injection attempt detected from ${req.ip}`,
      metadata: { 
        payload: payload,
        path: req.path,
        query: req.query,
        body: req.body
      }
    });
    
    return res.status(403).json({
      success: false,
      error: 'Invalid request detected',
      message: 'Your request has been blocked for security reasons'
    });
  }
  
  next();
};

// XSS detection middleware
const detectXSS = async (req, res, next) => {
  const sources = [req.body, req.query, req.params];
  let detected = false;
  let payload = null;
  
  const checkValue = (value) => {
    if (typeof value === 'string') {
      const patterns = [
        /<script/i,
        /javascript:/i,
        /onerror=/i,
        /onload=/i,
        /eval\(/i,
        /alert\(/i,
        /document\./i,
        /<iframe/i,
        /<embed/i,
        /<object/i
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(value)) {
          detected = true;
          payload = value;
          return true;
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        if (checkValue(value[key])) {
          return true;
        }
      }
    }
    return false;
  };
  
  for (const source of sources) {
    if (checkValue(source)) {
      break;
    }
  }
  
  if (detected) {
    await threatDetector.detectSecurityEvent({
      type: 'XSS_ATTACK',
      severity: 'HIGH',
      ip: req.ip,
      path: req.path,
      method: req.method,
      payload: payload,
      userAgent: req.get('user-agent'),
      description: `XSS attack attempt detected from ${req.ip}`,
      metadata: { payload: payload }
    });
    
    return res.status(403).json({
      success: false,
      error: 'Invalid request detected'
    });
  }
  
  next();
};

// Port scan detection middleware
const detectPortScan = async (req, res, next) => {
  const suspiciousPaths = [
    '/admin', '/config', '/.env', '/wp-admin', '/phpmyadmin',
    '/sql', '/backup', '/database', '/mysql', '/phpinfo',
    '/server-status', '/.git', '/.svn', '/.DS_Store',
    '/.env', '/.git/config', '/.htaccess', '/web.config'
  ];
  
  if (suspiciousPaths.includes(req.path)) {
    await threatDetector.detectSecurityEvent({
      type: 'PORT_SCAN',
      severity: 'MEDIUM',
      ip: req.ip,
      path: req.path,
      method: req.method,
      userAgent: req.get('user-agent'),
      description: `Port scan detected: ${req.path} accessed from ${req.ip}`,
      metadata: { suspiciousPath: req.path }
    });
  }
  
  next();
};

// Admin action logging middleware
const logAdminAction = async (req, res, next) => {
  const oldJson = res.json;
  
  res.json = async function(data) {
    if (req.user && req.user.role === 'admin') {
      const sensitiveActions = ['DELETE', 'PUT', 'POST'];
      
      if (sensitiveActions.includes(req.method)) {
        await threatDetector.detectSecurityEvent({
          type: 'ADMIN_ACTION',
          severity: 'INFO',
          ip: req.ip,
          user: {
            userId: req.user.id,
            email: req.user.email,
            role: req.user.role
          },
          path: req.path,
          method: req.method,
          payload: JSON.stringify(req.body),
          userAgent: req.get('user-agent'),
          description: `Admin ${req.user.email} performed ${req.method} ${req.path}`,
          metadata: { 
            action: req.method,
            resource: req.path,
            body: req.body
          }
        });
        
        // Send Telegram alert for critical admin actions
        if (req.method === 'DELETE' || req.path.includes('/users')) {
          await telegramService.sendSecurityAlert({
            title: 'Admin Action',
            type: 'ADMIN_ACTION',
            severity: 'INFO',
            ip: req.ip,
            user: req.user.email,
            path: req.path,
            method: req.method,
            description: `Admin ${req.user.email} performed ${req.method} on ${req.path}`,
            action: 'Admin action logged',
            threatScore: 20
          });
        }
      }
    }
    
    oldJson.call(this, data);
  };
  
  next();
};

module.exports = {
  ddosProtection,
  detectSQLInjection,
  detectXSS,
  detectPortScan,
  logAdminAction
};