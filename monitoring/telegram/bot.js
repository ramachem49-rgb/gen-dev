// monitoring/telegram/bot.js
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const commands = require('./commands');
const handlers = require('./handlers');
const alertFormatter = require('../notifiers/alertFormatter');
require('dotenv').config();

class SecurityTelegramBot {
  constructor() {
    this.bot = null;
    this.isRunning = false;
    this.messageQueue = [];
    this.processingQueue = false;
    this.lastAlertTime = new Map();
    this.blockedUsers = new Map();
    this.rateLimit = new Map();
    
    this.init();
  }
  
  async init() {
    try {
      const token = process.env.TELEGRAM_BOT_TOKEN || config.telegram.token;
      
      if (!token) {
        console.error('❌ TELEGRAM_BOT_TOKEN is missing! Please check your .env file');
        return;
      }
      
      console.log('🤖 Initializing Telegram Bot...');
      
      this.bot = new TelegramBot(token, { polling: true });
      
      this.setupCommands();
      this.setupEventHandlers();
      this.startMessageQueue();
      await this.sendStartupMessage();
      
      this.isRunning = true;
      console.log('✅ Telegram Security Bot is running');
      
    } catch (error) {
      console.error('Failed to initialize Telegram bot:', error.message);
    }
  }
  
  setupCommands() {
    if (!this.bot) return;
    
    this.bot.onText(/\/start/, (msg) => {
      commands.handleStart(this.bot, msg);
    });
    
    this.bot.onText(/\/help/, (msg) => {
      commands.handleHelp(this.bot, msg);
    });
    
    this.bot.onText(/\/status/, (msg) => {
      commands.handleStatus(this.bot, msg);
    });
    
    this.bot.onText(/\/stats/, (msg) => {
      commands.handleStats(this.bot, msg);
    });
    
    this.bot.onText(/\/block (.+)/, (msg, match) => {
      commands.handleBlock(this.bot, msg, match);
    });
    
    this.bot.onText(/\/unblock (.+)/, (msg, match) => {
      commands.handleUnblock(this.bot, msg, match);
    });
    
    this.bot.onText(/\/whitelist (.+)/, (msg, match) => {
      commands.handleWhitelist(this.bot, msg, match);
    });
    
    this.bot.onText(/\/report/, (msg) => {
      commands.handleReport(this.bot, msg);
    });
    
    this.bot.onText(/\/testalert/, (msg) => {
      commands.handleTestAlert(this.bot, msg);
    });

    // ── Lab commands ────────────────────────────────────────────────────────
    // /setlimit GD-XXXXXX 30  |  /setlimit GD-XXXXXX unlimited
    this.bot.onText(/\/setlimit (.+)/, async (msg, match) => {
      await this._handleSetLimit(msg, match[1].trim());
    });

    // /users — list recent users
    this.bot.onText(/\/users/, async (msg) => {
      await this._handleUsers(msg);
    });

    // /userinfo GD-XXXXXX
    this.bot.onText(/\/userinfo (.+)/, async (msg, match) => {
      await this._handleUserInfo(msg, match[1].trim());
    });

    // /labreset GD-XXXXXX — reset daily usage
    this.bot.onText(/\/labreset (.+)/, async (msg, match) => {
      await this._handleLabReset(msg, match[1].trim());
    });
  }
  
  setupEventHandlers() {
    if (!this.bot) return;
    
    this.bot.on('new_chat_members', (msg) => {
      handlers.handleNewMember(this.bot, msg);
    });
    
    this.bot.on('error', (error) => {
      console.error('Telegram bot error:', error.message);
    });
    
    this.bot.on('polling_error', (error) => {
      console.error('Polling error:', error.message);
    });
  }
  
  async sendStartupMessage() {
    const message = `
🚀 <b>Security Monitor Bot Started</b>

<b>System Information:</b>
- Time: ${new Date().toLocaleString()}
- Status: ✅ Online
- Monitoring: Active

<b>Features Enabled:</b>
- 🔍 DDoS Detection
- 🛡️ SQL Injection Detection
- 📡 Port Scanner Detection
- 🔐 Brute Force Detection
- 📊 Real-time Analytics

Type /help for available commands
    `;
    
    await this.sendMessage(message, 'INFO');
  }
  
