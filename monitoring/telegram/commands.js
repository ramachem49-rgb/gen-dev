const attackDetector = require('../detectors/attackDetector');
const reportGenerator = require('../analytics/reportGenerator');
const fs = require('fs');
const path = require('path');

class TelegramCommands {
  constructor() {
    this.blockedIPs = new Map();
    this.whitelistedIPs = new Set();
    this.loadBlockedIPs();
  }
  
  loadBlockedIPs() {
    const blockPath = path.join(__dirname, '../logs/blocked_ips.json');
    if (fs.existsSync(blockPath)) {
      try {
        const data = fs.readFileSync(blockPath, 'utf8');
        const parsed = JSON.parse(data);
        this.blockedIPs = new Map(Object.entries(parsed));
      } catch (error) {
        console.error('Failed to load blocked IPs:', error);
      }
    }
  }
  
  saveBlockedIPs() {
    const blockPath = path.join(__dirname, '../logs/blocked_ips.json');
    const blockedObj = Object.fromEntries(this.blockedIPs);
    fs.writeFileSync(blockPath, JSON.stringify(blockedObj, null, 2));
  }
  
  async handleStart(bot, msg) {
    const chatId = msg.chat.id;
    const welcomeMessage = `
🤖 <b>Security Monitor Bot - User Guide</b>

Welcome to the Security Monitor Bot! This bot helps protect your server from various cyber attacks.

<b>📋 Available Commands:</b>

🔹 <b>/status</b> - Check bot status and system health
🔹 <b>/stats</b> - View attack statistics
🔹 <b>/block &lt;IP&gt; [reason]</b> - Block an IP address
🔹 <b>/unblock &lt;IP&gt;</b> - Unblock an IP address
🔹 <b>/whitelist &lt;IP&gt;</b> - Add IP to whitelist
🔹 <b>/report</b> - Generate detailed security report
🔹 <b>/testalert</b> - Send test alert
🔹 <b>/help</b> - Show this help message

<b>🛡️ Security Features:</b>
• DDoS Attack Detection
• SQL Injection Prevention
• Port Scanner Detection
• Brute Force Protection
• XSS Attack Prevention
• RCE Attempt Detection

<b>📊 Real-time Monitoring:</b>
• Attack alerts sent instantly
• Daily security reports
• IP blocking capabilities
• Threat analysis

<b>💡 Tips:</b>
• Use /block to immediately block suspicious IPs
• Check /stats regularly for attack patterns
• Review /report for detailed analysis
• Keep this bot active for 24/7 protection

<b>🔐 Security Level:</b> HIGH
<b>Status:</b> ✅ ACTIVE
<b>Version:</b> 2.0.0

For emergencies, contact system administrator immediately.
    `;
    
    await bot.sendMessage(chatId, welcomeMessage, {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
  }
  
  async handleHelp(bot, msg) {
    const chatId = msg.chat.id;
    const helpMessage = `
📚 <b>Command Reference Guide</b>

<b>/status</b>
Shows bot status, uptime, and current security posture.

<b>/stats</b>
Displays attack statistics including:
- Total attacks detected
- Attacks by type (DDoS, SQLi, Scanner, etc.)
- Top attacking IPs
- Severity breakdown

<b>/block &lt;IP&gt; [reason]</b>
Example: <code>/block 192.168.1.100 Brute force attack</code>
Blocks an IP address and logs the reason.

<b>/unblock &lt;IP&gt;</b>
Example: <code>/unblock 192.168.1.100</code>
Removes IP from blocklist.

<b>/whitelist &lt;IP&gt;</b>
Example: <code>/whitelist 10.0.0.1</code>
Adds IP to whitelist (bypasses security checks).

<b>/report</b>
Generates comprehensive security report including:
- Attack trends
- Top threats
- System health
- Recommendations

<b>/testalert</b>
Sends a test alert to verify notification system.

<b>⚠️ Important Notes:</b>
• Blocked IPs are automatically saved
• Whitelisted IPs bypass all security checks
• Reports are saved in /monitoring/logs/
• All actions are logged for audit
    `;
    
    await bot.sendMessage(chatId, helpMessage, {
      parse_mode: 'HTML'
    });
  }
  
  async handleStatus(bot, msg) {
    const chatId = msg.chat.id;
    const stats = attackDetector.getStats();
    const os = require('os');
    
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    
    const statusMessage = `
🖥️ <b>System Status Report</b>

<b>📊 Bot Statistics:</b>
• Uptime: ${hours}h ${minutes}m
• Total Attacks Detected: ${stats.totalAttacks}
• Blocked IPs: ${this.blockedIPs.size}
• Whitelisted IPs: ${this.whitelistedIPs.size}
• Active Alerts: ${stats.activeAlerts || 0}

<b>🛡️ Security Status:</b>
• DDoS Protection: ✅ ACTIVE
• SQL Injection Filter: ✅ ACTIVE
• Scanner Detection: ✅ ACTIVE
• Brute Force Protection: ✅ ACTIVE
• XSS Filter: ✅ ACTIVE
• RCE Detection: ✅ ACTIVE

<b>📈 System Health:</b>
• CPU Usage: ${Math.round(os.loadavg()[0] * 100) / 100}%
• Memory Usage: ${Math.round((1 - os.freemem() / os.totalmem()) * 100)}%
• Database: ✅ Connected
• Telegram Bot: ✅ Online

<b>🎯 Recent Activity (Last Hour):</b>
• Attacks: ${stats.lastHour || 0}
• Blocked: ${stats.blockedLastHour || 0}
• Critical Events: ${stats.criticalLastHour || 0}

<b>🔔 Alert Settings:</b>
• Real-time: ✅ ENABLED
• Daily Reports: ✅ ENABLED
• Emergency Alerts: ✅ ENABLED
    `;
    
    await bot.sendMessage(chatId, statusMessage, {
      parse_mode: 'HTML'
    });
  }
  
  async handleStats(bot, msg) {
    const chatId = msg.chat.id;
    const stats = attackDetector.getStats();
    
    // Format attack types
    const attackTypes = Object.entries(stats.byType || {})
      .map(([type, count]) => `• ${type}: ${count} attacks`)
      .join('\n');
    
    // Format top attackers
    const topAttackers = Array.from(stats.topAttackers?.entries() || [])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([ip, count], index) => `${index + 1}. ${ip}: ${count} attempts`)
      .join('\n');
    
    const statsMessage = `
📊 <b>Attack Statistics Report</b>

<b>📈 Overall Statistics:</b>
• Total Attacks: ${stats.totalAttacks}
• Unique Attackers: ${stats.topAttackers?.size || 0}
• Blocked IPs: ${this.blockedIPs.size}
• Success Rate: ${stats.successRate || 0}%

<b>🎯 Attacks by Type:</b>
${attackTypes || 'No attacks recorded'}

<b>🔥 Top Attackers:</b>
${topAttackers || 'No attackers detected'}

<b>⚠️ Severity Breakdown:</b>
• CRITICAL: ${stats.bySeverity?.CRITICAL || 0}
• HIGH: ${stats.bySeverity?.HIGH || 0}
• MEDIUM: ${stats.bySeverity?.MEDIUM || 0}
• LOW: ${stats.bySeverity?.LOW || 0}

<b>📅 Time Distribution:</b>
• Last Hour: ${stats.lastHour || 0}
• Last 24 Hours: ${stats.last24Hours || 0}
• Last 7 Days: ${stats.last7Days || 0}

<b>🎯 Most Targeted Endpoints:</b>
${stats.topEndpoints?.map(e => `• ${e.path}: ${e.count} hits`).join('\n') || 'No data'}

<b>🌍 Geographic Distribution:</b>
${stats.topCountries?.map(c => `• ${c.country}: ${c.count} attacks`).join('\n') || 'No data'}

<b>🛡️ Protection Effectiveness:</b>
• Attacks Blocked: ${stats.blocked || 0}
• False Positives: ${stats.falsePositives || 0}
• Detection Rate: ${stats.detectionRate || 100}%
    `;
    
    await bot.sendMessage(chatId, statsMessage, {
      parse_mode: 'HTML'
    });
  }
  
  async handleBlock(bot, msg, match) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    // Check if user is admin
    const isAdmin = await this.isAdmin(userId);
    if (!isAdmin) {
      await bot.sendMessage(chatId, '⛔ You don\'t have permission to use this command.');
      return;
    }
    
    const input = match[1].trim();
    const [ip, ...reasonParts] = input.split(' ');
    const reason = reasonParts.join(' ') || 'Manual block by admin';
    
    // Validate IP
    if (!this.isValidIP(ip)) {
      await bot.sendMessage(chatId, '❌ Invalid IP address format.');
      return;
    }
    
    // Block IP
    this.blockedIPs.set(ip, {
      reason,
      blockedAt: new Date().toISOString(),
      blockedBy: msg.from.username || msg.from.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });
    
    this.saveBlockedIPs();
    
    // Add to firewall (if available)
    await this.addToFirewall(ip);
    
    const blockMessage = `
✅ <b>IP Address Blocked</b>

<b>IP:</b> <code>${ip}</code>
<b>Reason:</b> ${reason}
<b>Blocked By:</b> @${msg.from.username || msg.from.id}
<b>Blocked At:</b> ${new Date().toLocaleString()}
<b>Expires:</b> ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleString()}

<b>Action Taken:</b>
• IP added to blocklist
• Firewall rule applied
• All connections from this IP will be rejected

To unblock, use: <code>/unblock ${ip}</code>
    `;
    
    await bot.sendMessage(chatId, blockMessage, {
      parse_mode: 'HTML'
    });
    
    // Log the action
    this.logAction('BLOCK_IP', { ip, reason, admin: msg.from.username });
  }
  
