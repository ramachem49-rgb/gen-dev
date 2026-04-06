class AlertFormatter {
  constructor() {
    this.severityIcons = {
      INFO: 'ℹ️',
      WARNING: '⚠️',
      ERROR: '❌',
      CRITICAL: '🚨'
    };
    
    this.severityColors = {
      INFO: '#00FF00',
      WARNING: '#FFFF00',
      ERROR: '#FFA500',
      CRITICAL: '#FF0000'
    };
  }
  
  formatForTelegram(message, severity = 'INFO') {
    const icon = this.severityIcons[severity] || '📢';
    const timestamp = new Date().toLocaleString();
    
    return `${icon} <b>[${severity}]</b> ${message}\n\n<i>Time: ${timestamp}</i>`;
  }
  
  formatSecurityAlert(alert) {
    const icon = this.severityIcons[alert.severity] || '🚨';
    const timestamp = new Date(alert.timestamp).toLocaleString();
    
    let message = `
${icon} <b>SECURITY ALERT</b>

<b>Type:</b> ${alert.type}
<b>Severity:</b> ${alert.severity}
<b>Time:</b> ${timestamp}
<b>IP Address:</b> <code>${alert.ip || 'Unknown'}</code>

<b>Details:</b>
<code>${JSON.stringify(alert.details, null, 2)}</code>

<b>Recommendations:</b>
`;
    
    if (alert.recommendations && alert.recommendations.length) {
      alert.recommendations.forEach(rec => {
        message += `• ${rec}\n`;
      });
    } else {
      message += `• Investigate immediately\n• Check logs for more details\n• Consider blocking IP\n`;
    }
    
    message += `\n<b>Action Required:</b> ${this.getActionRequired(alert.severity)}`;
    
    return message;
  }
  
  formatDDOSAlert(attack) {
    return `
⚠️ <b>DDoS ATTACK DETECTED!</b>

<b>IP:</b> <code>${attack.ip}</code>
<b>Requests/Second:</b> ${attack.requestsPerSecond}
<b>Requests/Minute:</b> ${attack.requestsPerMinute}
<b>Duration:</b> ${attack.duration}s
<b>Severity:</b> ${attack.severity}

<b>Immediate Actions:</b>
• Enable rate limiting
• Activate DDoS protection
• Consider temporary IP block
• Increase server resources

<b>Auto-Response:</b> ${attack.autoBlocked ? 'IP Blocked' : 'Monitoring Only'}
    `;
  }
  
  formatSQLInjectionAlert(attack) {
    return `
🔴 <b>SQL INJECTION ATTEMPT</b>

<b>IP:</b> <code>${attack.ip}</code>
<b>Source:</b> ${attack.source}
<b>Pattern:</b> <code>${attack.pattern}</code>
<b>Payload:</b> <code>${attack.payload.substring(0, 150)}</code>
<b>Confidence:</b> ${attack.confidence}%

<b>Analysis:</b>
• Attack Type: ${this.classifySQLInjection(attack.payload)}
• Risk Level: ${attack.severity}
• Target: ${attack.target || 'Unknown'}

<b>Protection Status:</b>
• WAF: ${attack.wafBlocked ? 'Blocked' : 'Alert Only'}
• IP Status: ${attack.ipBlocked ? 'Blocked' : 'Monitoring'}
    `;
  }
  
  formatScannerAlert(attack) {
    return `
📡 <b>PORT SCANNER DETECTED</b>

<b>IP:</b> <code>${attack.ip}</code>
<b>Scanner Type:</b> ${attack.scannerType || 'Unknown'}
<b>Ports Scanned:</b> ${attack.portsScanned?.length || 0}
<b>Target Ports:</b> <code>${attack.targetPorts?.join(', ') || 'Unknown'}</code>

<b>Scanner Details:</b>
• User Agent: ${attack.userAgent || 'Unknown'}
• Scan Duration: ${attack.duration || 'Unknown'}
• Technique: ${attack.technique || 'Port scan'}

<b>Actions Taken:</b>
• ${attack.blocked ? 'IP Blocked Automatically' : 'IP Added to Watchlist'}
• ${attack.honeypotTriggered ? 'Honeypot Deployed' : 'Monitoring Active'}
    `;
  }
  
  formatBruteForceAlert(attack) {
    return `
🔐 <b>BRUTE FORCE ATTACK</b>

<b>IP:</b> <code>${attack.ip}</code>
<b>Attempts/Minute:</b> ${attack.attemptsPerMinute}
<b>Target:</b> ${attack.target || 'Login endpoint'}
<b>Username Attempts:</b> ${attack.usernames?.length || 0}

<b>Attack Pattern:</b>
• Rate: ${attack.rate} attempts/second
• Duration: ${attack.duration} minutes
• Success Rate: ${attack.successRate || 0}%

<b>Protection Measures:</b>
• CAPTCHA: ${attack.captchaTriggered ? 'Triggered' : 'Ready'}
• Rate Limiting: ${attack.rateLimitEnabled ? 'Active' : 'Inactive'}
• IP Block: ${attack.ipBlocked ? 'Blocked' : 'Not Blocked'}
    `;
  }
  
  formatXSSAlert(attack) {
    return `
💉 <b>XSS ATTEMPT DETECTED</b>

<b>IP:</b> <code>${attack.ip}</code>
<b>Vector:</b> ${attack.vector || 'Unknown'}
<b>Payload:</b> <code>${attack.payload.substring(0, 150)}</code>
<b>Context:</b> ${attack.context || 'Unknown'}

<b>XSS Type:</b> ${this.classifyXSS(attack.payload)}
<b>Risk Assessment:</b> ${attack.severity}

<b>Defense Status:</b>
• CSP Headers: ${attack.cspEnabled ? 'Active' : 'Missing'}
• Input Sanitization: ${attack.sanitized ? 'Applied' : 'Review Needed'}
• Output Encoding: ${attack.encoded ? 'Applied' : 'Review Needed'}
    `;
  }
  
  formatRCEAlert(attack) {
    return `
💀 <b>RCE ATTEMPT DETECTED!</b>

<b>IP:</b> <code>${attack.ip}</code>
<b>Command:</b> <code>${attack.command}</code>
<b>Vector:</b> ${attack.vector || 'Unknown'}

<b>Critical Information:</b>
• Attempted Execution: ${attack.command}
• User Context: ${attack.userContext || 'Unknown'}
• System Impact: ${attack.impact || 'Blocked'}

<b>URGENT ACTIONS REQUIRED:</b>
• IMMEDIATELY block IP: ${attack.ip}
• Check system for compromise
• Review command execution logs
• Audit user permissions
• Scan for backdoors

<b>Auto-Response:</b> ${attack.autoBlocked ? 'IP Blocked' : 'Manual Review Required'}
    `;
  }
  
  classifySQLInjection(payload) {
    const patterns = {
      union: /UNION\s+SELECT/i,
      boolean: /'.*\s+OR\s+'.*=\s*'/i,
      time: /SLEEP|BENCHMARK|pg_sleep/i,
      error: /EXTRACTVALUE|UPDATEXML|CAST/i,
      stack: /;\s*(SELECT|INSERT|UPDATE|DELETE)/i
    };
    
    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(payload)) {
        return `${type.toUpperCase()} Based Injection`;
      }
    }
    
    return 'Classic SQL Injection';
  }
  
  classifyXSS(payload) {
    if (/<script/i.test(payload)) return 'Script Tag Injection';
    if (/javascript:/i.test(payload)) return 'JavaScript Protocol';
    if (/onerror=|onload=/i.test(payload)) return 'Event Handler Injection';
    if (/<iframe/i.test(payload)) return 'IFrame Injection';
    if (/<svg/i.test(payload)) return 'SVG Injection';
    return 'Generic XSS';
  }
  
  getActionRequired(severity) {
    switch(severity) {
      case 'CRITICAL':
        return '⚠️ IMMEDIATE ACTION REQUIRED - Investigate now!';
      case 'ERROR':
        return '🔴 High priority - Investigate within 1 hour';
      case 'WARNING':
        return '🟡 Medium priority - Review within 24 hours';
      default:
        return 'ℹ️ Low priority - Monitor situation';
    }
  }
  
  formatDailySummary(stats) {
    const date = new Date().toLocaleDateString();
    
    return `
📊 <b>DAILY SECURITY SUMMARY</b>
<b>Date:</b> ${date}

<b>📈 Attack Statistics:</b>
• Total Attacks: ${stats.totalAttacks}
• Unique Attackers: ${stats.uniqueAttackers}
• Blocked IPs: ${stats.blockedIPs}
• Success Rate: ${stats.successRate}%

<b>🎯 Attack Distribution:</b>
• DDoS: ${stats.ddos || 0}
• SQL Injection: ${stats.sqlInjection || 0}
• Scanner: ${stats.scanner || 0}
• Brute Force: ${stats.bruteForce || 0}
• XSS: ${stats.xss || 0}
• RCE: ${stats.rce || 0}

<b>🌍 Top Attacking Countries:</b>
${stats.topCountries?.map(c => `• ${c.country}: ${c.count} attacks`).join('\n') || 'No data'}

<b>🛡️ Protection Effectiveness:</b>
• Detection Rate: ${stats.detectionRate}%
• Block Rate: ${stats.blockRate}%
• False Positive Rate: ${stats.falsePositiveRate}%

<b>✅ System Health:</b>
• Status: ${stats.systemHealth}
• Avg Response Time: ${stats.avgResponseTime}ms
• Uptime: ${stats.uptime}

<b>📋 Recommendations for Tomorrow:</b>
${stats.recommendations?.map(r => `• ${r}`).join('\n') || 'Continue monitoring'}
    `;
  }
}

module.exports = new AlertFormatter();