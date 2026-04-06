const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class BruteForceDetector extends EventEmitter {
  constructor() {
    super();
    this.loginAttempts = new Map();
    this.blockedIPs = new Map();
    this.lockedAccounts = new Map();
    this.thresholds = {
      attemptsPerMinute: parseInt(process.env.BRUTE_FORCE_ATTEMPTS_PER_MINUTE) || 10,
      attemptsPerHour: 50,
      lockoutDuration: 30 * 60 * 1000, // 30 minutes
      blockDuration: 60 * 60 * 1000 // 1 hour
    };
    
    this.init();
  }
  
  init() {
    // Clean old data every 5 minutes
    setInterval(() => this.cleanOldData(), 5 * 60 * 1000);
    
    console.log('Brute Force Detector initialized');
  }
  
  detectBruteForce(req, res, next) {
    const ip = req.ip;
    
    // Check if IP is blocked
    if (this.isIPBlocked(ip)) {
      res.status(429).json({
        success: false,
        error: 'Too many failed attempts. Please try again later.'
      });
      return;
    }
    
    // Only track login attempts
    if (req.path.includes('/login') || req.path.includes('/auth')) {
      const email = req.body.email || req.body.username;
      
      if (email) {
        this.trackAttempt(ip, email, req);
        
        // Check for brute force
        const isBruteForce = this.checkBruteForce(ip, email);
        
        if (isBruteForce) {
          this.handleBruteForce(ip, email, req);
          res.status(429).json({
            success: false,
            error: 'Too many failed attempts. Please try again later.'
          });
          return;
        }
      }
    }
    
    next();
  }
  
  trackAttempt(ip, email, req) {
    const now = Date.now();
    
    if (!this.loginAttempts.has(ip)) {
      this.loginAttempts.set(ip, {
        attempts: [],
        emails: new Set(),
        firstSeen: now,
        lastSeen: now,
        userAgents: new Set()
      });
    }
    
    const data = this.loginAttempts.get(ip);
    data.attempts.push({
      timestamp: now,
      email: email,
      userAgent: req.headers['user-agent'],
      success: false // Assume failure initially, will be updated in response
    });
    data.emails.add(email);
    data.userAgents.add(req.headers['user-agent']);
    data.lastSeen = now;
    
    // Keep only last 100 attempts
    if (data.attempts.length > 100) {
      data.attempts = data.attempts.slice(-100);
    }
  }
  
  updateAttemptResult(ip, email, success) {
    if (this.loginAttempts.has(ip)) {
      const data = this.loginAttempts.get(ip);
      const lastAttempt = data.attempts[data.attempts.length - 1];
      if (lastAttempt && lastAttempt.email === email) {
        lastAttempt.success = success;
      }
    }
  }
  
  checkBruteForce(ip, email) {
    const now = Date.now();
    const data = this.loginAttempts.get(ip);
    
    if (!data) return false;
    
    // Check attempts per minute
    const lastMinute = now - 60000;
    const attemptsLastMinute = data.attempts.filter(a => a.timestamp > lastMinute).length;
    
    if (attemptsLastMinute > this.thresholds.attemptsPerMinute) {
      return true;
    }
    
    // Check attempts per hour
    const lastHour = now - 3600000;
    const attemptsLastHour = data.attempts.filter(a => a.timestamp > lastHour).length;
    
    if (attemptsLastHour > this.thresholds.attemptsPerHour) {
      return true;
    }
    
    // Check for multiple emails from same IP (credential stuffing)
    if (data.emails.size > 10) {
      return true;
    }
    
    // Check for rapid sequential attempts
    if (data.attempts.length > 5) {
      const lastFive = data.attempts.slice(-5);
      const timeSpan = lastFive[lastFive.length - 1].timestamp - lastFive[0].timestamp;
      if (timeSpan < 10000) { // 5 attempts in 10 seconds
        return true;
      }
    }
    
    return false;
  }
  
  handleBruteForce(ip, email, req) {
    const attack = {
      type: 'BRUTE_FORCE',
      ip: ip,
      severity: 'HIGH',
      timestamp: new Date().toISOString(),
      details: {
        targetEmail: email,
        url: req.url,
        method: req.method,
        userAgent: req.headers['user-agent'],
        attemptsPerMinute: this.getAttemptsPerMinute(ip),
        attemptsPerHour: this.getAttemptsPerHour(ip),
        uniqueEmails: this.loginAttempts.get(ip)?.emails.size || 0
      }
    };
    
    // Block IP
    this.blockedIPs.set(ip, {
      blockedAt: Date.now(),
      expiresAt: Date.now() + this.thresholds.blockDuration,
      reason: 'Brute force attack',
      attempts: this.loginAttempts.get(ip)?.attempts.length || 0
    });
    
    // Log attack
    this.logAttack(attack);
    
    // Emit event for notification
    this.emit('brute-force-detected', attack);
    
    // Also lock the account if multiple attempts
    this.lockAccount(email, ip);
  }
  
  lockAccount(email, ip) {
    if (!this.lockedAccounts.has(email)) {
      this.lockedAccounts.set(email, {
        lockedAt: Date.now(),
        expiresAt: Date.now() + this.thresholds.lockoutDuration,
        reason: 'Multiple failed login attempts',
        sourceIP: ip
      });
      
      this.emit('account-locked', { email, ip });
    }
  }
  
  isAccountLocked(email) {
    const lock = this.lockedAccounts.get(email);
    if (!lock) return false;
    
    if (Date.now() > lock.expiresAt) {
      this.lockedAccounts.delete(email);
      return false;
    }
    
    return true;
  }
  
  isIPBlocked(ip) {
    const block = this.blockedIPs.get(ip);
    if (!block) return false;
    
    if (Date.now() > block.expiresAt) {
      this.blockedIPs.delete(ip);
      return false;
    }
    
    return true;
  }
  
  getAttemptsPerMinute(ip) {
    const now = Date.now();
    const data = this.loginAttempts.get(ip);
    if (!data) return 0;
    
    const lastMinute = now - 60000;
    return data.attempts.filter(a => a.timestamp > lastMinute).length;
  }
  
  getAttemptsPerHour(ip) {
    const now = Date.now();
    const data = this.loginAttempts.get(ip);
    if (!data) return 0;
    
    const lastHour = now - 3600000;
    return data.attempts.filter(a => a.timestamp > lastHour).length;
  }
  
  cleanOldData() {
    const now = Date.now();
    const oneHourAgo = now - 3600000;
    
    // Clean old login attempts
    for (const [ip, data] of this.loginAttempts) {
      if (data.lastSeen < oneHourAgo) {
        this.loginAttempts.delete(ip);
      } else {
        // Clean old attempts within the data
        data.attempts = data.attempts.filter(a => a.timestamp > oneHourAgo);
        if (data.attempts.length === 0) {
          this.loginAttempts.delete(ip);
        }
      }
    }
    
    // Clean expired blocks
    for (const [ip, block] of this.blockedIPs) {
      if (Date.now() > block.expiresAt) {
        this.blockedIPs.delete(ip);
      }
    }
    
    // Clean expired locks
    for (const [email, lock] of this.lockedAccounts) {
      if (Date.now() > lock.expiresAt) {
        this.lockedAccounts.delete(email);
      }
    }
  }
  
  logAttack(attack) {
    const logPath = path.join(__dirname, '../logs/alerts.log');
    fs.appendFileSync(logPath, JSON.stringify(attack) + '\n');
    
    // Also save to attacks.json
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
    
    if (attacks.length > 10000) {
      attacks = attacks.slice(-10000);
    }
    
    fs.writeFileSync(attacksPath, JSON.stringify(attacks, null, 2));
  }
  
  unblockIP(ip) {
    this.blockedIPs.delete(ip);
  }
  
  unlockAccount(email) {
    this.lockedAccounts.delete(email);
  }
  
  getStats() {
    return {
      totalAttempts: Array.from(this.loginAttempts.values())
        .reduce((sum, data) => sum + data.attempts.length, 0),
      uniqueAttackers: this.loginAttempts.size,
      blockedIPs: this.blockedIPs.size,
      lockedAccounts: this.lockedAccounts.size,
      recentAttacks: Array.from(this.blockedIPs.entries())
        .map(([ip, block]) => ({
          ip,
          reason: block.reason,
          attempts: block.attempts,
          blockedAt: new Date(block.blockedAt).toISOString(),
          expiresAt: new Date(block.expiresAt).toISOString()
        }))
        .slice(0, 10)
    };
  }
}

module.exports = new BruteForceDetector();