// បើកឯកសារ C:\Users\iboy\OneDrive\Documents\Full-stack Developments\master\monitoring\notifiers\telegramNotifier.js
// ហើយជំនួសកូដទាំងអស់ខាងក្រោម

const telegramBot = require('../telegram/bot');

class TelegramNotifier {
  constructor() {
    this.notificationQueue = [];
    this.isProcessing = false;
    // Remove the problematic line
    // this.startProcessor(); // <- លុបបន្ទាត់នេះចេញ
    this.init();
  }
  
  init() {
    // Start the queue processor
    this.startQueueProcessor();
    console.log('Telegram Notifier initialized');
  }
  
  startQueueProcessor() {
    // Process queue every 2 seconds
    setInterval(() => {
      this.processQueue();
    }, 2000);
  }
  
  async sendNotification(notification) {
    this.notificationQueue.push({
      ...notification,
      timestamp: Date.now()
    });
    
    // Try to process immediately
    this.processQueue();
  }
  
  async processQueue() {
    if (this.isProcessing) return;
    if (this.notificationQueue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.notificationQueue.length > 0) {
      const notification = this.notificationQueue.shift();
      
      try {
        await telegramBot.sendMessage(
          notification.message,
          notification.severity || 'INFO',
          notification.options || {}
        );
        console.log(`Notification sent: ${notification.severity}`);
      } catch (error) {
        console.error('Failed to send notification:', error);
        // Re-queue failed message
        if (notification.retryCount < 3) {
          this.notificationQueue.push({
            ...notification,
            retryCount: (notification.retryCount || 0) + 1
          });
        }
      }
      
      // Delay between messages
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.isProcessing = false;
  }
  
  async notifyAttack(attack) {
    const message = this.formatAttackMessage(attack);
    await this.sendNotification({
      message,
      severity: attack.severity,
      options: { disable_notification: attack.severity === 'INFO' }
    });
  }
  
  async notifyDDOS(attack) {
    const message = `
⚠️ <b>DDoS Attack Detected!</b>

<b>IP Address:</b> <code>${attack.ip}</code>
<b>Requests/Minute:</b> ${attack.details?.requestsPerMinute || 'Unknown'}
<b>Severity:</b> ${attack.severity}
<b>Time:</b> ${new Date().toLocaleString()}

<b>Recommendations:</b>
• Enable rate limiting immediately
• Consider using DDoS protection service
• Block IP temporarily
• Monitor traffic patterns
    `;
    
    await this.sendNotification({ message, severity: attack.severity });
  }
  
  async notifySQLInjection(attack) {
    const message = `
🔴 <b>SQL Injection Attempt Blocked!</b>

<b>IP Address:</b> <code>${attack.ip}</code>
<b>Source:</b> ${attack.details?.source || 'Unknown'}
<b>Pattern:</b> <code>${attack.details?.pattern || 'Unknown'}</code>
<b>Payload:</b> <code>${(attack.details?.payload || '').substring(0, 100)}</code>
<b>Confidence:</b> ${Math.round((attack.details?.confidence || 0) * 100)}%
<b>Severity:</b> ${attack.severity}
<b>Time:</b> ${new Date().toLocaleString()}

<b>Action Taken:</b>
• Attack blocked by WAF
• IP logged for review

<b>Recommendations:</b>
• Block this IP permanently
• Review input validation
• Check database logs
    `;
    
    await this.sendNotification({ message, severity: attack.severity });
  }
  
  async notifyScanner(attack) {
    const message = `
📡 <b>Port Scanner Detected!</b>

<b>IP Address:</b> <code>${attack.ip}</code>
<b>Scanner Type:</b> ${attack.scannerType || 'Unknown'}
<b>URL:</b> ${attack.details?.url || 'Unknown'}
<b>Severity:</b> ${attack.severity}
<b>Time:</b> ${new Date().toLocaleString()}

<b>Action Taken:</b>
• IP added to monitoring list
• Decoy services deployed

<b>Recommendations:</b>
• Block scanning IP
• Enable port knocking
• Use honeypots
    `;
    
    await this.sendNotification({ message, severity: attack.severity });
  }
  
  async notifyBruteForce(attack) {
    const message = `
🔐 <b>Brute Force Attack Detected!</b>

<b>IP Address:</b> <code>${attack.ip}</code>
<b>Target Email:</b> ${attack.details?.targetEmail || 'Unknown'}
<b>Attempts/Minute:</b> ${attack.details?.attemptsPerMinute || 'Unknown'}
<b>Severity:</b> ${attack.severity}
<b>Time:</b> ${new Date().toLocaleString()}

<b>Action Taken:</b>
• Rate limiting enabled
• IP blocked automatically

<b>Recommendations:</b>
• Block IP immediately
• Enable 2FA for all users
• Increase password complexity
    `;
    
    await this.sendNotification({ message, severity: attack.severity });
  }
  
  async notifySystemAlert(alert) {
    const message = `
🖥️ <b>System Alert</b>

<b>Title:</b> ${alert.title}
<b>Description:</b> ${alert.description}
<b>Severity:</b> ${alert.severity}
<b>Time:</b> ${new Date().toLocaleString()}

<b>Details:</b>
<code>${JSON.stringify(alert.details, null, 2)}</code>
    `;
    
    await this.sendNotification({ message, severity: alert.severity });
  }
  
  async sendDailyReport(report) {
    const message = `
📊 <b>Daily Security Report</b>
<b>Date:</b> ${new Date().toLocaleDateString()}

<b>Statistics:</b>
• Total Attacks: ${report.totalAttacks}
• Blocked IPs: ${report.blockedIPs}
• Critical Events: ${report.criticalEvents}
• High Severity: ${report.highSeverity}
• Medium Severity: ${report.mediumSeverity}
• Low Severity: ${report.lowSeverity}

<b>Attack Types:</b>
• DDoS: ${report.attacksByType?.ddos || 0}
• SQL Injection: ${report.attacksByType?.sqlInjection || 0}
• Scanner: ${report.attacksByType?.scanner || 0}
• Brute Force: ${report.attacksByType?.bruteForce || 0}

<b>Top Attackers:</b>
${report.topAttackers?.map(a => `• ${a.ip}: ${a.count} attacks`).join('\n') || 'No data'}

<b>System Status:</b>
• Status: ✅ Online
• Protection: ✅ Active
• Monitoring: ✅ Active
    `;
    
    await this.sendNotification({ message, severity: 'INFO' });
  }
  
  formatAttackMessage(attack) {
    const icons = {
      ddos: '⚠️',
      sql_injection: '🔴',
      scanner: '📡',
      brute_force: '🔐',
      xss: '💉',
      rce: '💀'
    };
    
    const icon = icons[attack.type?.toLowerCase()] || '🚨';
    
    return `
${icon} <b>${(attack.type || 'ATTACK').toUpperCase()} Detected!</b>

<b>IP Address:</b> <code>${attack.ip}</code>
<b>Severity:</b> ${attack.severity}
<b>Time:</b> ${new Date().toLocaleString()}

<b>Details:</b>
<code>${JSON.stringify(attack.details, null, 2)}</code>

<b>Recommendations:</b>
• Investigate immediately
• Check logs for more details
• Consider blocking IP
    `;
  }
}

module.exports = new TelegramNotifier();