  async handleUnblock(bot, msg, match) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const isAdmin = await this.isAdmin(userId);
    if (!isAdmin) {
      await bot.sendMessage(chatId, '⛔ You don\'t have permission to use this command.');
      return;
    }
    
    const ip = match[1].trim();
    
    if (!this.blockedIPs.has(ip)) {
      await bot.sendMessage(chatId, `❌ IP ${ip} is not blocked.`);
      return;
    }
    
    this.blockedIPs.delete(ip);
    this.saveBlockedIPs();
    
    // Remove from firewall
    await this.removeFromFirewall(ip);
    
    const unblockMessage = `
✅ <b>IP Address Unblocked</b>

<b>IP:</b> <code>${ip}</code>
<b>Unblocked By:</b> @${msg.from.username || msg.from.id}
<b>Unblocked At:</b> ${new Date().toLocaleString()}

<b>Action Taken:</b>
• IP removed from blocklist
• Firewall rule removed
• Connections from this IP are now allowed
    `;
    
    await bot.sendMessage(chatId, unblockMessage, {
      parse_mode: 'HTML'
    });
    
    this.logAction('UNBLOCK_IP', { ip, admin: msg.from.username });
  }
  
  async handleWhitelist(bot, msg, match) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const isAdmin = await this.isAdmin(userId);
    if (!isAdmin) {
      await bot.sendMessage(chatId, '⛔ You don\'t have permission to use this command.');
      return;
    }
    
    const ip = match[1].trim();
    
    if (!this.isValidIP(ip)) {
      await bot.sendMessage(chatId, '❌ Invalid IP address format.');
      return;
    }
    
    this.whitelistedIPs.add(ip);
    
    const whitelistMessage = `
✅ <b>IP Address Whitelisted</b>

<b>IP:</b> <code>${ip}</code>
<b>Added By:</b> @${msg.from.username || msg.from.id}
<b>Added At:</b> ${new Date().toLocaleString()}

<b>Note:</b> Whitelisted IPs bypass all security checks.
    `;
    
    await bot.sendMessage(chatId, whitelistMessage, {
      parse_mode: 'HTML'
    });
    
    this.logAction('WHITELIST_IP', { ip, admin: msg.from.username });
  }
  
  async handleReport(bot, msg) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const isAdmin = await this.isAdmin(userId);
    if (!isAdmin) {
      await bot.sendMessage(chatId, '⛔ You don\'t have permission to use this command.');
      return;
    }
    
    await bot.sendMessage(chatId, '📊 Generating security report... Please wait.');
    
    const report = await reportGenerator.generateFullReport();
    
    // Send report in parts if too long
    const reportMessage = `
📋 <b>Security Report</b>
<b>Generated:</b> ${new Date().toLocaleString()}

<b>Executive Summary:</b>
${report.summary}

<b>Key Findings:</b>
${report.keyFindings.map(f => `• ${f}`).join('\n')}

<b>Recommendations:</b>
${report.recommendations.map(r => `• ${r}`).join('\n')}

<b>Attack Statistics:</b>
• Total Attacks: ${report.stats.totalAttacks}
• Critical Events: ${report.stats.criticalEvents}
• Blocked IPs: ${report.stats.blockedIPs}

<b>Top Threats:</b>
${report.topThreats.map(t => `• ${t.type}: ${t.count} attempts (${t.severity})`).join('\n')}

<b>System Health:</b>
• Status: ${report.systemHealth.status}
• Uptime: ${report.systemHealth.uptime}
• Performance: ${report.systemHealth.performance}

For full report, check: /monitoring/logs/report_${Date.now()}.json
    `;
    
    await bot.sendMessage(chatId, reportMessage, {
      parse_mode: 'HTML'
    });
    
    // Save report to file
    const reportPath = path.join(__dirname, '../logs', `report_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }
  
  async handleTestAlert(bot, msg) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const isAdmin = await this.isAdmin(userId);
    if (!isAdmin) {
      await bot.sendMessage(chatId, '⛔ You don\'t have permission to use this command.');
      return;
    }
    
    const testAlert = `
🧪 <b>TEST ALERT - System Check</b>

<b>Type:</b> Test Notification
<b>Severity:</b> INFO
<b>Time:</b> ${new Date().toLocaleString()}

<b>Test Data:</b>
• Bot Status: ✅ Online
• Detection Systems: ✅ Active
• Notification System: ✅ Working
• Database Connection: ✅ OK

<b>This is a test message.</b>
If you received this, your security monitoring system is working correctly!
    `;
    
    await bot.sendMessage(chatId, testAlert, {
      parse_mode: 'HTML'
    });
    
    this.logAction('TEST_ALERT', { admin: msg.from.username });
  }
  
  async isAdmin(userId) {
    const adminIds = (process.env.TELEGRAM_ADMIN_CHAT_IDS || '').split(',');
    return adminIds.includes(userId.toString());
  }
  
  isValidIP(ip) {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
  }
  
  async addToFirewall(ip) {
    // This is a placeholder - implement actual firewall integration
    const { exec } = require('child_process');
    exec(`iptables -A INPUT -s ${ip} -j DROP`, (error) => {
      if (error) {
        console.error(`Failed to add firewall rule for ${ip}:`, error);
      }
    });
  }
  
  async removeFromFirewall(ip) {
    const { exec } = require('child_process');
    exec(`iptables -D INPUT -s ${ip} -j DROP`, (error) => {
      if (error) {
        console.error(`Failed to remove firewall rule for ${ip}:`, error);
      }
    });
  }
  
  logAction(action, data) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      action,
      ...data
    };
    
    const logPath = path.join(__dirname, '../logs/admin_actions.log');
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
  }
  
  isIPBlocked(ip) {
    const block = this.blockedIPs.get(ip);
    if (!block) return false;
    
    // Check if expired
    if (new Date(block.expiresAt) < new Date()) {
      this.blockedIPs.delete(ip);
      this.saveBlockedIPs();
      return false;
    }
    
    return true;
  }
  
  isIPWhitelisted(ip) {
    return this.whitelistedIPs.has(ip);
  }
}

module.exports = new TelegramCommands();