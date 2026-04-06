const fs = require('fs');
const path = require('path');

class TelegramHandlers {
  constructor() {
    this.joinMessages = new Map();
    this.setupCleanup();
  }
  
  async handleNewMember(bot, msg) {
    const chatId = msg.chat.id;
    const newMembers = msg.new_chat_members;
    const addedBy = msg.from;
    
    for (const member of newMembers) {
      // Don't welcome the bot itself
      if (member.is_bot) continue;
      
      const welcomeMessage = `
👋 <b>Welcome to Security Monitor ${member.first_name || 'User'}!</b>

This bot monitors and protects against:
• 🚫 DDoS Attacks
• 💉 SQL Injection
• 📡 Port Scanners
• 🔐 Brute Force Attacks
• 💀 RCE Attempts
• 🎯 XSS Attacks

<b>Quick Start:</b>
• Type /help to see all commands
• Type /status to check system health
• Type /stats to view attack statistics

<b>⚠️ Important:</b>
• All security events are logged
• Suspicious activities trigger instant alerts
• Admin commands require authorization

Stay secure! 🛡️
      `;
      
      await bot.sendMessage(chatId, welcomeMessage, {
        parse_mode: 'HTML'
      });
      
      // Log new member
      this.logNewMember(member, addedBy);
    }
  }
  
  handleError(bot, error) {
    console.error('Telegram bot error:', error);
    
    // Log error
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack
    };
    
    const logPath = path.join(__dirname, '../logs/telegram_errors.log');
    fs.appendFileSync(logPath, JSON.stringify(errorLog) + '\n');
  }
  
  handlePollingError(bot, error) {
    console.error('Polling error:', error);
    
    // Attempt to restart polling after delay
    setTimeout(() => {
      try {
        bot.startPolling();
        console.log('Polling restarted successfully');
      } catch (restartError) {
        console.error('Failed to restart polling:', restartError);
      }
    }, 5000);
  }
  
  logNewMember(member, addedBy) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event: 'NEW_MEMBER',
      member: {
        id: member.id,
        username: member.username,
        firstName: member.first_name,
        lastName: member.last_name
      },
      addedBy: {
        id: addedBy.id,
        username: addedBy.username
      }
    };
    
    const logPath = path.join(__dirname, '../logs/group_events.log');
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
  }
  
  setupCleanup() {
    // Clean old logs every 7 days
    setInterval(() => {
      const logsDir = path.join(__dirname, '../logs');
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      
      if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
          const filePath = path.join(logsDir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.mtimeMs < sevenDaysAgo && file !== 'security.log') {
            fs.unlinkSync(filePath);
            console.log(`Deleted old log: ${file}`);
          }
        });
      }
    }, 24 * 60 * 60 * 1000);
  }
}

module.exports = new TelegramHandlers();