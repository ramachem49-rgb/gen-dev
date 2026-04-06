const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class DDoSDetector extends EventEmitter {
  constructor() {
    super();
    this.requestCounts = new Map();
    this.ipRequestHistory = new Map();
    this.suspiciousIPs = new Set();
    this.blockedIPs = new Set();
    this.thresholds = {
      requestsPerSecond: parseInt(process.env.DDOS_REQUESTS_PER_SECOND) || 100,
      requestsPerMinute: parseInt(process.env.DDOS_REQUESTS_PER_MINUTE) || 5000,
      uniqueIPsPerMinute: 100,
      bandwidthPerSecond: 50 * 1024 * 1024, // 50 MB/s
      connectionRate: 50 // connections per second
    };
    
    this.init();
  }
  
  init() {
    // Clean old data every minute
    setInterval(() => this.cleanOldData(), 60000);
    
    // Monitor for DDoS patterns
    setInterval(() => this.analyzePatterns(), 5000);
    
    console.log('DDoS Detector initialized');
  }
  
  detectDDOS(req, res, next) {
    const ip = req.ip;
    const now = Date.now();
    
    // Check if IP is already blocked
    if (this.blockedIPs.has(ip)) {
      res.status(429).json({
        success: false,
        error: 'Too many requests. Please try again later.'
      });
      return;
    }
    
    // Track request
    this.trackRequest(ip, now);
    
    // Check for DDoS patterns
    const isDDoS = this.checkDDoSPatterns(ip, now);
    
    if (isDDoS) {
      this.handleDDoS(ip, req);
      res.status(429).json({
        success: false,
        error: 'Rate limit exceeded. Please try again later.'
      });
      return;
    }
    
    next();
  }
  
  trackRequest(ip, timestamp) {
    // Track per second
    const secondKey = Math.floor(timestamp / 1000);
    if (!this.requestCounts.has(ip)) {
      this.requestCounts.set(ip, new Map());
    }
    
    const ipCounts = this.requestCounts.get(ip);
    ipCounts.set(secondKey, (ipCounts.get(secondKey) || 0) + 1);
    
    // Track request history for pattern analysis
    if (!this.ipRequestHistory.has(ip)) {
      this.ipRequestHistory.set(ip, []);
    }
    
    const history = this.ipRequestHistory.get(ip);
    history.push({ timestamp, url: req.url, method: req.method });
    
    // Keep only last 1000 requests
    if (history.length > 1000) {
      history.shift();
    }
  }
  
  checkDDoSPatterns(ip, now) {
    // Check requests per second
    const currentSecond = Math.floor(now / 1000);
    const ipCounts = this.requestCounts.get(ip);
    
    if (ipCounts) {
      const requestsThisSecond = ipCounts.get(currentSecond) || 0;
      if (requestsThisSecond > this.thresholds.requestsPerSecond) {
        this.logSuspiciousActivity(ip, 'HIGH_RATE', requestsThisSecond);
        return true;
      }
    }
    
    // Check requests per minute
    const lastMinute = now - 60000;
    let totalRequests = 0;
    
    if (ipCounts) {
      for (const [second, count] of ipCounts) {
        if (second * 1000 > lastMinute) {
          totalRequests += count;
        }
      }
    }
    
    if (totalRequests > this.thresholds.requestsPerMinute) {
      this.logSuspiciousActivity(ip, 'HIGH_VOLUME', totalRequests);
      return true;
    }
    
    return false;
  }
  
  analyzePatterns() {
    const now = Date.now();
    const lastMinute = now - 60000;
    const globalStats = {
      totalRequests: 0,
      uniqueIPs: new Set(),
      requestsByIP: new Map(),
      topEndpoints: new Map()
    };
    
    // Analyze all IPs
    for (const [ip, ipCounts] of this.requestCounts) {
      let ipTotal = 0;
      
      for (const [second, count] of ipCounts) {
        if (second * 1000 > lastMinute) {
          ipTotal += count;
          globalStats.totalRequests += count;
        }
      }
      
      if (ipTotal > 0) {
        globalStats.uniqueIPs.add(ip);
        globalStats.requestsByIP.set(ip, ipTotal);
      }
    }
    
    // Check for distributed DDoS (many IPs, high total requests)
    if (globalStats.uniqueIPs.size > this.thresholds.uniqueIPsPerMinute &&
        globalStats.totalRequests > this.thresholds.requestsPerMinute * 2) {
      this.handleDistributedDDoS(globalStats);
    }
    
    // Analyze request patterns
    this.analyzeRequestPatterns(globalStats);
  }
  
  analyzeRequestPatterns(globalStats) {
    const now = Date.now();
    const lastMinute = now - 60000;
    const endpointCounts = new Map();
    
    // Count requests per endpoint
    for (const [ip, history] of this.ipRequestHistory) {
      for (const req of history) {
        if (req.timestamp > lastMinute) {
          const endpoint = req.url;
          endpointCounts.set(endpoint, (endpointCounts.get(endpoint) || 0) + 1);
        }
      }
    }
    
    // Check for specific endpoint attacks
    for (const [endpoint, count] of endpointCounts) {
      if (count > this.thresholds.requestsPerMinute / 2) {
        this.logSuspiciousActivity('GLOBAL', 'ENDPOINT_FLOOD', { endpoint, count });
        this.emit('ddos-endpoint', { endpoint, count });
      }
    }
  }
  
  handleDDoS(ip, req) {
    const attack = {
      type: 'DDoS',
      ip: ip,
      severity: 'HIGH',
      timestamp: new Date().toISOString(),
      details: {
        url: req.url,
        method: req.method,
        userAgent: req.headers['user-agent'],
        requestsPerSecond: this.getRequestsPerSecond(ip),
        requestsPerMinute: this.getRequestsPerMinute(ip)
      }
    };
    
    // Block IP
    this.blockedIPs.add(ip);
    
    // Log attack
    this.logAttack(attack);
    
    // Emit event for notification
    this.emit('ddos-detected', attack);
    
    // Schedule unblock after 1 hour
    setTimeout(() => {
      this.blockedIPs.delete(ip);
      console.log(`IP ${ip} unblocked after DDoS detection`);
    }, 60 * 60 * 1000);
  }
  
  handleDistributedDDoS(stats) {
    const attack = {
      type: 'Distributed DDoS',
      severity: 'CRITICAL',
      timestamp: new Date().toISOString(),
      details: {
        uniqueIPs: stats.uniqueIPs.size,
        totalRequests: stats.totalRequests,
        topAttackers: Array.from(stats.requestsByIP.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
      }
    };
    
    this.logAttack(attack);
    this.emit('ddos-distributed', attack);
    
    // Block top attackers
    attack.details.topAttackers.forEach(([ip, count]) => {
      this.blockedIPs.add(ip);
    });
  }
  
  getRequestsPerSecond(ip) {
    const now = Date.now();
    const currentSecond = Math.floor(now / 1000);
    const ipCounts = this.requestCounts.get(ip);
    return ipCounts ? ipCounts.get(currentSecond) || 0 : 0;
  }
  
  getRequestsPerMinute(ip) {
    const now = Date.now();
    const lastMinute = now - 60000;
    let total = 0;
    const ipCounts = this.requestCounts.get(ip);
    
    if (ipCounts) {
      for (const [second, count] of ipCounts) {
        if (second * 1000 > lastMinute) {
          total += count;
        }
      }
    }
    
    return total;
  }
  
  cleanOldData() {
    const now = Date.now();
    const oneMinuteAgo = Math.floor((now - 60000) / 1000);
    
    // Clean old request counts
    for (const [ip, ipCounts] of this.requestCounts) {
      for (const [second] of ipCounts) {
        if (second < oneMinuteAgo) {
          ipCounts.delete(second);
        }
      }
      
      if (ipCounts.size === 0) {
        this.requestCounts.delete(ip);
      }
    }
  }
  
  logSuspiciousActivity(ip, type, data) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: 'SUSPICIOUS_ACTIVITY',
      subType: type,
      ip: ip,
      data: data
    };
    
    const logPath = path.join(__dirname, '../logs/security.log');
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
  }
  
  logAttack(attack) {
    const logPath = path.join(__dirname, '../logs/alerts.log');
    fs.appendFileSync(logPath, JSON.stringify(attack) + '\n');
    
    // Also save to attacks.json for analytics
    const attacksPath = path.join(__dirname, '../logs/attacks.json');
    let attacks = [];
    
    if (fs.existsSync(attacksPath)) {
      try {
        const data = fs.readFileSync(attacksPath, 'utf8');
        attacks = JSON.parse(data);
      } catch (error) {
        console.error('Failed to read attacks.json:', error);
      }
    }
    
    attacks.push(attack);
    
    // Keep only last 10,000 attacks
    if (attacks.length > 10000) {
      attacks = attacks.slice(-10000);
    }
    
    fs.writeFileSync(attacksPath, JSON.stringify(attacks, null, 2));
  }
  
  isIPBlocked(ip) {
    return this.blockedIPs.has(ip);
  }
  
  unblockIP(ip) {
    this.blockedIPs.delete(ip);
  }
  
  getStats() {
    const now = Date.now();
    const lastMinute = now - 60000;
    let totalRequests = 0;
    let activeIPs = 0;
    
    for (const [ip, ipCounts] of this.requestCounts) {
      let ipTotal = 0;
      for (const [second, count] of ipCounts) {
        if (second * 1000 > lastMinute) {
          ipTotal += count;
        }
      }
      if (ipTotal > 0) {
        activeIPs++;
        totalRequests += ipTotal;
      }
    }
    
    return {
      activeIPs,
      totalRequestsLastMinute: totalRequests,
      blockedIPs: this.blockedIPs.size,
      suspiciousIPs: this.suspiciousIPs.size,
      thresholds: this.thresholds
    };
  }
}

module.exports = new DDoSDetector();