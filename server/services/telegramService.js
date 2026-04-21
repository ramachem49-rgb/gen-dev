/**
 * telegramService.js
 * Server-side Telegram bridge — forwards alerts to monitoring bot via HTTP
 * The actual bot (polling) runs in monitoring/telegram/bot.js
 */
const os = require('os');

const MONITORING_URL = process.env.MONITORING_URL || 'http://localhost:3001';
const MONITORING_SECRET = process.env.MONITORING_SECRET || 'genz-monitor-secret';

class TelegramService {
  constructor() {
    this.isEnabled = !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
    this.queue = [];
    this.processing = false;
    if (this.isEnabled) {
      this._startQueue();
      console.log('✅ TelegramService: forwarding to monitoring bot');
    } else {
      console.warn('⚠️ TelegramService: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set');
    }
  }

  // ── Queue processor ─────────────────────────────────────────────────────────
  _startQueue() {
    setInterval(() => {
      if (!this.processing && this.queue.length > 0) this._processQueue();
    }, 1000);
  }

  async _processQueue() {
    if (this.processing || this.queue.length === 0) return;
    this.processing = true;
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      await this._send(item.text, item.severity).catch(() => {});
      await new Promise(r => setTimeout(r, 500));
    }
    this.processing = false;
  }

  // ── Send via monitoring HTTP endpoint ────────────────────────────────────────
  async _send(text, severity = 'INFO') {
    if (!this.isEnabled) return;
    try {
      // Try monitoring service first
      const res = await fetch(`${MONITORING_URL}/monitoring/notify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-monitor-secret': MONITORING_SECRET,
        },
        body: JSON.stringify({ text, severity }),
        signal: AbortSignal.timeout(5000),
      });
      if (res.ok) return;
    } catch {}

    // Fallback: send directly via Telegram API
    try {
      const token  = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
        signal: AbortSignal.timeout(8000),
      });
    } catch (e) {
      console.error('TelegramService send failed:', e.message);
    }
  }

  // ── Public API ───────────────────────────────────────────────────────────────
  sendSecurityAlert({ title, type, severity, description, action, threatScore }) {
    if (!this.isEnabled) return;
    const emoji = severity === 'CRITICAL' ? '🚨' : severity === 'ERROR' ? '❌' : '⚠️';
    const text =
      `${emoji} *${title}*\n` +
      `Type: \`${type}\`\n` +
      `Severity: ${severity}\n` +
      `Score: ${threatScore}\n` +
      `Info: ${description}\n` +
      `Action: ${action}`;
    this.queue.push({ text, severity });
  }

  sendLabNotify({ title, userId, name, email, ip, extra }) {
    if (!this.isEnabled) return;
    const lines = [`🧪 *${title}*`];
    if (userId) lines.push(`🆔 \`${userId}\``);
    if (name)   lines.push(`👤 ${name}`);
    if (email)  lines.push(`📧 ${email}`);
    if (ip)     lines.push(`🌐 IP: ${ip}`);
    if (extra)  lines.push(extra);
    lines.push(`🕐 ${new Date().toLocaleString()}`);
    this.queue.push({ text: lines.join('\n'), severity: 'INFO' });
  }

  sendStartupMessage() {
    if (!this.isEnabled) return;
    const text =
      `🚀 *Server Started*\n` +
      `Host: ${os.hostname()}\n` +
      `Env: ${process.env.NODE_ENV || 'development'}\n` +
      `Time: ${new Date().toISOString()}`;
    this.queue.push({ text, severity: 'INFO' });
  }
}

module.exports = new TelegramService();
