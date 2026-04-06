const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const SecurityLog = require('../models/SecurityLog');
const BlockedIP = require('../models/BlockedIP');
const ThreatIntelligence = require('../models/ThreatIntelligence');
const Alert = require('../models/Alert');
const AuditTrail = require('../models/AuditTrail');

class SecurityDatabaseService {
  constructor() {
    this.sqlitePath = path.join(__dirname, '../../database/security_db/security.db');
    this.sqlite = null;
    this.initialized = false;
    
    this.init();
  }

  // ចាប់ផ្តើម database
  async init() {
    try {
      // បង្កើត directory បើមិនទាន់មាន
      const dbDir = path.dirname(this.sqlitePath);
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true, mode: 0o700 });
      }

      // ភ្ជាប់ SQLite
      this.sqlite = new sqlite3.Database(this.sqlitePath, (err) => {
        if (err) {
          console.error('SQLite connection error:', err);
        } else {
          console.log('Connected to SQLite security database');
          this.createTables();
        }
      });

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize security database:', error);
    }
  }

  // បង្កើត tables
  createTables() {
    const schema = fs.readFileSync(
      path.join(__dirname, '../../database/security_db/schema.sql'),
      'utf8'
    );
    
    this.sqlite.exec(schema, (err) => {
      if (err) {
        console.error('Failed to create tables:', err);
      } else {
        console.log('Security database tables created');
      }
    });
  }

  // កត់ត្រា security event
  async logSecurityEvent(event) {
    try {
      // រក្សាទុកក្នុង MongoDB
      const mongoLog = new SecurityLog(event);
      await mongoLog.save();

      // រក្សាទុកក្នុង SQLite
      const eventId = crypto.randomBytes(16).toString('hex');
      const stmt = this.sqlite.prepare(`
        INSERT INTO security_events (
          event_id, event_type, severity, source_ip, user_id, 
          username, description, details, action_taken
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        eventId,
        event.eventType,
        event.severity || 'INFO',
        event.ip,
        event.user?.userId,
        event.user?.email,
        event.description || '',
        JSON.stringify(event),
        event.action?.result || ''
      );

      stmt.finalize();

      // ពិនិត្យមើលថាតើត្រូវបង្កើត alert ដែរឬទេ
      if (event.severity === 'CRITICAL' || event.severity === 'ERROR') {
        await this.createAlert(event);
      }

      // ពិនិត្យមើលថាតើត្រូវ block IP ដែរឬទេ
      if (this.shouldBlockIP(event)) {
        await this.blockIP(event.ip, event);
      }

      return mongoLog;
    } catch (error) {
      console.error('Failed to log security event:', error);
      throw error;
    }
  }

  // បង្កើត alert
  async createAlert(event) {
    try {
      const alert = new Alert({
        title: `${event.severity}: ${event.eventType}`,
        description: event.description || `Security event detected: ${event.eventType}`,
        severity: event.severity,
        category: 'SECURITY',
        source: event.source || 'system',
        eventType: event.eventType,
        affected: {
          ips: event.ip ? [event.ip] : [],
          users: event.user?.userId ? [event.user.userId] : []
        },
        metadata: event
      });

      await alert.save();

      // រក្សាទុកក្នុង SQLite
      const alertId = crypto.randomBytes(16).toString('hex');
      const stmt = this.sqlite.prepare(`
        INSERT INTO security_alerts (
          alert_id, title, description, severity, category, source,
          affected_ips, affected_users, metadata
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        alertId,
        alert.title,
        alert.description,
        alert.severity,
        alert.category,
        alert.source,
        JSON.stringify(alert.affected.ips),
        JSON.stringify(alert.affected.users),
        JSON.stringify(alert.metadata)
      );

      stmt.finalize();

      return alert;
    } catch (error) {
      console.error('Failed to create alert:', error);
    }
  }

  // ពិនិត្យមើលថាតើត្រូវ block IP ដែរឬទេ
  shouldBlockIP(event) {
    const criticalEvents = [
      'SQL_INJECTION_ATTEMPT',
      'XSS_ATTEMPT',
      'BRUTE_FORCE',
      'DDOS_ATTEMPT',
      'CLONE_DETECTED'
    ];

    return criticalEvents.includes(event.eventType) && 
           event.severity === 'CRITICAL';
  }

  // Block IP
  async blockIP(ip, event) {
    try {
      // ពិនិត្យមើលថាតើ IP ត្រូវបាន block រួចហើយឬនៅ
      const existing = await BlockedIP.findOne({ ip, unblockedAt: null });
      if (existing && existing.isBlocked()) {
        existing.attempts += 1;
        existing.lastSeen = new Date();
        await existing.save();
        return existing;
      }

      // គណនា expiration
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // Block 7 days

      const blockedIP = new BlockedIP({
        ip,
        reason: event.eventType,
        severity: event.severity,
        expiresAt,
        attempts: 1,
        firstSeen: new Date(),
        lastSeen: new Date(),
        rules: [{
          ruleId: `auto-${Date.now()}`,
          description: `Auto-blocked due to ${event.eventType}`,
          triggeredAt: new Date(),
          confidence: event.threat?.confidence || 100
        }]
      });

      await blockedIP.save();

      // រក្សាទុកក្នុង SQLite
      const stmt = this.sqlite.prepare(`
        INSERT INTO blocked_ips (
          ip, reason, severity, expires_at, attempts,
          first_seen, last_seen
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        ip,
        event.eventType,
        event.severity,
        expiresAt.toISOString(),
        1,
        new Date().toISOString(),
        new Date().toISOString()
      );

      stmt.finalize();

      return blockedIP;
    } catch (error) {
      console.error('Failed to block IP:', error);
    }
  }

  // កត់ត្រា failed login
  async logFailedLogin(ip, email, userAgent, reason) {
    try {
      const stmt = this.sqlite.prepare(`
        INSERT INTO failed_logins (ip, email, user_agent, reason)
        VALUES (?, ?, ?, ?)
      `);

      stmt.run(ip, email, userAgent, reason);
      stmt.finalize();

      // រាប់ចំនួន failed logins ក្នុងរយៈពេល 5 នាទី
      this.checkFailedLogins(ip);
    } catch (error) {
      console.error('Failed to log failed login:', error);
    }
  }

  // ពិនិត្យចំនួន failed logins
  async checkFailedLogins(ip) {
    const fiveMinutesAgo = new Date(Date.now() - 300000).toISOString();

    this.sqlite.get(`
      SELECT COUNT(*) as count FROM failed_logins
      WHERE ip = ? AND attempt_time >= ?
    `, [ip, fiveMinutesAgo], async (err, row) => {
      if (err) {
        console.error('Failed to check failed logins:', err);
        return;
      }

      if (row.count >= 5) {
        // Block IP បើមាន failed login ច្រើនជាង 5 ដង
        await this.blockIP(ip, {
          eventType: 'BRUTE_FORCE',
          severity: 'CRITICAL',
          description: `Brute force attempt: ${row.count} failed logins in 5 minutes`
        });

        // បង្កើត alert
        await this.createAlert({
          eventType: 'BRUTE_FORCE',
          severity: 'CRITICAL',
          ip,
          description: `Brute force detected from ${ip}: ${row.count} attempts`
        });
      }
    });
  }

  // កត់ត្រា API key usage
  async logAPIKeyUsage(keyHash, userId, endpoint) {
    try {
      this.sqlite.run(`
        UPDATE api_keys 
        SET last_used_at = CURRENT_TIMESTAMP,
            request_count = request_count + 1
        WHERE key_hash = ? AND user_id = ?
      `, [keyHash, userId]);
    } catch (error) {
      console.error('Failed to log API key usage:', error);
    }
  }

  // កត់ត្រា rate limit
  async logRateLimit(ip, endpoint) {
    try {
      const stmt = this.sqlite.prepare(`
        INSERT INTO rate_limits (ip, endpoint)
        VALUES (?, ?)
      `);

      stmt.run(ip, endpoint);
      stmt.finalize();

      // ពិនិត្យមើលថាតើ IP លើសពីកំណត់ដែរឬទេ
      const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();

      this.sqlite.get(`
        SELECT COUNT(*) as count FROM rate_limits
        WHERE ip = ? AND window_start >= ?
      `, [ip, oneMinuteAgo], (err, row) => {
        if (err) {
          console.error('Failed to check rate limits:', err);
          return;
        }

        if (row.count > 100) { // 100 requests per minute
          this.createAlert({
            eventType: 'RATE_LIMIT_EXCEEDED',
            severity: 'WARNING',
            ip,
            description: `Rate limit exceeded: ${row.count} requests in 1 minute`
          });
        }
      });
    } catch (error) {
      console.error('Failed to log rate limit:', error);
    }
  }

  // កត់ត្រា audit
  async logAudit(audit) {
    try {
      // MongoDB
      const mongoAudit = new AuditTrail(audit);
      await mongoAudit.save();

      // SQLite
      const auditId = crypto.randomBytes(16).toString('hex');
      const stmt = this.sqlite.prepare(`
        INSERT INTO audit_log (
          audit_id, user_id, username, action, resource_type,
          resource_id, old_value, new_value, ip_address,
          user_agent, session_id, status, error_message, metadata
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        auditId,
        audit.actor?.userId,
        audit.actor?.email,
        audit.action,
        audit.target?.type,
        audit.target?.id,
        JSON.stringify(audit.target?.before),
        JSON.stringify(audit.target?.after),
        audit.actor?.ip,
        audit.actor?.userAgent,
        audit.actor?.sessionId,
        audit.status,
        audit.error?.message,
        JSON.stringify(audit.metadata)
      );

      stmt.finalize();

      return mongoAudit;
    } catch (error) {
      console.error('Failed to log audit:', error);
    }
  }

  // បន្ថែម threat intelligence
  async addThreatIntel(threat) {
    try {
      // MongoDB
      const mongoThreat = new ThreatIntelligence(threat);
      await mongoThreat.save();

      // SQLite
      const stmt = this.sqlite.prepare(`
        INSERT INTO threat_intel (
          indicator, type, threat_type, confidence, severity,
          source, first_seen, last_seen, metadata, expires_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        threat.indicator,
        threat.type,
        threat.threat,
        threat.confidence,
        threat.severity,
        threat.source,
        threat.firstSeen || new Date().toISOString(),
        threat.lastSeen || new Date().toISOString(),
        JSON.stringify(threat.metadata),
        threat.expiresAt?.toISOString()
      );

      stmt.finalize();

      return mongoThreat;
    } catch (error) {
      console.error('Failed to add threat intelligence:', error);
    }
  }

  // ពិនិត្យ IP ក្នុង threat intelligence
  async checkIP(ip) {
    // ពិនិត្យ MongoDB
    const mongoResult = await ThreatIntelligence.checkIndicator(ip, 'IP');
    
    // ពិនិត្យ SQLite
    return new Promise((resolve, reject) => {
      this.sqlite.get(`
        SELECT * FROM threat_intel
        WHERE indicator = ? AND type = 'IP' AND active = 1
        AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP)
        ORDER BY confidence DESC, last_seen DESC
        LIMIT 1
      `, [ip], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            mongo: mongoResult,
            sqlite: row
          });
        }
      });
    });
  }

  // ទទួលបានស្ថិតិសុវត្ថិភាព
  async getSecurityStats() {
    const [
      mongoStats,
      sqliteStats
    ] = await Promise.all([
      SecurityLog.getStats(),
      this.getSQLiteStats()
    ]);

    return {
      mongo: mongoStats,
      sqlite: sqliteStats,
      combined: {
        totalEvents: mongoStats.total + sqliteStats.totalEvents,
        criticalEvents: mongoStats.bySeverity?.CRITICAL || 0 + sqliteStats.criticalCount,
        blockedIPs: (await BlockedIP.getActiveBlocks()).length,
        activeAlerts: (await Alert.getActiveAlerts()).length
      }
    };
  }

  // ទទួលបានស្ថិតិពី SQLite
  getSQLiteStats() {
    return new Promise((resolve, reject) => {
      this.sqlite.get(`
        SELECT 
          (SELECT COUNT(*) FROM security_events) as totalEvents,
          (SELECT COUNT(*) FROM security_events WHERE severity = 'CRITICAL') as criticalCount,
          (SELECT COUNT(*) FROM blocked_ips WHERE expires_at > CURRENT_TIMESTAMP) as activeBlocks,
          (SELECT COUNT(*) FROM security_alerts WHERE status = 'NEW') as newAlerts,
          (SELECT COUNT(*) FROM threat_intel WHERE active = 1) as activeThreats,
          (SELECT COUNT(*) FROM failed_logins WHERE attempt_time > datetime('now', '-1 hour')) as failedLoginsHour
      `, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // សម្អាតទិន្នន័យចាស់
  async cleanup() {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000);

    // MongoDB cleanup (automatic via TTL)

    // SQLite cleanup
    this.sqlite.run(`
      DELETE FROM security_events WHERE timestamp < ?
    `, [thirtyDaysAgo.toISOString()]);

    this.sqlite.run(`
      DELETE FROM failed_logins WHERE attempt_time < ?
    `, [thirtyDaysAgo.toISOString()]);

    this.sqlite.run(`
      DELETE FROM rate_limits WHERE window_start < ?
    `, [thirtyDaysAgo.toISOString()]);

    console.log('Security database cleanup completed');
  }

  // បិទការតភ្ជាប់
  close() {
    if (this.sqlite) {
      this.sqlite.close((err) => {
        if (err) {
          console.error('Error closing SQLite database:', err);
        } else {
          console.log('SQLite database closed');
        }
      });
    }
  }
}

module.exports = new SecurityDatabaseService();