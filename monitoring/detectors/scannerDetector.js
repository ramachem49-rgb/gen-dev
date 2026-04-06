const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class ScannerDetector extends EventEmitter {
  constructor() {
    super();
    this.scanAttempts = new Map();
    this.blockedIPs = new Set();
    this.suspiciousPatterns = {
      // Common scanner user agents
      userAgents: [
        /nmap/i, /masscan/i, /zmap/i, /zombie/i,
        /sqlmap/i, /nikto/i, /w3af/i, /burp/i,
        /nessus/i, /openvas/i, /acunetix/i, /appscan/i,
        /wpscan/i, /joomscan/i, /drupalscan/i,
        /python-requests/i, /go-http-client/i, /java/i,
        /curl/i, /wget/i, /libwww-perl/i, /lwp/i
      ],
      
      // Suspicious paths (directory traversal, config files, etc.)
      paths: [
        '/admin', '/wp-admin', '/phpmyadmin', '/sql',
        '/backup', '/config', '/.env', '/.git',
        '/database', '/dump.sql', '/backup.zip',
        '/phpinfo.php', '/info.php', '/test.php',
        '/xmlrpc.php', '/wp-login.php',
        '/cgi-bin/', '/shell', '/cmd', '/exec'
      ],
      
      // Suspicious parameters
      parameters: [
        'file=', 'path=', 'dir=', 'cmd=', 'exec=',
        'command=', 'system=', 'passthru='
      ],
      
      // Suspicious extensions
      extensions: [
        '.php', '.asp', '.aspx', '.jsp', '.cgi',
        '.pl', '.py', '.rb', '.sh', '.bat'
      ]
    };
    
    this.init();
  }
  
  init() {
    // Clean old data every hour
    setInterval(() => this.cleanOldData(), 60 * 60 * 1000);
    
    console.log('Scanner Detector initialized');
  }
  
  detectScanner(req, res, next) {
    const ip = req.ip;
    const url = req.url;
    const userAgent = req.headers['user-agent'] || '';
    const now = Date.now();
    
    // Check if IP is blocked
    if (this.blockedIPs.has(ip)) {
      res.status(403).json({
        success: false,
        error: 'Access denied'
      });
      return;
    }
    
    // Track scan attempt
    this.trackScanAttempt(ip, url, userAgent, now);
    
    // Check for scanner patterns
    const scannerType = this.identifyScanner(userAgent, url);
    
    if (scannerType) {
      this.handleScanner(ip, scannerType, url, userAgent);
      res.status(403).json({
        success: false,
        error: 'Access denied'
      });
      return;
    }
    
    // Check for path traversal attempts
    if (this.checkPathTraversal(url)) {
      this.handlePathTraversal(ip, url);
      res.status(403).json({
        success: false,
        error: 'Invalid request'
      });
      return;
    }
    
    next();
  }
  
  trackScanAttempt(ip, url, userAgent, timestamp) {
    if (!this.scanAttempts.has(ip)) {
      this.scanAttempts.set(ip, {
        attempts: [],
        firstSeen: timestamp,
        lastSeen: timestamp,
        paths: new Set(),
        userAgents: new Set()
      });
    }
    
    const data = this.scanAttempts.get(ip);
    data.attempts.push({ timestamp, url, userAgent });
    data.lastSeen = timestamp;
    data.paths.add(url);
    data.userAgents.add(userAgent);
    
    // Keep only last 100 attempts
    if (data.attempts.length > 100) {
      data.attempts = data.attempts.slice(-100);
    }
  }
  
  identifyScanner(userAgent, url) {
    // Check user agent
    for (const pattern of this.suspiciousPatterns.userAgents) {
      if (pattern.test(userAgent)) {
        return pattern.toString();
      }
    }
    
    // Check for sequential path scanning
    if (this.isSequentialScanning(url)) {
      return 'SEQUENTIAL_SCANNER';
    }
    
    // Check for rapid path changes
    if (this.isRapidPathScanning(url)) {
      return 'RAPID_SCANNER';
    }
    
    return null;
  }
  
  isSequentialScanning(url) {
    // This would need to track URL patterns across requests
    // Placeholder for sequential scanning detection
    return false;
  }
  
  isRapidPathScanning(url) {
    // This would need to track request frequency
    // Placeholder for rapid scanning detection
    return false;
  }
  
  checkPathTraversal(url) {
    const traversalPatterns = [
      /\.\.\//g,
      /\.\.\\/g,
      /%2e%2e%2f/g,
      /%2e%2e%5c/g,
      /\.\.%2f/g,
      /\.\.%5c/g
    ];
    
    for (const pattern of traversalPatterns) {
      if (pattern.test(url)) {
        return true;
      }
    }
    
    return false;
  }
  
  handleScanner(ip, scannerType, url, userAgent) {
    const attack = {
      type: 'SCANNER',
      ip: ip,
      scannerType: scannerType,
      severity: 'HIGH',
      timestamp: new Date().toISOString(),
      details: {
        url: url,
        userAgent: userAgent,
        attempts: this.scanAttempts.get(ip)?.attempts.length || 0
      }
    };
    
    // Block IP
    this.blockedIPs.add(ip);
    
    // Log attack
    this.logAttack(attack);
    
    // Emit event for notification
    this.emit('scanner-detected', attack);
    
    // Schedule unblock after 24 hours
    setTimeout(() => {
      this.blockedIPs.delete(ip);
      console.log(`IP ${ip} unblocked after scanner detection`);
    }, 24 * 60 * 60 * 1000);
  }
  
  handlePathTraversal(ip, url) {
    const attack = {
      type: 'PATH_TRAVERSAL',
      ip: ip,
      severity: 'CRITICAL',
      timestamp: new Date().toISOString(),
      details: {
        url: url,
        attemptCount: this.scanAttempts.get(ip)?.attempts.length || 0
      }
    };
    
    this.blockedIPs.add(ip);
    this.logAttack(attack);
    this.emit('path-traversal', attack);
  }
  
  cleanOldData() {
    const now = Date.now();
    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    
    for (const [ip, data] of this.scanAttempts) {
      if (data.lastSeen < oneDayAgo) {
        this.scanAttempts.delete(ip);
      }
    }
  }
  
  logAttack(attack) {
    const logPath = path.join(__dirname, '../logs/alerts.log');
    fs.appendFileSync(logPath, JSON.stringify(attack) + '\n');
    
    // Also save to attacks.json
    const attacksPath = path.join(__dirname, '../logs/attacks.json');
    let attacks = [];
    
    if (fs.existsSync(attacksPath)) {
      try {
        const data = fs.readFileSync(attacksPath, 'utf8');
        attacks = JSON.parse(data);
      } catch (error) {
        console.error('Failed to read attacks.json:', error);
      }
    }
    
    attacks.push(attack);
    
    if (attacks.length > 10000) {
      attacks = attacks.slice(-10000);
    }
    
    fs.writeFileSync(attacksPath, JSON.stringify(attacks, null, 2));
  }
  
  isIPBlocked(ip) {
    return this.blockedIPs.has(ip);
  }
  
  unblockIP(ip) {
    this.blockedIPs.delete(ip);
  }
  
  getStats() {
    return {
      activeScanners: this.scanAttempts.size,
      blockedIPs: this.blockedIPs.size,
      recentScans: Array.from(this.scanAttempts.entries())
        .map(([ip, data]) => ({
          ip,
          attemptCount: data.attempts.length,
          uniquePaths: data.paths.size,
          lastSeen: new Date(data.lastSeen).toISOString()
        }))
        .sort((a, b) => b.attemptCount - a.attemptCount)
        .slice(0, 10)
    };
  }
}

module.exports = new ScannerDetector();