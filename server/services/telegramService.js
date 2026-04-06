const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const os = require('os');

class TelegramService {
  constructor() {
    this.bot = null;
    this.chatId = null;
    this.isEnabled = false;
    this.alertQueue = [];
    this.isProcessing = false;
    this.messageCount = 0;
    this.lastMessageTime = Date.now();
    
    this.init();
  }

  init() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    this.chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!token || !this.chatId) {
      console.warn('⚠️ Telegram Bot not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env');
      return;
    }
    
    try {
      this.bot = new TelegramBot(token, { polling: true });
      this.isEnabled = true;
      
      this.setupCommands();
      this.startAlertProcessor();
      
      console.log('✅ Telegram Service initialized');
      this.sendStartupMessage();
    } catch (error) {
      console.error('❌ Failed to initialize Telegram Service:', error.message);
    }
  }

  // ... rest of the code remains the same, but update model paths when needed
  async getSecurityStats() {
    try {
      // Dynamic import to avoid circular dependencies
      const SecurityLog = require('../models/SecurityLog');
      const BlockedIP = require('../models/BlockedIP');
      
      // ... rest of the method
    } catch (error) {
      console.error('Failed to get stats:', error);
      return null;
    }
  }
}

module.exports = new TelegramService();