  async sendMessage(message, severity = 'INFO', options = {}) {
    if (!this.bot) return false;
    
    if (!this.checkRateLimit('global')) {
      this.messageQueue.push({ message, severity, options, timestamp: Date.now() });
      return false;
    }
    
    const formattedMessage = alertFormatter.formatForTelegram(message, severity);
    const messages = this.splitLongMessage(formattedMessage);
    const chatId = process.env.TELEGRAM_CHAT_ID || config.telegram.chatId;
    
    try {
      for (const msg of messages) {
        await this.bot.sendMessage(chatId, msg, {
          parse_mode: 'HTML',
          disable_web_page_preview: true,
          ...options
        });
      }
      return true;
    } catch (error) {
      console.error('Failed to send Telegram message:', error.message);
      return false;
    }
  }
  
  async sendAlert(alert) {
    const { type, severity, ip, details } = alert;
    
    const cooldownKey = `${type}_${ip}`;
    const lastAlert = this.lastAlertTime.get(cooldownKey);
    const now = Date.now();
    
    if (lastAlert && (now - lastAlert) < 60000) {
      return false;
    }
    
    this.lastAlertTime.set(cooldownKey, now);
    const message = alertFormatter.formatSecurityAlert(alert);
    
    const chatIds = [
      process.env.TELEGRAM_CHAT_ID || config.telegram.chatId,
      ...(process.env.TELEGRAM_ADMIN_CHAT_IDS || config.telegram.adminChatIds || [])
    ];
    
    for (const chatId of chatIds) {
      if (chatId) {
        try {
          await this.bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            disable_web_page_preview: true
          });
        } catch (error) {
          console.error(`Failed to send alert to ${chatId}:`, error.message);
        }
      }
    }
    
    this.logAlert(alert);
    return true;
  }
  
  splitLongMessage(message) {
    const maxLength = 4096;
    if (message.length <= maxLength) return [message];
    
    const messages = [];
    let currentMessage = '';
    const lines = message.split('\n');
    
    for (const line of lines) {
      if ((currentMessage + line + '\n').length > maxLength) {
        messages.push(currentMessage);
        currentMessage = line + '\n';
      } else {
        currentMessage += line + '\n';
      }
    }
    
    if (currentMessage) {
      messages.push(currentMessage);
    }
    
    return messages;
  }
  
  checkRateLimit(key) {
    const now = Date.now();
    const userRate = this.rateLimit.get(key);
    
    if (!userRate) {
      this.rateLimit.set(key, {
        count: 1,
        firstRequest: now,
        blocked: false
      });
      return true;
    }
    
    if (userRate.blocked) {
      if (now - userRate.firstRequest > 600000) {
        this.rateLimit.delete(key);
        return true;
      }
      return false;
    }
    
    if (now - userRate.firstRequest > 60000) {
      userRate.count = 1;
      userRate.firstRequest = now;
      return true;
    }
    
    userRate.count++;
    
    if (userRate.count > 30) {
      userRate.blocked = true;
      return false;
    }
    
    return true;
  }
  
  startMessageQueue() {
    setInterval(async () => {
      if (this.messageQueue.length === 0 || this.processingQueue) return;
      
      this.processingQueue = true;
      
      while (this.messageQueue.length > 0) {
        const message = this.messageQueue.shift();
        await this.sendMessage(message.message, message.severity, message.options);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      this.processingQueue = false;
    }, 5000);
  }
  
  logAlert(alert) {
    const fs = require('fs');
    const path = require('path');
    const logPath = path.join(__dirname, '../logs/notifications.log');
    const logDir = path.dirname(logPath);
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: alert.type,
      severity: alert.severity,
      ip: alert.ip,
      details: alert.details,
      notified: true
    };
    
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
  }
  
  async stop() {
    if (this.bot) {
      await this.bot.stopPolling();
      this.isRunning = false;
      console.log('Telegram bot stopped');
    }
  }

  // ── Lab command handlers ────────────────────────────────────────────────────
  async _callServerAPI(endpoint, method = 'GET', body = null) {
    try {
      const serverUrl = process.env.SERVER_URL || 'http://localhost:5000';
      const secret = process.env.MONITORING_SECRET || 'genz-monitor-secret-2024';
      const opts = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-monitor-secret': secret,
        },
        signal: AbortSignal.timeout(8000),
      };
      if (body) opts.body = JSON.stringify(body);
      const res = await fetch(serverUrl + endpoint, opts);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return { error: err.error || `HTTP ${res.status}` };
      }
      return await res.json();
    } catch (e) {
      return { error: e.message };
    }
  }

  async _handleSetLimit(msg, input) {
    const chatId = msg.chat.id;
    const parts = input.split(/\s+/);
    const userId = parts[0];
    const val    = parts[1];

    if (!userId || !val) {
      return this.bot.sendMessage(chatId,
        '❌ *Usage:*\n`/setlimit GD-XXXXXX 30`\n`/setlimit GD-XXXXXX unlimited`',
        { parse_mode: 'Markdown' });
    }

    const unlimited = val === 'unlimited';
    const limit     = parseInt(val);

    if (!unlimited && isNaN(limit)) {
      return this.bot.sendMessage(chatId, '❌ Invalid value. Use number or "unlimited"');
    }

    const data = await this._callServerAPI(`/api/auth/monitor/lab-limit/${userId}`, 'PUT', { limit, unlimited });
    if (data.error || !data.success) {
      return this.bot.sendMessage(chatId, `❌ ${data.error || 'User not found'}`, { parse_mode: 'Markdown' });
    }

    const lab = data.data?.lab || {};
    this.bot.sendMessage(chatId,
      `✅ *Lab limit updated*\n🆔 \`${userId}\`\n🔢 ${lab.unlimited ? '♾ UNLIMITED' : lab.limit + ' runs/day'}`,
      { parse_mode: 'Markdown' });
  }

  async _handleUsers(msg) {
    const chatId = msg.chat.id;
    const data = await this._callServerAPI('/api/auth/monitor/users');
    if (data.error || !data.success) {
      return this.bot.sendMessage(chatId, `⚠️ Cannot fetch users: ${data.error || 'Server error'}`);
    }
    const users = (data.data || []).slice(0, 10);
    if (!users.length) return this.bot.sendMessage(chatId, 'No users found');
    const text = '*Recent Users (10):*\n\n' + users.map(u =>
      `👤 *${u.name}* \`${u.userId}\`\n📧 ${u.email}\n🔢 ${u.lab?.unlimited ? '♾' : (u.lab?.used||0) + '/' + (u.lab?.limit||15)}`
    ).join('\n\n');
    this.bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
  }

  async _handleUserInfo(msg, userId) {
    const chatId = msg.chat.id;
    const data = await this._callServerAPI('/api/auth/monitor/users');
    if (data.error || !data.success) {
      return this.bot.sendMessage(chatId, `⚠️ Cannot fetch user: ${data.error}`);
    }
    const user = (data.data || []).find(u => u.userId === userId);
    if (!user) return this.bot.sendMessage(chatId, `❌ User \`${userId}\` not found`, { parse_mode: 'Markdown' });
    const text =
      `👤 *${user.name}*\n` +
      `🆔 \`${user.userId}\`\n` +
      `📧 ${user.email}\n` +
      `🎭 Role: ${user.role}\n` +
      `🔢 Lab: ${user.lab?.unlimited ? '♾ Unlimited' : (user.lab?.used||0) + '/' + (user.lab?.limit||15) + '/day'}\n` +
      `📅 Joined: ${new Date(user.createdAt).toLocaleDateString()}`;
    this.bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
  }

  async _handleLabReset(msg, userId) {
    const chatId = msg.chat.id;
    const data = await this._callServerAPI(`/api/auth/monitor/lab-reset/${userId}`, 'POST');
    if (data.error || !data.success) {
      return this.bot.sendMessage(chatId, `❌ ${data.error || 'User not found'}`);
    }
    this.bot.sendMessage(chatId,
      `✅ *Lab usage reset*\n🆔 \`${userId}\`\nUsed: 0/${data.data?.lab?.limit||15}`,
      { parse_mode: 'Markdown' });
  }
}

module.exports = new SecurityTelegramBot();