const TelegramBot = require('node-telegram-bot-api');
const logger = require('../utils/logger');

class TelegramAlertBot {
  constructor() {
    this.bot = null;
    this.chatId = process.env.TELEGRAM_CHAT_ID;
    this.token = process.env.TELEGRAM_BOT_TOKEN;
    this.isInitialized = false;
    
    this.alertQueue = [];
    this.isProcessing = false;
    
    this.init();
  }

  init() {
    if (!this.token || !this.chatId) {
      console.warn('⚠️ Telegram Bot not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env');
      return;
    }

    try {
      this.bot = new TelegramBot(this.token, { polling: true });
      this.isInitialized = true;
      
      // Setup command handlers
      this.setupCommands();
      
      console.log('✅ Telegram Bot initialized successfully');
      this.sendStartupMessage();
    } catch (error) {
      console.error('❌ Failed to initialize Telegram Bot:', error.message);
    }
  }

  setupCommands() {
    if (!this.bot) return;

    // /start command
    this.bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      const welcomeMessage = `
🔒 *Security Alert Bot Activated*

Welcome to the Security Monitoring System!

*Available Commands:*
/status - Check system security status
/stats - View attack statistics
/blocked - List blocked IPs
/recent - Show recent attacks
/help - Show this help message

*Features:*
• Real-time attack detection
• SQL Injection monitoring
• DDoS attack protection
• Port scanning detection
• Database clone attempts
• IP blocking automation

_Stay secure! 🛡️_
      `;
      
      this.bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
    });

    // /status command
    this.bot.onText(/\/status/, async (msg) => {
      const chatId = msg.chat.id;
      const status = await this.getSystemStatus();
      this.bot.sendMessage(chatId, status, { parse_mode: 'Markdown' });
    });

    // /stats command
    this.bot.onText(/\/stats/, async (msg) => {
      const chatId = msg.chat.id;
      const stats = await this.getAttackStats();
      this.bot.sendMessage(chatId, stats, { parse_mode: 'Markdown' });
    });

    // /blocked command
    this.bot.onText(/\/blocked/, async (msg) => {
      const chatId = msg.chat.id;
      const blocked = await this.getBlockedIPs();
      this.bot.sendMessage(chatId, blocked, { parse_mode: 'Markdown' });
    });

    // /recent command
    this.bot.onText(/\/recent/, async (msg) => {
      const chatId = msg.chat.id;
      const recent = await this.getRecentAttacks();
      this.bot.sendMessage(chatId, recent, { parse_mode: 'Markdown' });
    });

    // /help command
    this.bot.onText(/\/help/, (msg) => {
      const chatId = msg.chat.id;
      const helpMessage = `
📚 *Security Bot Commands*

/status - Current system security status
/stats - Attack statistics (24h)
/blocked - List all blocked IPs
/recent - Show 10 most recent attacks
/help - Show this help message

*Alert Levels:*
🔴 CRITICAL - Immediate action required
🟠 HIGH - Serious threat detected
🟡 MEDIUM - Suspicious activity
🔵 LOW - Informational

*Auto-blocking:*
• 5+ failed logins in 5 min → Block 24h
• SQL Injection attempt → Block 7 days
• Port scanning → Block 24h
• DDoS detection → Block permanently
      `;
      
      this.bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
    });
  }

  async getSystemStatus() {
    const SecurityLog = require('../models/SecurityLog');
    const BlockedIP = require('../models/BlockedIP');
    
    const now = new Date();
    const oneHourAgo = new Date(now - 3600000);
    const oneDayAgo = new Date(now - 86400000);
    
    const [attacksLastHour, attacksLastDay, blockedIPs, activeAlerts] = await Promise.all([
      SecurityLog.countDocuments({ timestamp: { $gte: oneHourAgo }, severity: { $in: ['ERROR', 'CRITICAL'] } }),
      SecurityLog.countDocuments({ timestamp: { $gte: oneDayAgo }, severity: { $in: ['ERROR', 'CRITICAL'] } }),
      BlockedIP.countDocuments({ expiresAt: { $gt: now }, unblockedAt: null }),
      SecurityLog.countDocuments({ timestamp: { $gte: oneHourAgo }, severity: 'CRITICAL', notified: false })
    ]);
    
    return `
🛡️ *System Security Status*

⏰ *Time:* ${now.toLocaleString()}
📊 *Attacks (Last Hour):* ${attacksLastHour}
📈 *Attacks (Last 24h):* ${attacksLastDay}
🚫 *Blocked IPs:* ${blockedIPs}
⚠️ *Active Alerts:* ${activeAlerts}

*Status:* ${attacksLastHour > 10 ? '🔴 UNDER ATTACK' : attacksLastHour > 5 ? '🟠 HIGH RISK' : '🟢 NORMAL'}

*Protection Active:*
✅ SQL Injection Prevention
✅ XSS Protection
✅ Rate Limiting
✅ Port Scan Detection
✅ DDoS Protection
    `;
  }

  async getAttackStats() {
    const SecurityLog = require('../models/SecurityLog');
    
    const oneDayAgo = new Date(Date.now() - 86400000);
    
    const stats = await SecurityLog.aggregate([
      { $match: { timestamp: { $gte: oneDayAgo } } },
      { $group: {
        _id: '$eventType',
        count: { $sum: 1 },
        severity: { $first: '$severity' }
      }},
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    
    let message = `📊 *Attack Statistics (Last 24h)*\n\n`;
    
    if (stats.length === 0) {
      message += 'No attacks detected in the last 24 hours. 🎉\n';
    } else {
      stats.forEach(stat => {
        const emoji = stat.severity === 'CRITICAL' ? '🔴' : 
                      stat.severity === 'ERROR' ? '🟠' : 
                      stat.severity === 'WARNING' ? '🟡' : '🔵';
        message += `${emoji} *${stat._id}*: ${stat.count}\n`;
      });
    }
    
    return message;
  }

  async getBlockedIPs() {
    const BlockedIP = require('../models/BlockedIP');
    const now = new Date();
    
    const blockedIPs = await BlockedIP.find({
      expiresAt: { $gt: now },
      unblockedAt: null
    }).sort({ blockedAt: -1 }).limit(10);
    
    if (blockedIPs.length === 0) {
      return '🚫 *No IPs currently blocked*\n\nAll IPs are currently allowed.';
    }
    
    let message = `🚫 *Blocked IPs (${blockedIPs.length} total)*\n\n`;
    
    blockedIPs.forEach(ip => {
      const expiresIn = Math.ceil((ip.expiresAt - now) / 3600000);
      message += `• \`${ip.ip}\`\n`;
      message += `  Reason: ${ip.reason}\n`;
      message += `  Expires: ${expiresIn}h\n\n`;
    });
    
    return message;
  }

  async getRecentAttacks() {
    const SecurityLog = require('../models/SecurityLog');
    
    const recentAttacks = await SecurityLog.find({
      severity: { $in: ['ERROR', 'CRITICAL'] }
    }).sort({ timestamp: -1 }).limit(10);
    
    if (recentAttacks.length === 0) {
      return '✅ *No recent attacks detected*\n\nSystem is clean.';
    }
    
    let message = `⚠️ *Recent Security Events (Last 10)*\n\n`;
    
    recentAttacks.forEach(attack => {
      const time = new Date(attack.timestamp).toLocaleString();
      const emoji = attack.severity === 'CRITICAL' ? '🔴' : '🟠';
      message += `${emoji} *${attack.eventType}*\n`;
      message += `   IP: \`${attack.ip}\`\n`;
      message += `   Time: ${time}\n`;
      if (attack.description) {
        message += `   Desc: ${attack.description.substring(0, 50)}...\n`;
      }
      message += `\n`;
    });
    
    return message;
  }

  sendStartupMessage() {
    if (!this.isInitialized) return;
    
    const message = `
🚀 *Security Bot Started*

System: ${process.env.NODE_ENV || 'development'}
Time: ${new Date().toLocaleString()}
Protection: ACTIVE

*Monitoring for:*
• SQL Injection
• DDoS Attacks
• Port Scanning
• Database Cloning
• Brute Force

*Will send alerts for any suspicious activity.*
    `;
    
    this.bot.sendMessage(this.chatId, message, { parse_mode: 'Markdown' });
  }

  async sendAlert(alert) {
    if (!this.isInitialized) {
      console.log('Alert queued (bot not ready):', alert);
      this.alertQueue.push(alert);
      return;
    }

    this.alertQueue.push(alert);
    this.processAlertQueue();
  }

  async processAlertQueue() {
    if (this.isProcessing || this.alertQueue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.alertQueue.length > 0) {
      const alert = this.alertQueue.shift();
      await this.sendTelegramAlert(alert);
      
      // Rate limit to avoid spam
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.isProcessing = false;
  }

  async sendTelegramAlert(alert) {
    try {
      const emoji = this.getSeverityEmoji(alert.severity);
      const colorCode = this.getSeverityColor(alert.severity);
      
      let message = `${emoji} *${alert.title}*\n\n`;
      message += `*Severity:* ${alert.severity}\n`;
      message += `*Time:* ${new Date().toLocaleString()}\n`;
      message += `*Type:* ${alert.type}\n`;
      
      if (alert.ip) {
        message += `*IP:* \`${alert.ip}\`\n`;
        
        // Try to get location if available
        if (alert.location) {
          message += `*Location:* ${alert.location.country || 'Unknown'}\n`;
        }
      }
      
      if (alert.user) {
        message += `*User:* ${alert.user.email || alert.user.id}\n`;
      }
      
      if (alert.payload) {
        message += `*Payload:* \`\`\`\n${alert.payload.substring(0, 200)}\n\`\`\`\n`;
      }
      
      if (alert.description) {
        message += `*Details:* ${alert.description}\n`;
      }
      
      if (alert.action) {
        message += `*Action:* ${alert.action}\n`;
      }
      
      // Add threat intelligence if available
      if (alert.threatScore) {
        message += `*Threat Score:* ${alert.threatScore}/100\n`;
      }
      
      // Add recommendations
      message += `\n*Recommendation:* ${this.getRecommendation(alert.type)}`;
      
      await this.bot.sendMessage(this.chatId, message, { parse_mode: 'Markdown' });
      
      // Log that alert was sent
      console.log(`📨 Telegram alert sent: ${alert.title}`);
      
    } catch (error) {
      console.error('Failed to send Telegram alert:', error.message);
    }
  }

  getSeverityEmoji(severity) {
    const emojis = {
      'CRITICAL': '🔴',
      'ERROR': '🟠',
      'WARNING': '🟡',
      'INFO': '🔵'
    };
    return emojis[severity] || '⚪';
  }

  getSeverityColor(severity) {
    const colors = {
      'CRITICAL': '#FF0000',
      'ERROR': '#FF6600',
      'WARNING': '#FFCC00',
      'INFO': '#00CCFF'
    };
    return colors[severity] || '#CCCCCC';
  }

  getRecommendation(attackType) {
    const recommendations = {
      'SQL_INJECTION': 'Block IP immediately and review database queries',
      'DDOS_ATTACK': 'Enable DDoS protection and rate limiting',
      'PORT_SCAN': 'Block IP and review firewall rules',
      'BRUTE_FORCE': 'Implement CAPTCHA and increase password requirements',
      'XSS_ATTACK': 'Review input sanitization and CSP headers',
      'CLONE_DETECTED': 'Issue DMCA takedown and update security headers',
      'DATABASE_CLONE': 'Rotate database credentials and check for unauthorized access',
      'RATE_LIMIT_EXCEEDED': 'Increase rate limiting or block IP',
      'FILE_UPLOAD': 'Review file upload restrictions and scanning',
      'ADMIN_ACTION': 'Verify admin action was authorized'
    };
    
    return recommendations[attackType] || 'Investigate and take appropriate action';
  }
}

module.exports = new TelegramAlertBot();