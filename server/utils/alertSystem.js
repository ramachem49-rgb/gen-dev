const axios = require('axios');

class AlertSystem {
  async sendDiscordAlert(message, severity = 'warning') {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) return;

    const colors = { info: 3447003, warning: 16776960, critical: 15158332, attack: 15158332 };

    try {
      await axios.post(webhookUrl, {
        embeds: [{
          title: 'Security Alert',
          description: message,
          color: colors[severity] || colors.warning,
          timestamp: new Date().toISOString(),
          footer: { text: `Severity: ${severity}` }
        }]
      });
    } catch (error) {
      console.error('Discord alert failed:', error.message);
    }
  }

  async sendEmailAlert(subject, message, severity = 'warning') {
    // Email alerts require SMTP config — log to console as fallback
    console.warn(`[ALERT][${severity.toUpperCase()}] ${subject}: ${message}`);
  }
}

module.exports = new AlertSystem();
