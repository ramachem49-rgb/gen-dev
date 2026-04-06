const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class SQLInjectionDetector extends EventEmitter {
  constructor() {
    super();
    this.attackAttempts = new Map();
    this.blockedIPs = new Set();
    this.sqlPatterns = {
      // Classic SQL injection patterns
      classic: [
        /(\b(select|insert|update|delete|drop|union|exec|execute)\b)/i,
        /(';|--|\bOR\b.*=.*\bOR\b|'.*\bor\b.*=)/i,
        /(\|\||&&|;\s*$)/
      ],
      
      // Time-based blind SQL injection
      timeBased: [
        /(\b(sleep|benchmark|pg_sleep|waitfor)\s*\(?\s*\d+\s*\)?)/i,
        /(\b(WAITFOR)\s+DELAY\s+['"][0-9:]+['"])/i
      ],
      
      // Boolean-based blind SQL injection
      booleanBased: [
        /(\d+\s*=\s*\d+\s*(and|or)\s*\d+\s*=\s*\d+)/i,
        /('\s*(=|like|in)\s*'[^']*'\s*(and|or)\s*'\d+\s*=\s*'\d+)/i
      ],
      
      // Union-based SQL injection
      unionBased: [
        /(\b(union\s+all\s+select|union\s+select)\b)/i,
        /(\b(select)\b.*\b(from|into)\b)/i
      ],
      
      // Error-based SQL injection
      errorBased: [
        /(\b(extractvalue|updatexml|floor|rand|exp)\s*\(.*\))/i,
        /(convert|cast)\s*\(.*,\s*(int|char|date)\)/i
      ],
      
      // Stacked queries
      stacked: [
        /(;\s*(select|insert|update|delete|drop|create)\b)/i
      ],
      
      // Comment attacks
      comments: [
        /(\/\*.*\*\/|--\s|#\s)/
      ],
      
      // Encoded attacks
      encoded: [
        /(%27|%22|%3B|%2D%2D|%23|%00)/i,
        /(0x[0-9a-f]{2,})/i
      ],
      
      // Advanced patterns
      advanced: [
        /(\b(INFORMATION_SCHEMA|sys\.|master\.|mysql\.)\b)/i,
        /(\b(LOAD_FILE|INTO\s+OUTFILE|DUMPFILE)\b)/i,
        /(\b(@@version|version\(\)|database\(\)|user\(\))\b)/i
      ]
    };
    
    this.init();
  }
  
  init() {
    // Clean old data every hour
    setInterval(() => this.cleanOldData(), 60 * 60 * 1000);
    
    console.log('SQL Injection Detector initialized');
  }
  
  detectSQLInjection(req, res, next) {
    const ip = req.ip;
    
    // Check if IP is blocked
    if (this.blockedIPs.has(ip)) {
      res.status(403).json({
        success: false,
        error: 'Access denied'
      });
      return;
    }
    
    // Check all possible injection points
    const injectionPoints = [
      { name: 'query', data: req.query },
      { name: 'body', data: req.body },
      { name: 'params', data: req.params },
      { name: 'headers', data: req.headers },
      { name: 'cookies', data: req.cookies }
    ];
    
    let detected = false;
    let attackDetails = null;
    
    for (const point of injectionPoints) {
      if (point.data) {
        const result = this.scanForInjection(point.data, point.name);
        if (result.detected) {
          detected = true;
          attackDetails = result;
          break;
        }
      }
    }
    
    if (detected) {
      this.handleSQLInjection(ip, attackDetails, req);
      res.status(403).json({
        success: false,
        error: 'Invalid request detected'
      });
      return;
    }
    
    next();
  }
  
  scanForInjection(data, source, depth = 0) {
    if (depth > 10) return { detected: false };
    
    const result = {
      detected: false,
      pattern: null,
      type: null,
      source: source,
      value: null,
      confidence: 0
    };
    
    if (typeof data === 'string') {
      // Check against all patterns
      for (const [type, patterns] of Object.entries(this.sqlPatterns)) {
        for (const pattern of patterns) {
          if (pattern.test(data)) {
            result.detected = true;
            result.pattern = pattern.toString();
            result.type = type;
            result.value = data.substring(0, 200);
            result.confidence = this.calculateConfidence(data, type);
            return result;
          }
        }
      }
      
      // Check for multiple SQL keywords
      const keywordCount = this.countSQLKeywords(data);
      if (keywordCount > 2) {
        result.detected = true;
        result.type = 'MULTIPLE_KEYWORDS';
        result.value = data.substring(0, 200);
        result.confidence = Math.min(0.5 + (keywordCount * 0.1), 1.0);
        return result;
      }
      
      // Check for encoded attacks
      const decoded = this.decodeAttack(data);
      if (decoded !== data) {
        const decodedResult = this.scanForInjection(decoded, source, depth + 1);
        if (decodedResult.detected) {
          return decodedResult;
        }
      }
      
    } else if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const itemResult = this.scanForInjection(data[i], source, depth + 1);
        if (itemResult.detected) {
          return itemResult;
        }
      }
    } else if (data && typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        // Check key for injection
        const keyResult = this.scanForInjection(key, source, depth + 1);
        if (keyResult.detected) {
          return keyResult;
        }
        
        // Check value for injection
        const valueResult = this.scanForInjection(value, source, depth + 1);
        if (valueResult.detected) {
          return valueResult;
        }
      }
    }
    
    return result;
  }
  
  calculateConfidence(value, type) {
    let confidence = 0.5; // Base confidence
    
    // Adjust based on pattern type
    const typeWeights = {
      classic: 0.7,
      unionBased: 0.9,
      timeBased: 0.8,
      booleanBased: 0.75,
      errorBased: 0.85,
      stacked: 0.95,
      advanced: 0.9
    };
    
    confidence = typeWeights[type] || 0.6;
    
    // Adjust based on value length
    if (value && value.length > 100) confidence += 0.1;
    if (value && value.length > 500) confidence += 0.1;
    
    // Adjust based on special characters (FIXED)
    if (value && typeof value === 'string') {
      // Fixed regex pattern - escape the hyphen
      const specialChars = (value.match(/['"();\-]/g) || []).length;
      confidence += Math.min(specialChars * 0.05, 0.2);
    }
    
    return Math.min(confidence, 1.0);
  }
  
  countSQLKeywords(value) {
    const keywords = [
      'select', 'insert', 'update', 'delete', 'drop', 'union',
      'exec', 'execute', 'alter', 'create', 'truncate', 'rename'
    ];
    
    let count = 0;
    const lowerValue = value.toLowerCase();
    
    for (const keyword of keywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = lowerValue.match(regex);
      if (matches) {
        count += matches.length;
      }
    }
    
    return count;
  }
  
  decodeAttack(value) {
    let decoded = value;
    
    // URL decode
    try {
      decoded = decodeURIComponent(decoded);
    } catch (e) {}
    
    // Hex decode
    if (/^0x[0-9a-f]+$/i.test(decoded)) {
      try {
        const hex = decoded.slice(2);
        decoded = Buffer.from(hex, 'hex').toString();
      } catch (e) {}
    }
    
    // Base64 decode
    if (/^[A-Za-z0-9+/]+={0,2}$/.test(decoded) && decoded.length % 4 === 0) {
      try {
        decoded = Buffer.from(decoded, 'base64').toString();
      } catch (e) {}
    }
    
    // Unicode decode
    decoded = decoded.replace(/\\u([0-9a-f]{4})/gi, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
    
    // HTML entity decode
    decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    }).replace(/&#(\d+);/g, (match, code) => {
      return String.fromCharCode(parseInt(code, 10));
    });
    
    return decoded;
  }
  
  handleSQLInjection(ip, attackDetails, req) {
    const attack = {
      type: 'SQL_INJECTION',
      ip: ip,
      severity: attackDetails.confidence > 0.8 ? 'CRITICAL' : 'HIGH',
      timestamp: new Date().toISOString(),
      details: {
        pattern: attackDetails.pattern,
        injectionType: attackDetails.type,
        source: attackDetails.source,
        payload: attackDetails.value,
        confidence: attackDetails.confidence,
        url: req.url,
        method: req.method
      }
    };
    
    // Track attempt
    if (!this.attackAttempts.has(ip)) {
      this.attackAttempts.set(ip, {
        attempts: [],
        firstSeen: Date.now(),
        lastSeen: Date.now()
      });
    }
    
    const data = this.attackAttempts.get(ip);
    data.attempts.push(attack);
    data.lastSeen = Date.now();
    
    // Keep last 100 attempts
    if (data.attempts.length > 100) {
      data.attempts = data.attempts.slice(-100);
    }
    
    // Block IP after 3 attempts
    if (data.attempts.length >= 3) {
      this.blockedIPs.add(ip);
      attack.severity = 'CRITICAL';
      attack.blocked = true;
    }
    
    // Log attack
    this.logAttack(attack);
    
    // Emit event for notification
    this.emit('sql-injection-detected', attack);
    
    // Schedule unblock after 24 hours if blocked
    if (attack.blocked) {
      setTimeout(() => {
        this.blockedIPs.delete(ip);
        console.log(`IP ${ip} unblocked after SQL injection attempts`);
      }, 24 * 60 * 60 * 1000);
    }
  }
  
  cleanOldData() {
    const now = Date.now();
    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    
    for (const [ip, data] of this.attackAttempts) {
      if (data.lastSeen < oneDayAgo) {
        this.attackAttempts.delete(ip);
      }
    }
  }
  
  logAttack(attack) {
    const logDir = path.join(__dirname, '../logs');
    const logPath = path.join(logDir, 'alerts.log');
    
    // Ensure logs directory exists
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.appendFileSync(logPath, JSON.stringify(attack) + '\n');
    
    // Also save to attacks.json
    const attacksPath = path.join(logDir, 'attacks.json');
    let attacks = [];
    
    if (fs.existsSync(attacksPath)) {
      try {
        const data = fs.readFileSync(attacksPath, 'utf8');
        attacks = JSON.parse(data);
        if (!Array.isArray(attacks)) attacks = [];
      } catch (error) {
        console.error('Failed to read attacks.json:', error);
        attacks = [];
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
    return {
      totalAttempts: Array.from(this.attackAttempts.values())
        .reduce((sum, data) => sum + data.attempts.length, 0),
      uniqueAttackers: this.attackAttempts.size,
      blockedIPs: this.blockedIPs.size,
      recentAttacks: Array.from(this.attackAttempts.entries())
        .map(([ip, data]) => ({
          ip,
          attemptCount: data.attempts.length,
          lastSeen: new Date(data.lastSeen).toISOString(),
          lastPayload: data.attempts[data.attempts.length - 1]?.details.payload
        }))
        .sort((a, b) => b.attemptCount - a.attemptCount)
        .slice(0, 10)
    };
  }
}

module.exports = new SQLInjectionDetector();