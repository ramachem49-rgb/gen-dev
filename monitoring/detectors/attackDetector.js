const EventEmitter = require('events');
const ddosDetector = require('./ddosDetector');
const scannerDetector = require('./scannerDetector');
const sqlInjectionDetector = require('./sqlInjectionDetector');
const bruteForceDetector = require('./bruteForceDetector');

class AttackDetector extends EventEmitter {
  constructor() {
    super();
    this.attacks = [];
    this.init();
  }
  
  init() {
    // Listen to events from individual detectors
    ddosDetector.on('ddos-detected', (attack) => {
      this.recordAttack(attack);
      this.emit('attack-detected', attack);
    });
    
    ddosDetector.on('ddos-distributed', (attack) => {
      this.recordAttack(attack);
      this.emit('attack-detected', attack);
    });
    
    scannerDetector.on('scanner-detected', (attack) => {
      this.recordAttack(attack);
      this.emit('attack-detected', attack);
    });
    
    scannerDetector.on('path-traversal', (attack) => {
      this.recordAttack(attack);
      this.emit('attack-detected', attack);
    });
    
    sqlInjectionDetector.on('sql-injection-detected', (attack) => {
      this.recordAttack(attack);
      this.emit('attack-detected', attack);
    });
    
    bruteForceDetector.on('brute-force-detected', (attack) => {
      this.recordAttack(attack);
      this.emit('attack-detected', attack);
    });
    
    bruteForceDetector.on('account-locked', (data) => {
      this.recordAttack({
        type: 'ACCOUNT_LOCKED',
        ...data,
        severity: 'MEDIUM',
        timestamp: new Date().toISOString()
      });
    });
    
    console.log('Attack Detector initialized with all sub-detectors');
  }
  
  detectAttack(req, res, next) {
    // Run all detectors
    ddosDetector.detectDDOS(req, res, (err) => {
      if (err) return;
      
      scannerDetector.detectScanner(req, res, (err) => {
        if (err) return;
        
        sqlInjectionDetector.detectSQLInjection(req, res, (err) => {
          if (err) return;
          
          bruteForceDetector.detectBruteForce(req, res, (err) => {
            if (err) return;
            next();
          });
        });
      });
    });
  }
  
  recordAttack(attack) {
    this.attacks.push({
      ...attack,
      recordedAt: new Date().toISOString()
    });
    
    // Keep only last 10,000 attacks
    if (this.attacks.length > 10000) {
      this.attacks = this.attacks.slice(-10000);
    }
  }
  
  updateLoginResult(req, success) {
    const ip = req.ip;
    const email = req.body.email || req.body.username;
    bruteForceDetector.updateAttemptResult(ip, email, success);
  }
  
  isIPBlocked(ip) {
    return ddosDetector.isIPBlocked(ip) ||
           scannerDetector.isIPBlocked(ip) ||
           sqlInjectionDetector.isIPBlocked(ip) ||
           bruteForceDetector.isIPBlocked(ip);
  }
  
  unblockIP(ip) {
    ddosDetector.unblockIP(ip);
    scannerDetector.unblockIP(ip);
    sqlInjectionDetector.unblockIP(ip);
    bruteForceDetector.unblockIP(ip);
  }
  
  unlockAccount(email) {
    bruteForceDetector.unlockAccount(email);
  }
  
  getStats() {
    const ddosStats = ddosDetector.getStats();
    const scannerStats = scannerDetector.getStats();
    const sqlStats = sqlInjectionDetector.getStats();
    const bruteStats = bruteForceDetector.getStats();
    
    return {
      totalAttacks: this.attacks.length,
      attacksByType: {
        ddos: ddosStats.activeIPs > 0 ? 'Active' : 'Inactive',
        scanner: scannerStats.activeScanners,
        sqlInjection: sqlStats.totalAttempts,
        bruteForce: bruteStats.totalAttempts
      },
      blockedIPs: {
        total: ddosStats.blockedIPs + scannerStats.blockedIPs + 
               sqlStats.blockedIPs + bruteStats.blockedIPs,
        ddos: ddosStats.blockedIPs,
        scanner: scannerStats.blockedIPs,
        sql: sqlStats.blockedIPs,
        brute: bruteStats.blockedIPs
      },
      details: {
        ddos: ddosStats,
        scanner: scannerStats,
        sql: sqlStats,
        brute: bruteStats
      },
      lastAttack: this.attacks[this.attacks.length - 1]
    };
  }
  
  getRecentAttacks(limit = 100) {
    return this.attacks.slice(-limit).reverse();
  }
}

module.exports = new AttackDetector();