const SecurityLog = require('../models/SecurityLog');
const BlockedIP = require('../models/BlockedIP');
const telegramBot = require('../config/telegramBot');
const geoip = require('geoip-lite');
const logger = require('../utils/logger');

class ThreatDetector {
  constructor() {
    this.threatPatterns = {
      sqlInjection: [
        /(\b(select|insert|update|delete|drop|union|exec|execute)\b)/i,
        /(';|--|\bOR\b.*=.*\bOR\b)/i,
        /(\|\||&&|;\s*$)/,
        /(\b(union\s+all\s+select|union\s+select)\b)/i,
        /(\b(and|or)\s+\d+\s*=\s*\d+\b)/i,
        /('\s*(or|and)\s*'.*'\s*=\s*')/i,
        /(\b(load_file|outfile|dumpfile)\s*\(?)/i,
        /(\b(version\(\)|database\(\)|user\(\)|current_user\(\))\b)/i
      ],
      xss: [
        /<script/i,
        /javascript:/i,
        /onerror=/i,
        /onload=/i,
        /onclick=/i,
        /eval\(/i,
        /document\./i,
        /alert\(/i,
        /<iframe/i,
        /<embed/i,
        /<object/i
      ],
      pathTraversal: [
        /\.\.\//,
        /\.\.\\/,
        /%2e%2e%2f/,
        /%2e%2e\\/,
        /\.\.%2f/,
        /\.\.%5c/
      ],
      bruteForce: [
        /admin/,
        /root/,
        /password/,
        /123456/,
        /qwerty/
      ]
    };
    
    this.attackCounts = new Map();
    this.scanDetections = new Map();
  }

  async detectThreat(req, threatData) {
    const ip = req.ip;
    const userAgent = req.get('user-agent');
    const path = req.path;
    const method = req.method;
    
    // Get geo location
    const geo = geoip.lookup(ip);
    
    const threat = {
      timestamp: new Date(),
      ip,
      userAgent,
      path,
      method,
      location: geo ? {
        country: geo.country,
        city: geo.city,
        ll: geo.ll,
        timezone: geo.timezone
      } : null,
      ...threatData
    };
    
    // Check threat type
    let detectedThreats = [];
    
    // Check for SQL Injection
    if (this.detectSQLInjection(threatData)) {
      detectedThreats.push({
        type: 'SQL_INJECTION',
        severity: 'CRITICAL',
        confidence: this.calculateConfidence(threatData.payload, 'sqlInjection')
      });
    }
    
    // Check for XSS
    if (this.detectXSS(threatData)) {
      detectedThreats.push({
        type: 'XSS_ATTACK',
        severity: 'HIGH',
        confidence: this.calculateConfidence(threatData.payload, 'xss')
      });
    }
    
    // Check for brute force
    if (threatData.eventType === 'LOGIN_FAILURE') {
      const bruteForceDetected = await this.detectBruteForce(ip);
      if (bruteForceDetected) {
        detectedThreats.push({
          type: 'BRUTE_FORCE',
          severity: 'HIGH',
          confidence: 0.9
        });
      }
    }
    
    // Check for port scanning
    if (this.detectPortScan(ip, path)) {
      detectedThreats.push({
        type: 'PORT_SCAN',
        severity: 'MEDIUM',
        confidence: 0.8
      });
    }
    
    // Check for DDoS
    const ddosDetected = await this.detectDDoS(ip);
    if (ddosDetected) {
      detectedThreats.push({
        type: 'DDOS_ATTACK',
        severity: 'CRITICAL',
        confidence: 0.95
      });
    }
    
    // Save to database
    for (const threatType of detectedThreats) {
      const securityLog = new SecurityLog({
        timestamp: threat.timestamp,
        eventType: threatType.type,
        severity: threatType.severity,
        ip: threat.ip,
        location: threat.location,
        request: {
          method: threat.method,
          url: threat.path,
          userAgent: threat.userAgent,
          body: threatData.payload ? { payload: threatData.payload.substring(0, 500) } : null
        },
        threat: {
          type: threatType.type,
          score: threatType.confidence * 100,
          confidence: threatType.confidence,
          patterns: threatData.patterns || []
        },
        description: `${threatType.type} detected from ${threat.ip}`
      });
      
      await securityLog.save();
      
      // Send Telegram alert
      await this.sendTelegramAlert(threatType, threat, threatData);
      
      // Block IP if critical
      if (threatType.severity === 'CRITICAL') {
        await this.blockIP(ip, threatType.type, threatType.severity);
      }
    }
    
    return detectedThreats;
  }

  detectSQLInjection(data) {
    if (!data.payload) return false;
    
    const payload = data.payload.toLowerCase();
    
    for (const pattern of this.threatPatterns.sqlInjection) {
      if (pattern.test(payload)) {
        return true;
      }
    }
    
    return false;
  }

  detectXSS(data) {
    if (!data.payload) return false;
    
    const payload = data.payload.toLowerCase();
    
    for (const pattern of this.threatPatterns.xss) {
      if (pattern.test(payload)) {
        return true;
      }
    }
    
    return false;
  }

  async detectBruteForce(ip) {
    const now = Date.now();
    const fiveMinutesAgo = new Date(now - 300000);
    
    const SecurityLog = require('../models/SecurityLog');
    
    const failedAttempts = await SecurityLog.countDocuments({
      ip,
      eventType: 'LOGIN_FAILURE',
      timestamp: { $gte: fiveMinutesAgo }
    });
    
    if (failedAttempts >= 5) {
      return true;
    }
    
    return false;
  }

  detectPortScan(ip, path) {
    // Track requests to different ports/paths
    if (!this.scanDetections.has(ip)) {
      this.scanDetections.set(ip, {
        paths: [],
        timestamp: Date.now()
      });
    }
    
    const data = this.scanDetections.get(ip);
    data.paths.push(path);
    
    // Check for scan pattern (many different paths in short time)
    const uniquePaths = new Set(data.paths);
    if (uniquePaths.size > 20 && (Date.now() - data.timestamp) < 60000) {
      return true;
    }
    
    // Clean up old data
    if (Date.now() - data.timestamp > 60000) {
      this.scanDetections.delete(ip);
    }
    
    return false;
  }

  async detectDDoS(ip) {
    const now = Date.now();
    const oneMinuteAgo = new Date(now - 60000);
    
    const SecurityLog = require('../models/SecurityLog');
    
    const requests = await SecurityLog.countDocuments({
      ip,
      timestamp: { $gte: oneMinuteAgo }
    });
    
    // More than 100 requests in 1 minute = DDoS
    if (requests > 100) {
      return true;
    }
    
    return false;
  }

  calculateConfidence(payload, threatType) {
    let confidence = 0;
    const patterns = this.threatPatterns[threatType];
    
    if (!patterns) return 0;
    
    for (const pattern of patterns) {
      if (pattern.test(payload)) {
        confidence += 0.2;
      }
    }
    
    return Math.min(confidence, 1.0);
  }

  async blockIP(ip, reason, severity) {
    try {
      // Check if already blocked
      const existingBlock = await BlockedIP.findOne({
        ip,
        unblockedAt: null,
        expiresAt: { $gt: new Date() }
      });
      
      if (existingBlock) {
        // Extend block
        existingBlock.expiresAt = new Date(Date.now() + 7 * 86400000);
        existingBlock.attempts += 1;
        await existingBlock.save();
        return;
      }
      
      // Calculate expiration based on severity
      let days = 1;
      if (severity === 'CRITICAL') days = 30;
      else if (severity === 'HIGH') days = 7;
      else if (severity === 'MEDIUM') days = 3;
      
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + days);
      
      const blockedIP = new BlockedIP({
        ip,
        reason,
        severity,
        expiresAt,
        attempts: 1,
        firstSeen: new Date(),
        lastSeen: new Date(),
        rules: [{
          ruleId: `auto-${Date.now()}`,
          description: `Auto-blocked due to ${reason}`,
          triggeredAt: new Date(),
          confidence: 0.9
        }]
      });
      
      await blockedIP.save();
      
      // Send block notification
      await telegramBot.sendAlert({
        title: `IP Blocked - ${reason}`,
        type: 'IP_BLOCKED',
        severity: severity,
        ip: ip,
        description: `IP ${ip} has been automatically blocked for ${days} days due to ${reason}`,
        action: `Blocked for ${days} days`,
        threatScore: 90
      });
      
    } catch (error) {
      console.error('Failed to block IP:', error);
    }
  }

  async sendTelegramAlert(threat, request, threatData) {
    const alert = {
      title: `${threat.type} Detected!`,
      type: threat.type,
      severity: threat.severity,
      ip: request.ip,
      location: request.location,
      payload: threatData.payload,
      description: this.getThreatDescription(threat.type, threatData),
      action: threat.severity === 'CRITICAL' ? 'IP automatically blocked' : 'Monitoring active',
      threatScore: threat.confidence * 100
    };
    
    await telegramBot.sendAlert(alert);
  }

  getThreatDescription(type, data) {
    const descriptions = {
      'SQL_INJECTION': `SQL Injection attempt detected. Payload: ${data.payload?.substring(0, 100)}`,
      'XSS_ATTACK': `Cross-site scripting attempt detected. Payload: ${data.payload?.substring(0, 100)}`,
      'BRUTE_FORCE': `Multiple failed login attempts detected. This could be a brute force attack.`,
      'PORT_SCAN': `Port scanning detected. Attacker is probing for open ports.`,
      'DDOS_ATTACK': `DDoS attack detected! Unusually high number of requests from this IP.`,
      'CLONE_DETECTED': `Website clone detected! Someone is trying to copy your site.`,
      'DATABASE_CLONE': `Database clone attempt detected! Unauthorized database access attempt.`
    };
    
    return descriptions[type] || `Suspicious activity detected: ${type}`;
  }
}

module.exports = new ThreatDetector();