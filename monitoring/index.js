const express = require('express');
const path = require('path');
const fs = require('fs');
const attackDetector = require('./detectors/attackDetector');
const telegramNotifier = require('./notifiers/telegramNotifier');
const telegramBot = require('./telegram/bot');
const threatAnalyzer = require('./analytics/threatAnalyzer');
const reportGenerator = require('./analytics/reportGenerator');

class SecurityMonitor {
  constructor() {
    this.app = express();
    this.isRunning = false;
    this.startTime = Date.now();
    this.init();
  }
  
  init() {
    // Ensure log files exist
    this.ensureLogFiles();
    
    // Middleware for attack detection
    this.app.use((req, res, next) => {
      attackDetector.detectAttack(req, res, next);
    });
    
    // Health check endpoint
    this.app.get('/monitoring/health', (req, res) => {
      res.json({
        status: 'healthy',
        uptime: Math.floor((Date.now() - this.startTime) / 1000),
        botRunning: telegramBot.isRunning,
        timestamp: new Date().toISOString()
      });
    });
    
    // Stats endpoint
    this.app.get('/monitoring/stats', (req, res) => {
      const stats = attackDetector.getStats();
      res.json(stats);
    });
    
    // Threat analysis endpoint
    this.app.get('/monitoring/threats', (req, res) => {
      const analysis = threatAnalyzer.generateThreatReport();
      res.json(analysis);
    });
    
    // Report endpoint
    this.app.get('/monitoring/report', async (req, res) => {
      const report = await reportGenerator.generateFullReport();
      res.json(report);
    });
    
    // Export CSV endpoint
    this.app.get('/monitoring/export/csv', (req, res) => {
      const csvPath = reportGenerator.generateCSVReport();
      if (csvPath && fs.existsSync(csvPath)) {
        res.download(csvPath);
      } else {
        res.status(404).json({ error: 'No data to export' });
      }
    });
    
    console.log('Security Monitor initialized');
  }
  
  ensureLogFiles() {
    const logFiles = ['security.log', 'notifications.log', 'alerts.log', 'attacks.json'];
    const logsDir = path.join(__dirname, 'logs');
    
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    logFiles.forEach(file => {
      const filePath = path.join(logsDir, file);
      if (!fs.existsSync(filePath)) {
        if (file.endsWith('.json')) {
          fs.writeFileSync(filePath, '[]');
        } else {
          fs.writeFileSync(filePath, '');
        }
      }
    });
  }
  
  start() {
    this.isRunning = true;
    
    // Send startup notification
    telegramNotifier.sendNotification({
      message: `
🚀 <b>Security Monitor Started</b>

<b>Features Enabled:</b>
• DDoS Detection
• SQL Injection Detection
• Port Scanner Detection
• Brute Force Detection
• XSS Detection
• RCE Detection
• Threat Analysis
• Report Generation

<b>Notifications:</b>
• Real-time alerts to Telegram
• Daily security reports
• Critical event notifications

<b>Time:</b> ${new Date().toLocaleString()}
      `,
      severity: 'INFO'
    });
    
    // Schedule daily reports
    this.scheduleDailyReport();
    
    // Schedule threat analysis
    this.scheduleThreatAnalysis();
    
    // Schedule cleanup
    this.scheduleCleanup();
    
    // Start HTTP server for monitoring endpoints
    const PORT = process.env.MONITORING_PORT || 3001;
    this.app.listen(PORT, () => {
      console.log(`Monitoring API listening on port ${PORT}`);
    });
    
    console.log('Security Monitor started successfully');
  }
  
  scheduleDailyReport() {
    // Run at 00:00 every day
    const now = new Date();
    const night = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0
    );
    const msToMidnight = night.getTime() - now.getTime();
    
    setTimeout(() => {
      this.generateDailyReport();
      setInterval(() => this.generateDailyReport(), 24 * 60 * 60 * 1000);
    }, msToMidnight);
  }
  
  async generateDailyReport() {
    const report = await reportGenerator.generateDailyReport();
    
    const message = `
📊 <b>Daily Security Report</b>
<b>Date:</b> ${new Date().toLocaleDateString()}

<b>Statistics:</b>
• Total Attacks: ${report.totalAttacks}
• Unique Attackers: ${report.uniqueAttackers}
• Risk Level: ${report.riskLevel}

<b>Top Attacks:</b>
${report.topAttacks?.map(a => `• ${a}`).join('\n') || 'No attacks'}

<b>Recommendations:</b>
${report.recommendations?.map(r => `• ${r}`).join('\n') || 'Continue monitoring'}

For full report, visit: /monitoring/report
    `;
    
    await telegramNotifier.sendNotification({
      message,
      severity: report.riskLevel === 'CRITICAL' ? 'CRITICAL' : 'INFO'
    });
  }
  
  scheduleThreatAnalysis() {
    // Run threat analysis every 6 hours
    setInterval(() => {
      this.runThreatAnalysis();
    }, 6 * 60 * 60 * 1000);
  }
  
  async runThreatAnalysis() {
    const analysis = threatAnalyzer.generateThreatReport();
    
    if (analysis.riskLevel === 'CRITICAL') {
      await telegramNotifier.sendNotification({
        message: `
🚨 <b>CRITICAL THREAT ANALYSIS</b>

<b>Risk Level:</b> ${analysis.riskLevel}
<b>Risk Score:</b> ${analysis.analysis?.riskScore || 0}/100

<b>Key Findings:</b>
${analysis.recommendations?.slice(0, 5).map(r => `• ${r}`).join('\n') || 'No findings'}

<b>Immediate Actions Required!</b>
• Review full analysis
• Implement recommended countermeasures
• Activate incident response plan
        `,
        severity: 'CRITICAL'
      });
    } else if (analysis.riskLevel === 'HIGH') {
      await telegramNotifier.sendNotification({
        message: `
⚠️ <b>High Threat Activity Detected</b>

<b>Risk Level:</b> ${analysis.riskLevel}
<b>Risk Score:</b> ${analysis.analysis?.riskScore || 0}/100

<b>Recommendations:</b>
${analysis.recommendations?.slice(0, 3).map(r => `• ${r}`).join('\n') || 'Review security settings'}
        `,
        severity: 'WARNING'
      });
    }
  }
  
  scheduleCleanup() {
    // Clean old logs every day
    setInterval(() => {
      const logsDir = path.join(__dirname, 'logs');
      const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      
      if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
          const filePath = path.join(logsDir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.mtimeMs < thirtyDaysAgo && !file.includes('security.log')) {
            fs.unlinkSync(filePath);
            console.log(`Deleted old log: ${file}`);
          }
        });
      }
    }, 24 * 60 * 60 * 1000);
  }
  
  stop() {
    this.isRunning = false;
    if (telegramBot.stop) {
      telegramBot.stop();
    }
    console.log('Security Monitor stopped');
  }
}

// Create and export singleton instance
const securityMonitor = new SecurityMonitor();
module.exports = securityMonitor;

// Auto-start if run directly
if (require.main === module) {
  securityMonitor.start();
}