const rateLimit = require('express-rate-limit');

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: {
    success: false,
    error: 'Too many requests. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiter for authentication
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: {
    success: false,
    error: 'Too many login attempts. Please try again after 15 minutes.'
  },
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict limiter for lesson creation
const lessonCreateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // 10 lessons per hour
  message: {
    success: false,
    error: 'Lesson creation limit reached. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Detect suspicious activity
const detectSuspiciousActivity = (req, res, next) => {
  // Simple IP tracking
  if (!global.suspiciousIPs) {
    global.suspiciousIPs = new Map();
  }
  
  const ip = req.ip;
  const now = Date.now();
  
  if (!global.suspiciousIPs.has(ip)) {
    global.suspiciousIPs.set(ip, {
      count: 1,
      firstSeen: now,
      lastSeen: now,
    });
    next();
  } else {
    const data = global.suspiciousIPs.get(ip);
    data.count++;
    data.lastSeen = now;
    
    // Check for suspicious patterns (more than 50 requests in 1 minute)
    if (data.count > 50 && (now - data.firstSeen) < 60000) {
      return res.status(429).json({
        success: false,
        error: 'Access denied due to suspicious activity'
      });
    }
    
    global.suspiciousIPs.set(ip, data);
    next();
  }
  
  // Cleanup old entries every hour (run occasionally)
  if (Math.random() < 0.001) {
    const oneHourAgo = now - 3600000;
    for (const [ip, data] of global.suspiciousIPs) {
      if (data.lastSeen < oneHourAgo) {
        global.suspiciousIPs.delete(ip);
      }
    }
  }
};

module.exports = {
  authLimiter,
  apiLimiter,
  lessonCreateLimiter,
  detectSuspiciousActivity
};