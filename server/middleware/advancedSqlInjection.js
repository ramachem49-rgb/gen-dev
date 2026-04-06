const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class SQLInjectionProtection {
  constructor() {
    this.suspiciousPatterns = [
      // Basic SQL injection patterns
      /(\b(select|insert|update|delete|drop|union|exec|execute|script|alter|create|truncate|rename)\b)/i,
      /(';|--|\bOR\b.*=.*\bOR\b|'.*\bor\b.*=)/i,
      /(\|\||&&|;\s*$)/,
      
      // Advanced SQL injection patterns
      /(\b(union\s+all\s+select|union\s+select|select\s+.*\s+from)\b)/i,
      /(\b(and|or)\s+\d+\s*=\s*\d+\b)/i,
      /('\s*(or|and)\s*'.*'\s*=\s*')/i,
      /(\b(exec|execute)\s+xp_cmdshell\b)/i,
      /(\b(load_file|outfile|dumpfile)\s*\(?)/i,
      /(\b(version\(\)|database\(\)|user\(\)|current_user\(\))\b)/i,
      /(\b(information_schema|mysql\.|pg_|sys\.)\b)/i,
      
      // Time-based blind injection
      /(\b(sleep|benchmark|pg_sleep|waitfor\s+delay|wait_timeout)\s*\(?\s*\d+\s*\)?)/i,
      
      // Boolean-based blind injection
      /(\d+\s*=\s*\d+\s*(and|or)\s*\d+\s*=\s*\d+)/i,
      /('\s*(=|like|in)\s*'[^']*'\s*(and|or)\s*'\d+\s*=\s*'\d+)/i,
      
      // Error-based injection
      /(\b(extractvalue|updatexml|floor|rand|exp)\s*\(.*\))/i,
      /(convert|cast)\s*\(.*,\s*(int|char|date)\)/i,
      
      // Stacked queries
      /(;\s*(select|insert|update|delete|drop|create)\b)/i,
      
      // Comment attacks
      /(\/\*.*\*\/|--\s|#\s|;\s*$)/,
      
      // Unicode and encoding tricks
      /(%27|%22|%3B|%2D%2D|%23|%00)/i,
      /(0x[0-9a-f]{2,})/i,
      
      // JSON injection
      /(\{.*\}.*\bor\b.*\bselect\b)/i,
      
      // NoSQL injection
      /(\b(where|regex|exists|type|mod)\s*:\s*\{)/i,
      /(\$\s*(gt|gte|lt|lte|eq|ne|in|nin|regex)\b)/i
    ];

    this.sqlKeywords = [
      'select', 'insert', 'update', 'delete', 'drop', 'union', 
      'exec', 'execute', 'script', 'alter', 'create', 'truncate',
      'rename', 'declare', 'xp_cmdshell', 'sp_', 'sysobjects',
      'information_schema', 'mysql', 'pg_', 'sys'
    ];

    this.logPath = path.join(__dirname, '../logs/sql_injection.log');
    this.blockedIPs = new Map();
    this.suspiciousIPs = new Map();
  }

  // Main detection function
  detectInjection(req, res, next) {
    const ip = req.ip;
    const now = Date.now();

    // Check if IP is blocked
    if (this.isIPBlocked(ip)) {
      this.logAttack('BLOCKED_IP_ATTEMPT', ip, req.path, req.body);
      return res.status(403).json({
        success: false,
        error: 'Access denied'
      });
    }

    // Check all possible injection points
    const injectionPoints = [
      { type: 'body', data: req.body },
      { type: 'query', data: req.query },
      { type: 'params', data: req.params },
      { type: 'headers', data: req.headers },
      { type: 'cookies', data: req.cookies }
    ];

    for (const point of injectionPoints) {
      if (point.data) {
        const result = this.scanForInjection(point.data, point.type);
        
        if (result.detected) {
          // Track this IP
          this.trackSuspiciousActivity(ip, result);
          
          // Log the attack
          this.logAttack('INJECTION_DETECTED', ip, req.path, {
            type: point.type,
            pattern: result.pattern,
            value: result.value,
            confidence: result.confidence
          });

          // Send alert for high confidence attacks
          if (result.confidence > 0.8) {
            this.sendAlert(ip, req.path, result);
          }

          // Block IP if multiple attempts
          if (this.shouldBlockIP(ip)) {
            this.blockIP(ip);
            return res.status(403).json({
              success: false,
              error: 'Access denied due to suspicious activity'
            });
          }

          return res.status(400).json({
            success: false,
            error: 'Invalid input detected'
          });
        }
      }
    }

    next();
  }

  // Scan for injection patterns
  scanForInjection(data, source, depth = 0) {
    if (depth > 10) return { detected: false }; // Prevent deep recursion

    const result = {
      detected: false,
      pattern: null,
      value: null,
      confidence: 0
    };

    if (typeof data === 'string') {
      // Check for SQL injection patterns
      for (const pattern of this.suspiciousPatterns) {
        if (pattern.test(data)) {
          result.detected = true;
          result.pattern = pattern.toString();
          result.value = data.substring(0, 100); // Truncate long values
          result.confidence = this.calculateConfidence(data);
          break;
        }
      }

      // Check for multiple SQL keywords
      if (!result.detected) {
        const keywordCount = this.countSQLKeywords(data);
        if (keywordCount > 2) {
          result.detected = true;
          result.pattern = 'MULTIPLE_SQL_KEYWORDS';
          result.value = data.substring(0, 100);
          result.confidence = 0.6 + (keywordCount * 0.1);
        }
      }

      // Check for encoded attacks
      if (!result.detected) {
        const decoded = this.decodeAttack(data);
        if (decoded !== data) {
          const decodedResult = this.scanForInjection(decoded, source, depth + 1);
          if (decodedResult.detected) {
            return decodedResult;
          }
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
      for (const key in data) {
        // Check key for injection
        const keyResult = this.scanForInjection(key, source, depth + 1);
        if (keyResult.detected) {
          return keyResult;
        }

        // Check value for injection
        const valueResult = this.scanForInjection(data[key], source, depth + 1);
        if (valueResult.detected) {
          return valueResult;
        }
      }
    }

    return result;
  }

  // Calculate confidence score
  calculateConfidence(value) {
    let score = 0;
    
    // Check for exact SQL keywords
    for (const keyword of this.sqlKeywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      if (regex.test(value)) {
        score += 0.3;
      }
    }

    // Check for SQL operators
    if (/[=<>!]+\s*\d+/i.test(value)) score += 0.2;
    if (/'\s*(or|and)\s*'\d+\s*=\s*'\d+/i.test(value)) score += 0.4;
    if (/;\s*$/.test(value)) score += 0.3;
    if (/--/.test(value)) score += 0.3;
    if (/\/\*.*\*\//.test(value)) score += 0.4;

    // Check for comments
    if (/\/\*|\*\/|--|#/.test(value)) score += 0.2;

    // Check for UNION attacks
    if (/union\s+all\s+select/i.test(value)) score += 0.5;
    if (/union\s+select/i.test(value)) score += 0.4;

    // Check for time-based attacks
    if (/sleep\s*\(/i.test(value)) score += 0.5;
    if (/waitfor\s+delay/i.test(value)) score += 0.5;

    return Math.min(score, 1.0);
  }

  // Count SQL keywords in string
  countSQLKeywords(value) {
    let count = 0;
    const lowerValue = value.toLowerCase();
    
    for (const keyword of this.sqlKeywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = lowerValue.match(regex);
      if (matches) {
        count += matches.length;
      }
    }
    
    return count;
  }

  // Decode potential encoded attacks
  decodeAttack(value) {
    let decoded = value;
    
    // URL decode
    try {
      decoded = decodeURIComponent(decoded);
    } catch (e) {
      // Ignore decode errors
    }

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

  // Track suspicious IPs
  trackSuspiciousActivity(ip, attackInfo) {
    const now = Date.now();
    
    if (!this.suspiciousIPs.has(ip)) {
      this.suspiciousIPs.set(ip, {
        count: 1,
        firstSeen: now,
        lastSeen: now,
        attacks: [attackInfo]
      });
    } else {
      const data = this.suspiciousIPs.get(ip);
      data.count++;
      data.lastSeen = now;
      data.attacks.push(attackInfo);
      
      // Keep only last 10 attacks
      if (data.attacks.length > 10) {
        data.attacks.shift();
      }
      
      this.suspiciousIPs.set(ip, data);
    }
  }

  // Check if IP should be blocked
  shouldBlockIP(ip) {
    const data = this.suspiciousIPs.get(ip);
    if (!data) return false;

    const now = Date.now();
    const timeWindow = 5 * 60 * 1000; // 5 minutes

    // Block if more than 5 attempts in 5 minutes
    if (data.count >= 5 && (now - data.firstSeen) < timeWindow) {
      return true;
    }

    // Block if high confidence attacks
    const highConfidenceAttacks = data.attacks.filter(a => a.confidence > 0.8).length;
    if (highConfidenceAttacks >= 3) {
      return true;
    }

    return false;
  }

  // Block an IP
  blockIP(ip) {
    const blockUntil = Date.now() + (24 * 60 * 60 * 1000); // Block for 24 hours
    this.blockedIPs.set(ip, blockUntil);
    
    this.logAttack('IP_BLOCKED', ip, null, {
      reason: 'Multiple injection attempts',
      blockUntil: new Date(blockUntil).toISOString()
    });

    // Clean up from suspicious IPs
    this.suspiciousIPs.delete(ip);
  }

  // Check if IP is blocked
  isIPBlocked(ip) {
    if (!this.blockedIPs.has(ip)) return false;
    
    const blockUntil = this.blockedIPs.get(ip);
    if (Date.now() > blockUntil) {
      this.blockedIPs.delete(ip);
      return false;
    }
    
    return true;
  }

  // Log attack
  logAttack(type, ip, path, details) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      type,
      ip,
      path,
      details,
      userAgent: global.currentUserAgent || 'unknown'
    };

    fs.appendFileSync(
      this.logPath,
      JSON.stringify(logEntry) + '\n'
    );

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('SQL Injection Alert:', logEntry);
    }
  }

  // Send alert
  sendAlert(ip, path, attackInfo) {
    const alert = {
      timestamp: new Date().toISOString(),
      type: 'SQL_INJECTION_ATTACK',
      ip,
      path,
      confidence: attackInfo.confidence,
      pattern: attackInfo.pattern,
      value: attackInfo.value
    };

    // Send to monitoring system
    if (global.alertSystem) {
      global.alertSystem.sendDiscordAlert(
        `🚨 **SQL Injection Attack Detected**\n` +
        `IP: ${ip}\n` +
        `Path: ${path}\n` +
        `Confidence: ${attackInfo.confidence * 100}%\n` +
        `Pattern: ${attackInfo.pattern}\n` +
        `Value: ${attackInfo.value}`,
        'critical'
      );
    }

    // Store in database for analysis
    this.storeAttackForAnalysis(alert);
  }

  // Store attack for analysis
  async storeAttackForAnalysis(attack) {
    // This could be stored in a separate security database
    const attackLog = path.join(__dirname, '../logs/attacks.json');
    
    try {
      let attacks = [];
      if (fs.existsSync(attackLog)) {
        attacks = JSON.parse(fs.readFileSync(attackLog, 'utf8'));
      }
      
      attacks.push(attack);
      
      // Keep only last 1000 attacks
      if (attacks.length > 1000) {
        attacks = attacks.slice(-1000);
      }
      
      fs.writeFileSync(attackLog, JSON.stringify(attacks, null, 2));
    } catch (error) {
      console.error('Failed to store attack:', error);
    }
  }
}

module.exports = new SQLInjectionProtection();