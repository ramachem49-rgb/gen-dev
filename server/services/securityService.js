// Update model paths
const SecurityLog = require('../models/SecurityLog');
const BlockedIP = require('../models/BlockedIP');
const ThreatIntelligence = require('../models/ThreatIntelligence');
const Alert = require('../models/Alert');

// Update telegram service path
const telegramService = require('./telegramService');

let geoip;
try { geoip = require('geoip-lite'); } catch { geoip = { lookup: () => null }; }

class SecurityService {
  constructor() {
    this.initialized = false;
    this.attackPatterns = new Map();
    this.threatIntelligence = new Map();
    this.scanDetections = new Map();
    this.alertCooldown = new Map();
    
    this.init();
  }

  async init() {
    try {
      // Load threat intelligence
      await this.loadThreatIntelligence();
      
      // Start monitoring
      this.startMonitoring();
      
      // Setup cleanup interval
      setInterval(() => this.cleanup(), 3600000); // Every hour
      
      this.initialized = true;
      console.log('✅ Security Service initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Security Service:', error);
    }
  }

  // Load threat intelligence data
  async loadThreatIntelligence() {
    try {
      const threats = await ThreatIntelligence.find({ active: true });
      
      threats.forEach(threat => {
        const key = `${threat.type}:${threat.indicator}`;
        this.threatIntelligence.set(key, threat);
      });
      
      console.log(`📊 Loaded ${threats.length} threat intelligence entries`);
    } catch (error) {
      console.error('Failed to load threat intelligence:', error);
    }
  }

  // Detect and log security event — never throws, always safe to call from middleware
  async detectSecurityEvent(eventData) {
    try {
      return await this._detectSecurityEvent(eventData);
    } catch (err) {
      console.error('SecurityService.detectSecurityEvent error:', err.message);
      return null;
    }
  }

  async _detectSecurityEvent(eventData) {
    const {
      type,
      severity = 'WARNING',
      ip,
      userId = null,
      email = null,
      payload = null,
      description = null,
      userAgent = null,
      path = null,
      method = null,
      metadata = {}
    } = eventData;

    const timestamp = new Date();
    const geo = ip ? geoip.lookup(ip) : null;

    // Create security log
    const securityLog = new SecurityLog({
      timestamp,
      eventType: type,
      severity,
      ip: ip || 'unknown',
      user: userId ? {
        userId,
        email,
        role: metadata.userRole
      } : null,
      location: geo ? {
        country: geo.country,
        city: geo.city,
        latitude: geo.ll?.[0],
        longitude: geo.ll?.[1],
        timezone: geo.timezone,
        isp: metadata.isp
      } : null,
      request: {
        method: method || 'UNKNOWN',
        url: path || 'unknown',
        userAgent: userAgent || 'unknown',
        body: payload ? { payload: payload.substring(0, 500) } : null,
        query: metadata.query,
        params: metadata.params
      },
      threat: {
        type,
        score: this.calculateThreatScore(severity, type),
        confidence: metadata.confidence || 0.5,
        patterns: metadata.patterns || [],
        rules: metadata.rules || []
      },
      description: description || `${type} detected from ${ip || 'unknown'}`,
      metadata
    });

    await securityLog.save();

    // Check if we need to block IP
    const shouldBlock = await this.shouldBlockIP(ip, type, severity);
    if (shouldBlock && ip) {
      await this.blockIP(ip, type, severity, securityLog._id);
    }

    // Check if we need to create alert
    const shouldAlert = this.shouldCreateAlert(type, severity);
    if (shouldAlert) {
      await this.createAlert(securityLog);
    }

    // Send Telegram notification for critical events
    if (severity === 'CRITICAL' || severity === 'ERROR') {
      await telegramService.sendSecurityAlert({
        title: `${type} Detected!`,
        type,
        severity,
        ip,
        location: geo ? `${geo.country}, ${geo.city}` : null,
        payload,
        description: description || `${type} detected from ${ip}`,
        action: shouldBlock ? 'IP automatically blocked' : 'Monitoring active',
        threatScore: this.calculateThreatScore(severity, type),
        user: email,
        path,
        method
      });
    }

    // For medium severity, send daily summary instead of instant alerts
    if (severity === 'MEDIUM' && !this.alertCooldown.has(type)) {
      this.alertCooldown.set(type, timestamp);
      setTimeout(() => this.alertCooldown.delete(type), 3600000); // 1 hour cooldown
      
      await telegramService.sendSecurityAlert({
        title: `${type} Detected`,
        type,
        severity,
        ip,
        location: geo ? `${geo.country}, ${geo.city}` : null,
        description: description || `${type} detected from ${ip}`,
        action: 'Logged for monitoring',
        threatScore: this.calculateThreatScore(severity, type)
      });
    }

    return securityLog;
  }

