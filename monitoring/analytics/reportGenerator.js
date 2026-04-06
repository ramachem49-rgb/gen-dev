const fs = require('fs');
const path = require('path');
const threatAnalyzer = require('./threatAnalyzer');

class ReportGenerator {
  constructor() {
    this.reportsDir = path.join(__dirname, '../reports');
    this.ensureReportsDir();
  }
  
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  
  async generateFullReport() {
    const threatReport = threatAnalyzer.generateThreatReport();
    const systemStats = await this.getSystemStats();
    const attackStats = this.getAttackStats();
    
    const report = {
      metadata: {
        generatedAt: new Date().toISOString(),
        version: '2.0.0',
        reportId: this.generateReportId()
      },
      executiveSummary: this.generateExecutiveSummary(threatReport, attackStats),
      threatAnalysis: threatReport,
      statistics: attackStats,
      systemHealth: systemStats,
      recommendations: this.generateRecommendations(threatReport, attackStats),
      rawData: {
        totalAttacks: attackStats.total,
        attacksByType: attackStats.byType,
        topAttackers: attackStats.topAttackers
      }
    };
    
    // Save report to file
    this.saveReport(report);
    
    return report;
  }
  
  generateExecutiveSummary(threatReport, attackStats) {
    const riskLevel = threatReport.riskLevel;
    const totalAttacks = attackStats.total;
    const uniqueAttackers = attackStats.uniqueAttackers;
    
    let summary = '';
    
    if (riskLevel === 'CRITICAL') {
      summary = `⚠️ CRITICAL SECURITY STATUS: Your system is under active attack. ${totalAttacks} attacks from ${uniqueAttackers} unique sources detected. Immediate action required.`;
    } else if (riskLevel === 'HIGH') {
      summary = `🔴 HIGH SECURITY STATUS: Significant malicious activity detected. ${totalAttacks} attacks from ${uniqueAttackers} sources. Security review recommended.`;
    } else if (riskLevel === 'MEDIUM') {
      summary = `🟡 MEDIUM SECURITY STATUS: Elevated threat activity observed. ${totalAttacks} attacks detected. Monitor closely.`;
    } else {
      summary = `🟢 LOW SECURITY STATUS: Normal threat levels detected. ${totalAttacks} attacks in reporting period. Continue standard monitoring.`;
    }
    
    return {
      summary,
      riskLevel,
      keyFindings: this.getKeyFindings(threatReport, attackStats),
      recommendations: threatReport.recommendations.slice(0, 5)
    };
  }
  
  getKeyFindings(threatReport, attackStats) {
    const findings = [];
    
    // Most common attack type
    const topAttackType = Object.entries(attackStats.byType || {})
      .sort((a, b) => b[1] - a[1])[0];
    
    if (topAttackType) {
      findings.push(`${topAttackType[0]} attacks are most prevalent (${topAttackType[1]} occurrences)`);
    }
    
    // Top attacker
    if (attackStats.topAttackers && attackStats.topAttackers.length > 0) {
      findings.push(`IP ${attackStats.topAttackers[0].ip} is the most active attacker with ${attackStats.topAttackers[0].count} attempts`);
    }
    
    // Pattern findings
    if (threatReport.analysis.patterns) {
      threatReport.analysis.patterns.forEach(pattern => {
        findings.push(pattern.description);
      });
    }
    
    // Correlation findings
    if (threatReport.analysis.correlations) {
      threatReport.analysis.correlations.forEach(correlation => {
        findings.push(correlation.description);
      });
    }
    
    return findings;
  }
  
