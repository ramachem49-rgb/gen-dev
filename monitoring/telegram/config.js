require('dotenv').config();

// បន្ថែមនៅផ្នែកខាងដើម
require('dotenv').config();

module.exports = {
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
    adminChatIds: (process.env.TELEGRAM_ADMIN_CHAT_IDS || '').split(','),
    botName: 'Security Monitor Bot',
    botUsername: process.env.TELEGRAM_BOT_USERNAME || 'security_monitor_bot',
    
    // បន្ថែម debug
    debug: true
  }
};

module.exports = {
  // Telegram Bot Configuration
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
    adminChatIds: (process.env.TELEGRAM_ADMIN_CHAT_IDS || '').split(','),
    
    // Bot settings
    botName: 'Security Monitor Bot',
    botUsername: process.env.TELEGRAM_BOT_USERNAME || 'SecurityMonitorBot',
    
    // Alert settings
    alertThresholds: {
      ddos: {
        requestsPerSecond: 100,
        requestsPerMinute: 5000,
        uniqueIPs: 100
      },
      bruteForce: {
        attemptsPerMinute: 10,
        attemptsPerHour: 50
      },
      sqlInjection: {
        attemptsPerHour: 5
      },
      scanner: {
        portsScanned: 20,
        uniquePorts: 15
      }
    },
    
    // Cooldown settings (milliseconds)
    cooldown: {
      sameAttack: 60000,      // 1 minute
      sameIP: 300000,         // 5 minutes
      alert: 30000            // 30 seconds
    },
    
    // Formatting options
    formatting: {
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      timezone: 'Asia/Phnom_Penh',
      maxMessageLength: 4096
    }
  },
  
  // Security settings
  security: {
    rateLimit: {
      enabled: true,
      maxRequestsPerMinute: 30,
      blockDuration: 600000
    },
    allowedCommands: [
      '/start', '/help', '/status', '/stats',
      '/block', '/unblock', '/whitelist', '/report'
    ]
  }
};