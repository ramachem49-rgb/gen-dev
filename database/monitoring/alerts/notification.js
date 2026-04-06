const nodemailer = require('nodemailer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

class AlertSystem {
  constructor() {
    this.emailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    
    this.alertLogPath = path.join(__dirname, '../logs/alerts.log');
  }

  // Send email alert
  async sendEmailAlert(subject, message, severity = 'warning') {
    try {
      await this.emailTransporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ALERT_EMAIL,
        subject: `[${severity.toUpperCase()}] ${subject}`,
        html: `
          <h2>Security Alert</h2>
          <p><strong>Severity:</strong> ${severity}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr>
          <p><strong>System:</strong> ${process.env.NODE_ENV}</p>
          <p><strong>Host:</strong> ${require('os').hostname()}</p>
        `
      });
      
      this.logAlert('email', subject, message, severity);
    } catch (error) {
      console.error('Failed to send email alert:', error);
    }
  }

  // Send SMS alert (using Twilio example)
  async sendSMSAlert(message) {
    // Implement SMS provider (Twilio, etc.)
    // This is a placeholder
    console.log('SMS Alert:', message);
    this.logAlert('sms', 'SMS Alert', message, 'critical');
  }

  // Send Discord webhook
  async sendDiscordAlert(message, severity = 'warning') {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) return;

    const colors = {
      info: 3447003,
      warning: 16776960,
      critical: 15158332,
      attack: 15158332
    };

    try {
      await axios.post(webhookUrl, {
        embeds: [{
          title: 'Security Alert',
          description: message,
          color: colors[severity] || colors.warning,
          timestamp: new Date().toISOString(),
          footer: {
            text: `Severity: ${severity}`
          }
        }]
      });
      
      this.logAlert('discord', 'Discord Alert', message, severity);
    } catch (error) {
      console.error('Failed to send Discord alert:', error);
    }
  }

  // Log alert to file
  logAlert(type, subject, message, severity) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      type,
      subject,
      message,
      severity
    };
    
    fs.appendFileSync(
      this.alertLogPath,
      JSON.stringify(logEntry) + '\n'
    );
  }

  // Monitor for DDoS attacks
  monitorDDoSAttack(requests, ip, path) {
    // If requests > threshold in short time
    if (requests > 1000 && path === '/api') {
      this.sendDiscordAlert(
        `Possible DDoS attack detected from IP: ${ip}\nRequests: ${requests} in last minute`,
        'critical'
      );
      this.sendEmailAlert(
        'DDoS Attack Detected',
        `IP: ${ip}\nRequests: ${requests}\nTime: ${new Date().toISOString()}`,
        'critical'
      );
    }
  }

  // Monitor for brute force attacks
  monitorBruteForce(ip, attempts) {
    if (attempts > 50) {
      this.sendDiscordAlert(
        `Brute force attack detected from IP: ${ip}\nAttempts: ${attempts}`,
        'critical'
      );
    } else if (attempts > 20) {
      this.sendDiscordAlert(
        `Multiple failed login attempts from IP: ${ip}\nAttempts: ${attempts}`,
        'warning'
      );
    }
  }

  // Monitor for SQL injection attempts
  monitorSQLInjection(ip, path, payload) {
    this.sendDiscordAlert(
      `SQL Injection attempt detected!\nIP: ${ip}\nPath: ${path}\nPayload: ${payload}`,
      'attack'
    );
    
    this.sendEmailAlert(
      'SQL Injection Attempt',
      `IP: ${ip}\nPath: ${path}\nPayload: ${payload}`,
      'critical'
    );
  }
}

module.exports = new AlertSystem();