  // Calculate threat score based on severity and type
  calculateThreatScore(severity, type) {
    const severityScores = {
      'CRITICAL': 90,
      'ERROR': 70,
      'WARNING': 50,
      'INFO': 20
    };

    const typeMultipliers = {
      'SQL_INJECTION': 1.2,
      'DDOS_ATTACK': 1.3,
      'BRUTE_FORCE': 1.1,
      'XSS_ATTACK': 1.1,
      'PORT_SCAN': 0.9,
      'CLONE_DETECTED': 1.4,
      'DATABASE_CLONE': 1.5,
      'RATE_LIMIT_EXCEEDED': 0.7,
      'LOGIN_FAILURE': 0.8,
      'ADMIN_ACTION': 0.5
    };

    const baseScore = severityScores[severity] || 50;
    const multiplier = typeMultipliers[type] || 1.0;
    
    return Math.min(100, Math.floor(baseScore * multiplier));
  }

  // Determine if IP should be blocked
  async shouldBlockIP(ip, type, severity) {
    if (!ip) return false;

    // Always block critical threats
    if (severity === 'CRITICAL') {
      return true;
    }

    // Check recent activity from this IP
    const oneHourAgo = new Date(Date.now() - 3600000);
    const recentEvents = await SecurityLog.countDocuments({
      ip,
      timestamp: { $gte: oneHourAgo },
      severity: { $in: ['ERROR', 'CRITICAL'] }
    });

    // Block if more than 3 critical events in 1 hour
    if (recentEvents >= 3) {
      return true;
    }

    // Block for specific threat types
    const autoBlockTypes = ['SQL_INJECTION', 'XSS_ATTACK', 'BRUTE_FORCE', 'DDOS_ATTACK'];
    if (autoBlockTypes.includes(type)) {
      return true;
    }

    return false;
  }