  getAttackStats() {
    const logPath = path.join(__dirname, '../logs/attacks.json');
    
    if (!fs.existsSync(logPath)) {
      return {
        total: 0,
        uniqueAttackers: 0,
        byType: {},
        bySeverity: {},
        topAttackers: [],
        last24Hours: 0
      };
    }
    
    try {
      const data = fs.readFileSync(logPath, 'utf8');
      const attacks = JSON.parse(data);
      const attacksArray = Array.isArray(attacks) ? attacks : [];
      
      const now = Date.now();
      const last24Hours = attacksArray.filter(a => 
        now - new Date(a.timestamp).getTime() < 24 * 60 * 60 * 1000
      ).length;
      
      const byType = {};
      const bySeverity = {};
      const attackerCount = {};
      
      attacksArray.forEach(attack => {
        // Count by type
        byType[attack.type] = (byType[attack.type] || 0) + 1;
        
        // Count by severity
        bySeverity[attack.severity] = (bySeverity[attack.severity] || 0) + 1;
        
        // Count by attacker
        if (attack.ip) {
          attackerCount[attack.ip] = (attackerCount[attack.ip] || 0) + 1;
        }
      });
      
      const topAttackers = Object.entries(attackerCount)
        .map(([ip, count]) => ({ ip, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
      
      return {
        total: attacksArray.length,
        uniqueAttackers: Object.keys(attackerCount).length,
        last24Hours,
        byType,
        bySeverity,
        topAttackers
      };
    } catch (error) {
      console.error('Failed to get attack stats:', error);
      return {
        total: 0,
        uniqueAttackers: 0,
        byType: {},
        bySeverity: {},
        topAttackers: [],
        last24Hours: 0
      };
    }
  }
  
  async getSystemStats() {
    const os = require('os');
    
    return {
      status: 'OPERATIONAL',
      uptime: this.formatUptime(process.uptime()),
      cpu: {
        usage: Math.round(os.loadavg()[0] * 100) / 100,
        cores: os.cpus().length,
        model: os.cpus()[0]?.model || 'Unknown'
      },
      memory: {
        total: Math.round(os.totalmem() / 1024 / 1024 / 1024),
        free: Math.round(os.freemem() / 1024 / 1024 / 1024),
        usage: Math.round((1 - os.freemem() / os.totalmem()) * 100)
      },
      network: {
        hostname: os.hostname(),
        platform: os.platform(),
        release: os.release()
      },
      monitoring: {
        botStatus: 'ACTIVE',
        detectorsStatus: 'ACTIVE',
        lastScan: new Date().toISOString()
      }
    };
  }
  
  generateRecommendations(threatReport, attackStats) {
    const recommendations = [...threatReport.recommendations];
    
    // Add statistical recommendations
    if (attackStats.last24Hours > 1000) {
      recommendations.push('🚨 CRITICAL: Implement emergency DDoS protection immediately');
    } else if (attackStats.last24Hours > 500) {
      recommendations.push('⚠️ HIGH: Consider upgrading DDoS protection capacity');
    }
    
    // Add type-specific recommendations
    if (attackStats.byType['SQL_INJECTION'] > 50) {
      recommendations.push('Review and strengthen input validation across all endpoints');
      recommendations.push('Implement parameterized queries and ORM best practices');
    }
    
    if (attackStats.byType['BRUTE_FORCE'] > 100) {
      recommendations.push('Implement CAPTCHA after multiple failed login attempts');
      recommendations.push('Consider implementing 2FA for all user accounts');
    }
    
    if (attackStats.byType['SCANNER'] > 200) {
      recommendations.push('Enable port knocking or hide services behind VPN');
      recommendations.push('Implement IP reputation blocking');
    }
    
    // Add general recommendations
    recommendations.push('Regularly update security patches and dependencies');
    recommendations.push('Conduct periodic security audits and penetration testing');
    recommendations.push('Maintain offline backups of critical data');
    
    // Remove duplicates
    return [...new Set(recommendations)];
  }
  
  formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    
    return parts.join(' ') || 'just started';
  }
  
  generateReportId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `RPT_${timestamp}_${random}`.toUpperCase();
  }
  
  saveReport(report) {
    const filename = `security_report_${report.metadata.reportId}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`Report saved: ${filename}`);
    
    // Clean old reports (keep last 30 days)
    this.cleanOldReports();
  }
  
  cleanOldReports() {
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    
    fs.readdirSync(this.reportsDir).forEach(file => {
      const filepath = path.join(this.reportsDir, file);
      const stats = fs.statSync(filepath);
      
      if (stats.mtimeMs < thirtyDaysAgo) {
        fs.unlinkSync(filepath);
        console.log(`Deleted old report: ${file}`);
      }
    });
  }
  
  async generateDailyReport() {
    const report = await this.generateFullReport();
    
    // Format for Telegram
    const telegramReport = {
      summary: report.executiveSummary.summary,
      riskLevel: report.executiveSummary.riskLevel,
      totalAttacks: report.statistics.total,
      uniqueAttackers: report.statistics.uniqueAttackers,
      topAttacks: Object.entries(report.statistics.byType)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([type, count]) => `${type}: ${count}`),
      topAttackers: report.statistics.topAttackers.slice(0, 3),
      recommendations: report.recommendations.slice(0, 3)
    };
    
    return telegramReport;
  }
  
  generatePDFReport(report) {
    // This would integrate with PDF generation library
    // Placeholder for PDF generation
    console.log('PDF report generation requested');
    return null;
  }
  
  generateCSVReport() {
    const logPath = path.join(__dirname, '../logs/attacks.json');
    
    if (!fs.existsSync(logPath)) {
      return null;
    }
    
    try {
      const data = fs.readFileSync(logPath, 'utf8');
      const attacks = JSON.parse(data);
      const attacksArray = Array.isArray(attacks) ? attacks : [];
      
      // CSV headers
      let csv = 'Timestamp,IP,Type,Severity,Target,Details\n';
      
      // Add data rows
      attacksArray.forEach(attack => {
        csv += `${attack.timestamp},${attack.ip},${attack.type},${attack.severity},${attack.target || ''},"${JSON.stringify(attack.details || {})}"\n`;
      });
      
      const csvPath = path.join(this.reportsDir, `attacks_export_${Date.now()}.csv`);
      fs.writeFileSync(csvPath, csv);
      
      return csvPath;
    } catch (error) {
      console.error('Failed to generate CSV report:', error);
      return null;
    }
  }
}

module.exports = new ReportGenerator();