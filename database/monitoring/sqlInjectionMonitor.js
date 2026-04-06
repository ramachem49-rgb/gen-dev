const fs = require('fs');
const path = require('path');
const alertSystem = require('./alerts/notification');

class SQLInjectionMonitor {
  constructor() {
    this.logPath = path.join(__dirname, '../logs/sql_injection.log');
    this.statsPath = path.join(__dirname, '../stats/injection_stats.json');
    this.stats = this.loadStats();
    
    // Start monitoring
    this.startMonitoring();
  }

  loadStats() {
    try {
      if (fs.existsSync(this.statsPath)) {
        return JSON.parse(fs.readFileSync(this.statsPath, 'utf8'));
      }
    } catch (error) {
      console.error('Failed to load stats:', error);
    }
    
    return {
      totalAttacks: 0,
      attacksByType: {},
      attacksByIP: {},
      attacksByPath: {},
      lastHour: [],
      lastDay: [],
      topAttackers: [],
      lastUpdated: new Date().toISOString()
    };
  }

  saveStats() {
    try {
      fs.writeFileSync(this.statsPath, JSON.stringify(this.stats, null, 2));
    } catch (error) {
      console.error('Failed to save stats:', error);
    }
  }

  startMonitoring() {
    // Watch log file for new attacks
    fs.watch(this.logPath, (eventType) => {
      if (eventType === 'change') {
        this.processNewAttacks();
      }
    });
    
    // Update stats every minute
    setInterval(() => {
      this.updateStats();
    }, 60000);
    
    // Generate reports every hour
    setInterval(() => {
      this.generateHourlyReport();
    }, 3600000);
    
    // Clean old data every day
    setInterval(() => {
      this.cleanOldData();
    }, 86400000);
  }

  processNewAttacks() {
    try {
      const data = fs.readFileSync(this.logPath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        try {
          const attack = JSON.parse(line);
          this.updateStatsWithAttack(attack);
        } catch (e) {
          // Ignore parse errors
        }
      });
    } catch (error) {
      console.error('Failed to process attacks:', error);
    }
  }

  updateStatsWithAttack(attack) {
    this.stats.totalAttacks++;
    
    // Update by type
    const type = attack.type || 'UNKNOWN';
    this.stats.attacksByType[type] = (this.stats.attacksByType[type] || 0) + 1;
    
    // Update by IP
    const ip = attack.ip || 'unknown';
    this.stats.attacksByIP[ip] = (this.stats.attacksByIP[ip] || 0) + 1;
    
    // Update by path
    const path = attack.path || 'unknown';
    this.stats.attacksByPath[path] = (this.stats.attacksByPath[path] || 0) + 1;
    
    // Add to recent attacks
    const now = Date.now();
    this.stats.lastHour.push({ ...attack, timestamp: now });
    this.stats.lastDay.push({ ...attack, timestamp: now });
    
    // Limit array sizes
    if (this.stats.lastHour.length > 100) {
      this.stats.lastHour = this.stats.lastHour.slice(-100);
    }
    if (this.stats.lastDay.length > 1000) {
      this.stats.lastDay = this.stats.lastDay.slice(-1000);
    }
    
    // Update top attackers
    this.updateTopAttackers();
    
    this.stats.lastUpdated = new Date().toISOString();
    this.saveStats();
    
    // Send alert for critical attacks
    if (attack.details?.confidence > 0.9) {
      this.sendCriticalAlert(attack);
    }
  }

  updateTopAttackers() {
    const attackers = Object.entries(this.stats.attacksByIP)
      .map(([ip, count]) => ({ ip, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
    
    this.stats.topAttackers = attackers;
  }

  sendCriticalAlert(attack) {
    alertSystem.sendDiscordAlert(
      `⚠️ **CRITICAL SQL INJECTION ATTACK**\n` +
      `IP: ${attack.ip}\n` +
      `Path: ${attack.path}\n` +
      `Type: ${attack.type}\n` +
      `Confidence: ${attack.details?.confidence * 100}%\n` +
      `Pattern: ${attack.details?.pattern}\n` +
      `Time: ${new Date(attack.timestamp).toLocaleString()}`,
      'critical'
    );
    
    alertSystem.sendEmailAlert(
      'Critical SQL Injection Attack Detected',
      `A critical SQL injection attack has been detected.\n\n` +
      `IP: ${attack.ip}\n` +
      `Path: ${attack.path}\n` +
      `Pattern: ${attack.details?.pattern}\n` +
      `Value: ${attack.details?.value}\n\n` +
      `Please investigate immediately.`,
      'critical'
    );
  }

  updateStats() {
    const now = Date.now();
    const oneHourAgo = now - 3600000;
    const oneDayAgo = now - 86400000;
    
    // Clean old entries
    this.stats.lastHour = this.stats.lastHour.filter(a => a.timestamp > oneHourAgo);
    this.stats.lastDay = this.stats.lastDay.filter(a => a.timestamp > oneDayAgo);
    
    // Calculate rates
    const attacksPerHour = this.stats.lastHour.length;
    const attacksPerDay = this.stats.lastDay.length;
    
    // Alert if high attack rate
    if (attacksPerHour > 50) {
      alertSystem.sendDiscordAlert(
        `🚨 **High SQL Injection Attack Rate**\n` +
        `Attacks in last hour: ${attacksPerHour}\n` +
        `Attacks in last day: ${attacksPerDay}\n` +
        `Please check the system immediately.`,
        'critical'
      );
    }
    
    this.saveStats();
  }

  generateHourlyReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalAttacks: this.stats.totalAttacks,
      attacksLastHour: this.stats.lastHour.length,
      attacksLastDay: this.stats.lastDay.length,
      topAttackers: this.stats.topAttackers,
      attacksByType: this.stats.attacksByType,
      attacksByPath: this.stats.attacksByPath
    };
    
    // Save report
    const reportPath = path.join(__dirname, '../reports', `injection_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Send report if attacks > threshold
    if (report.attacksLastHour > 10) {
      alertSystem.sendEmailAlert(
        'Hourly SQL Injection Report',
        `Hourly SQL Injection Report\n\n` +
        `Total Attacks: ${report.attacksLastHour}\n` +
        `Top Attackers: ${JSON.stringify(report.topAttackers, null, 2)}`,
        'warning'
      );
    }
  }

  cleanOldData() {
    const sevenDaysAgo = Date.now() - 7 * 86400000;
    
    // Clean old stats
    this.stats.attacksByIP = Object.fromEntries(
      Object.entries(this.stats.attacksByIP)
        .filter(([ip, count]) => count > 5) // Keep only significant attackers
    );
    
    this.stats.lastDay = this.stats.lastDay.filter(a => a.timestamp > sevenDaysAgo);
    
    this.saveStats();
    
    // Clean old reports
    const reportsDir = path.join(__dirname, '../reports');
    if (fs.existsSync(reportsDir)) {
      fs.readdirSync(reportsDir).forEach(file => {
        const filePath = path.join(reportsDir, file);
        const stat = fs.statSync(filePath);
        if (stat.mtimeMs < sevenDaysAgo) {
          fs.unlinkSync(filePath);
        }
      });
    }
  }

  getStats() {
    return {
      ...this.stats,
      currentRate: this.stats.lastHour.length,
      averageRate: (this.stats.lastDay.length / 24).toFixed(2)
    };
  }
}

module.exports = new SQLInjectionMonitor();