  // Block IP address
  async blockIP(ip, reason, severity, logId) {
    try {
      // Check if already blocked
      const existing = await BlockedIP.findOne({
        ip,
        unblockedAt: null,
        expiresAt: { $gt: new Date() }
      });

      if (existing) {
        // Extend block duration
        const newExpiry = new Date(Date.now() + this.getBlockDuration(severity));
        existing.expiresAt = newExpiry;
        existing.attempts += 1;
        existing.lastSeen = new Date();
        await existing.save();
        
        await telegramService.sendSecurityAlert({
          title: 'IP Block Extended',
          type: 'IP_BLOCK_EXTENDED',
          severity: 'WARNING',
          ip,
          description: `IP ${ip} block extended due to continued malicious activity`,
          action: `Block extended until ${newExpiry.toLocaleString()}`,
          threatScore: 80
        });
        
        return existing;
      }

      // Calculate block duration
      const blockDuration = this.getBlockDuration(severity);
      const expiresAt = new Date(Date.now() + blockDuration);

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
        }],
        blockedBy: { userId: 'system', email: 'auto-block@system' }
      });

      await blockedIP.save();

      // Update security log
      if (logId) {
        await SecurityLog.findByIdAndUpdate(logId, {
          action: {
            type: 'BLOCK_IP',
            result: 'SUCCESS',
            details: `IP blocked until ${expiresAt.toISOString()}`
          }
        });
      }

      // Send notification
      await telegramService.sendSecurityAlert({
        title: 'IP Blocked',
        type: 'IP_BLOCKED',
        severity: 'WARNING',
        ip,
        description: `IP ${ip} has been blocked due to ${reason}`,
        action: `Blocked for ${Math.floor(blockDuration / 3600000)} hours`,
        threatScore: 85
      });

      // Log to system
      console.log(`🔒 IP ${ip} blocked: ${reason} (${severity})`);

      return blockedIP;

    } catch (error) {
      console.error('Failed to block IP:', error);
      return null;
    }
  }

  // Get block duration based on severity
  getBlockDuration(severity) {
    const durations = {
      'CRITICAL': 30 * 24 * 3600000, // 30 days
      'ERROR': 7 * 24 * 3600000,     // 7 days
      'WARNING': 24 * 3600000,        // 1 day
      'MEDIUM': 12 * 3600000,         // 12 hours
      'LOW': 6 * 3600000              // 6 hours
    };
    return durations[severity] || 24 * 3600000;
  }

  // Determine if alert should be created
  shouldCreateAlert(type, severity) {
    // Create alert for critical and error severity
    if (severity === 'CRITICAL' || severity === 'ERROR') {
      return true;
    }

    // Create alert for specific threat types
    const alertTypes = ['SQL_INJECTION', 'DDOS_ATTACK', 'BRUTE_FORCE', 'CLONE_DETECTED'];
    if (alertTypes.includes(type)) {
      return true;
    }

    return false;
  }

  // Create alert
  async createAlert(securityLog) {
    try {
      // Check for duplicate alerts (within 5 minutes)
      const fiveMinutesAgo = new Date(Date.now() - 300000);
      const existingAlert = await Alert.findOne({
        eventType: securityLog.eventType,
        'affected.ips': securityLog.ip,
        createdAt: { $gte: fiveMinutesAgo },
        status: { $ne: 'RESOLVED' }
      });

      if (existingAlert) {
        // Update existing alert instead of creating new one
        existingAlert.metadata = {
          ...existingAlert.metadata,
          occurrences: (existingAlert.metadata?.occurrences || 1) + 1,
          lastOccurrence: new Date()
        };
        await existingAlert.save();
        return existingAlert;
      }

      const alert = new Alert({
        title: `${securityLog.severity}: ${securityLog.eventType}`,
        description: securityLog.description,
        severity: securityLog.severity,
        category: 'SECURITY',
        source: 'security-service',
        eventType: securityLog.eventType,
        affected: {
          ips: securityLog.ip ? [securityLog.ip] : [],
          users: securityLog.user?.userId ? [securityLog.user.userId] : []
        },
        metadata: {
          threatScore: securityLog.threat?.score,
          confidence: securityLog.threat?.confidence,
          patterns: securityLog.threat?.patterns,
          request: securityLog.request
        },
        tags: [securityLog.eventType, securityLog.severity]
      });

      await alert.save();

      return alert;

    } catch (error) {
      console.error('Failed to create alert:', error);
      return null;
    }
  }

  // Start monitoring system
  startMonitoring() {
    // Monitor for DDoS attacks every minute
    setInterval(() => this.monitorDDoSAttacks(), 60000);
    
    // Monitor for brute force attacks every 5 minutes
    setInterval(() => this.monitorBruteForceAttacks(), 300000);
    
    // Monitor for port scans every 5 minutes
    setInterval(() => this.monitorPortScans(), 300000);
    
    // Generate security report every hour
    setInterval(() => this.generateSecurityReport(), 3600000);
  }

  // Monitor for DDoS attacks
  async monitorDDoSAttacks() {
    try {
      const oneMinuteAgo = new Date(Date.now() - 60000);
      
      const attackCounts = await SecurityLog.aggregate([
        { $match: { timestamp: { $gte: oneMinuteAgo } } },
        { $group: { _id: '$ip', count: { $sum: 1 } } },
        { $match: { count: { $gt: 100 } } } // More than 100 requests in 1 minute
      ]);
      
      for (const attack of attackCounts) {
        await this.detectSecurityEvent({
          type: 'DDOS_ATTACK',
          severity: 'CRITICAL',
          ip: attack._id,
          description: `Potential DDoS attack detected: ${attack.count} requests in 1 minute`,
          metadata: { requestCount: attack.count, timeframe: '1 minute' }
        });
      }
    } catch (error) {
      console.error('Failed to monitor DDoS attacks:', error);
    }
  }

  // Monitor for brute force attacks
  async monitorBruteForceAttacks() {
    try {
      const fiveMinutesAgo = new Date(Date.now() - 300000);
      
      const bruteForceAttempts = await SecurityLog.aggregate([
        {
          $match: {
            timestamp: { $gte: fiveMinutesAgo },
            eventType: 'LOGIN_FAILURE'
          }
        },
        {
          $group: {
            _id: '$ip',
            count: { $sum: 1 },
            emails: { $addToSet: '$request.body.email' }
          }
        },
        { $match: { count: { $gt: 5 } } } // More than 5 failures in 5 minutes
      ]);
      
      for (const attempt of bruteForceAttempts) {
        await this.detectSecurityEvent({
          type: 'BRUTE_FORCE',
          severity: 'HIGH',
          ip: attempt._id,
          description: `Brute force attack detected: ${attempt.count} failed login attempts in 5 minutes`,
          metadata: {
            attempts: attempt.count,
            emails: attempt.emails,
            timeframe: '5 minutes'
          }
        });
      }
    } catch (error) {
      console.error('Failed to monitor brute force attacks:', error);
    }
  }

  // Monitor for port scans
  async monitorPortScans() {
    try {
      const suspiciousPaths = [
        '/admin', '/config', '/.env', '/wp-admin', '/phpmyadmin',
        '/sql', '/backup', '/database', '/mysql', '/phpinfo',
        '/server-status', '/.git', '/.svn', '/.DS_Store'
      ];
      
      const fiveMinutesAgo = new Date(Date.now() - 300000);
      
      const scanAttempts = await SecurityLog.aggregate([
        {
          $match: {
            timestamp: { $gte: fiveMinutesAgo },
            'request.url': { $in: suspiciousPaths }
          }
        },
        {
          $group: {
            _id: '$ip',
            paths: { $addToSet: '$request.url' },
            count: { $sum: 1 }
          }
        },
        { $match: { count: { $gt: 10 } } } // More than 10 suspicious paths in 5 minutes
      ]);
      
      for (const scan of scanAttempts) {
        await this.detectSecurityEvent({
          type: 'PORT_SCAN',
          severity: 'MEDIUM',
          ip: scan._id,
          description: `Port scan detected: ${scan.count} suspicious paths accessed`,
          metadata: {
            paths: scan.paths,
            attempts: scan.count,
            timeframe: '5 minutes'
          }
        });
      }
    } catch (error) {
      console.error('Failed to monitor port scans:', error);
    }
  }

  // Generate security report
  async generateSecurityReport() {
    try {
      const now = new Date();
      const oneHourAgo = new Date(now - 3600000);
      const oneDayAgo = new Date(now - 86400000);
      const oneWeekAgo = new Date(now - 604800000);
      
      const [attacksLastHour, attacksLastDay, attacksLastWeek, blockedIPs] = await Promise.all([
        SecurityLog.countDocuments({ timestamp: { $gte: oneHourAgo } }),
        SecurityLog.countDocuments({ timestamp: { $gte: oneDayAgo } }),
        SecurityLog.countDocuments({ timestamp: { $gte: oneWeekAgo } }),
        BlockedIP.countDocuments({ expiresAt: { $gt: now }, unblockedAt: null })
      ]);
      
      const attacksByType = await SecurityLog.aggregate([
        { $match: { timestamp: { $gte: oneDayAgo } } },
        { $group: { _id: '$eventType', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]);
      
      const report = {
        timestamp: now,
        period: {
          lastHour: attacksLastHour,
          lastDay: attacksLastDay,
          lastWeek: attacksLastWeek
        },
        blockedIPs,
        topAttacks: attacksByType,
        status: attacksLastHour > 50 ? 'UNDER_ATTACK' :
                attacksLastHour > 20 ? 'HIGH_RISK' :
                attacksLastHour > 5 ? 'ELEVATED_RISK' : 'NORMAL'
      };
      
      // Save report
      const reportDir = path.join(__dirname, '../../reports');
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(
        path.join(reportDir, `security_report_${Date.now()}.json`),
        JSON.stringify(report, null, 2)
      );
      
      // Send summary if there are significant attacks
      if (attacksLastHour > 10) {
        await telegramService.sendSecurityAlert({
          title: 'Security Report Summary',
          type: 'SECURITY_REPORT',
          severity: attacksLastHour > 50 ? 'CRITICAL' : 'WARNING',
          description: `Security report for the last hour:\n` +
                      `- Total attacks: ${attacksLastHour}\n` +
                      `- Blocked IPs: ${blockedIPs}\n` +
                      `- Top attack: ${attacksByType[0]?._id || 'None'} (${attacksByType[0]?.count || 0})\n` +
                      `- Status: ${report.status}`,
          action: 'Automated security report',
          threatScore: Math.min(100, attacksLastHour * 2)
        });
      }
      
    } catch (error) {
      console.error('Failed to generate security report:', error);
    }
  }

  // Check IP against threat intelligence
  async checkIPThreatIntelligence(ip) {
    const threats = [];
    
    // Check local database
    const localThreat = this.threatIntelligence.get(`IP:${ip}`);
    if (localThreat) {
      threats.push(localThreat);
    }
    
    // Check recent activity
    const oneDayAgo = new Date(Date.now() - 86400000);
    const recentActivity = await SecurityLog.find({
      ip,
      timestamp: { $gte: oneDayAgo }
    }).limit(100);
    
    if (recentActivity.length > 50) {
      threats.push({
        type: 'IP',
        indicator: ip,
        threat: 'HIGH_ACTIVITY',
        confidence: 0.8,
        severity: 'HIGH'
      });
    }
    
    return threats;
  }

  // Get security statistics
  async getSecurityStats() {
    const now = new Date();
    const oneHourAgo = new Date(now - 3600000);
    const oneDayAgo = new Date(now - 86400000);
    
    const [
      totalEvents,
      eventsLastHour,
      eventsLastDay,
      criticalEvents,
      blockedIPs,
      activeAlerts
    ] = await Promise.all([
      SecurityLog.countDocuments(),
      SecurityLog.countDocuments({ timestamp: { $gte: oneHourAgo } }),
      SecurityLog.countDocuments({ timestamp: { $gte: oneDayAgo } }),
      SecurityLog.countDocuments({ severity: 'CRITICAL', timestamp: { $gte: oneDayAgo } }),
      BlockedIP.countDocuments({ expiresAt: { $gt: now }, unblockedAt: null }),
      Alert.countDocuments({ status: { $ne: 'RESOLVED' } })
    ]);
    
    const topAttacks = await SecurityLog.aggregate([
      { $match: { timestamp: { $gte: oneDayAgo } } },
      { $group: { _id: '$eventType', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    
    const topIPs = await SecurityLog.aggregate([
      { $match: { timestamp: { $gte: oneDayAgo } } },
      { $group: { _id: '$ip', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    
    return {
      overview: {
        totalEvents,
        eventsLastHour,
        eventsLastDay,
        criticalEvents,
        blockedIPs,
        activeAlerts
      },
      topAttacks,
      topIPs,
      protectionStatus: {
        sqlInjection: true,
        xss: true,
        ddos: true,
        rateLimiting: true,
        portScan: true,
        bruteForce: true
      },
      timestamp: now
    };
  }

  // Clean up old data
  async cleanup() {
    try {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000);
      const sevenDaysAgo = new Date(Date.now() - 7 * 86400000);
      
      // Remove old resolved alerts
      await Alert.deleteMany({
        status: 'RESOLVED',
        createdAt: { $lt: thirtyDaysAgo }
      });
      
      // Remove old blocked IPs that have expired
      await BlockedIP.deleteMany({
        expiresAt: { $lt: new Date() },
        unblockedAt: { $ne: null }
      });
      
      // Archive old security logs (MongoDB TTL will handle this)
      // But we can also archive to file
      const oldLogs = await SecurityLog.find({
        timestamp: { $lt: thirtyDaysAgo },
        archived: { $ne: true }
      }).limit(1000);
      
      if (oldLogs.length > 0) {
        const archiveDir = path.join(__dirname, '../../archives');
        if (!fs.existsSync(archiveDir)) {
          fs.mkdirSync(archiveDir, { recursive: true });
        }
        
        const archiveFile = path.join(archiveDir, `logs_${Date.now()}.json`);
        fs.writeFileSync(archiveFile, JSON.stringify(oldLogs, null, 2));
        
        await SecurityLog.updateMany(
          { _id: { $in: oldLogs.map(l => l._id) } },
          { archived: true }
        );
        
        console.log(`📦 Archived ${oldLogs.length} security logs`);
      }
      
    } catch (error) {
      console.error('Failed to cleanup security data:', error);
    }
  }
}

module.exports = new SecurityService();