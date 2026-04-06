const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process');

class DatabaseHider {
  constructor() {
    this.hideTechniques = [
      'portKnocking',
      'stealthMode',
      'fakeErrors',
      'rateLimiting',
      'ipWhitelisting',
      'serviceObfuscation'
    ];
    
    this.knockSequence = this.generateKnockSequence();
    this.authorizedIPs = new Set();
    this.pendingKnocks = new Map();
    
    this.setupPortKnocking();
  }

  // Generate random port knocking sequence
  generateKnockSequence() {
    const sequence = [];
    for (let i = 0; i < 5; i++) {
      sequence.push(Math.floor(Math.random() * 1000) + 10000); // Ports 10000-11000
    }
    return sequence;
  }

  // Setup port knocking mechanism
  setupPortKnocking() {
    console.log('Port knocking sequence:', this.knockSequence);
    
    // Create servers for each knock port
    this.knockSequence.forEach((port, index) => {
      const net = require('net');
      const server = net.createServer((socket) => {
        const clientIP = socket.remoteAddress;
        
        // Close immediately - just log the knock
        socket.destroy();
        
        // Track the knock
        this.recordKnock(clientIP, port, index);
      });
      
      server.listen(port, '0.0.0.0', () => {
        console.log(`Knock port ${port} listening`);
      });
      
      server.on('error', (err) => {
        // Ignore errors
      });
    });
  }

  // Record a knock attempt
  recordKnock(ip, port, index) {
    if (!this.pendingKnocks.has(ip)) {
      this.pendingKnocks.set(ip, {
        knocks: [],
        lastKnock: Date.now()
      });
    }
    
    const data = this.pendingKnocks.get(ip);
    
    // Check if this is the next expected knock
    if (index === data.knocks.length) {
      data.knocks.push(port);
      data.lastKnock = Date.now();
      
      // Check if sequence is complete
      if (data.knocks.length === this.knockSequence.length) {
        this.authorizeIP(ip);
      }
    } else {
      // Wrong sequence, reset
      data.knocks = [];
    }
    
    // Clean up old knock attempts
    setTimeout(() => {
      if (this.pendingKnocks.has(ip)) {
        const oldData = this.pendingKnocks.get(ip);
        if (Date.now() - oldData.lastKnock > 60000) { // 1 minute timeout
          this.pendingKnocks.delete(ip);
        }
      }
    }, 60000);
  }

  // Authorize an IP after successful knocking
  authorizeIP(ip) {
    this.authorizedIPs.add(ip);
    this.pendingKnocks.delete(ip);
    
    // Add to iptables whitelist
    try {
      exec(`iptables -A INPUT -s ${ip} -p tcp --dport ${databasePortRandomizer.getMongoPort()} -j ACCEPT`);
      exec(`iptables -A INPUT -s ${ip} -p tcp --dport ${databasePortRandomizer.getRedisPort()} -j ACCEPT`);
    } catch (error) {
      // Ignore
    }
    
    console.log(`IP ${ip} authorized for database access`);
    
    // Log authorization
    this.logAuthorization(ip);
  }

  // Check if IP is authorized
  isAuthorized(ip) {
    return this.authorizedIPs.has(ip);
  }

  // Log authorization
  logAuthorization(ip) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      ip,
      action: 'AUTHORIZED',
      method: 'port_knocking'
    };
    
    fs.appendFileSync(
      path.join(__dirname, '../logs/authorizations.log'),
      JSON.stringify(logEntry) + '\n'
    );
  }

  // Stealth mode - hide database services
  enableStealthMode() {
    // Remove database from common service lists
    const serviceFiles = [
      '/etc/services',
      '/etc/protocols'
    ];
    
    serviceFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          // Remove or comment out database entries
          content = content.replace(/^mongod\s+\d+/gm, '# $&');
          content = content.replace(/^redis\s+\d+/gm, '# $&');
          fs.writeFileSync(file, content);
        } catch (error) {
          console.error(`Failed to modify ${file}:`, error);
        }
      }
    });
  }

  // Fake error messages to confuse scanners
  getFakeErrorResponse(service) {
    const errors = {
      mongodb: [
        'MongoDB server not found',
        'Connection refused: no route to host',
        'MongoDB is not running on this server',
        'Authentication failed: unknown database',
        'SSL handshake failed: self signed certificate'
      ],
      redis: [
        'Redis server is not configured',
        'Connection refused: Redis is disabled',
        'NOAUTH Authentication required: invalid credentials',
        'ERR Client sent AUTH, but no password is set',
        'Redis is running in protected mode'
      ]
    };
    
    const errorList = errors[service] || errors.mongodb;
    return errorList[Math.floor(Math.random() * errorList.length)];
  }

  // Rate limit connection attempts
  checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const maxAttempts = 5;
    
    if (!this.rateLimits) {
      this.rateLimits = new Map();
    }
    
    if (!this.rateLimits.has(ip)) {
      this.rateLimits.set(ip, {
        attempts: 1,
        firstAttempt: now
      });
      return true;
    }
    
    const data = this.rateLimits.get(ip);
    
    // Reset if outside window
    if (now - data.firstAttempt > windowMs) {
      data.attempts = 1;
      data.firstAttempt = now;
      return true;
    }
    
    data.attempts++;
    
    if (data.attempts > maxAttempts) {
      return false;
    }
    
    return true;
  }

  // IP whitelist for database access
  setupIPWhitelist(allowedIPs = []) {
    allowedIPs.forEach(ip => {
      this.authorizedIPs.add(ip);
    });
    
    // Add to iptables
    allowedIPs.forEach(ip => {
      try {
        exec(`iptables -A INPUT -s ${ip} -j ACCEPT`);
      } catch (error) {
        // Ignore
      }
    });
    
    // Drop all other connections to database ports
    try {
      exec(`iptables -A INPUT -p tcp --dport ${databasePortRandomizer.getMongoPort()} -j DROP`);
      exec(`iptables -A INPUT -p tcp --dport ${databasePortRandomizer.getRedisPort()} -j DROP`);
    } catch (error) {
      // Ignore
    }
  }

  // Service obfuscation - rename database services
  obfuscateServices() {
    const serviceName = crypto.randomBytes(8).toString('hex');
    
    // Rename MongoDB service
    try {
      exec(`systemctl stop mongod`);
      exec(`mv /etc/systemd/system/mongod.service /etc/systemd/system/${serviceName}.service`);
      exec(`sed -i 's/mongod/${serviceName}/g' /etc/systemd/system/${serviceName}.service`);
      exec(`systemctl daemon-reload`);
      exec(`systemctl start ${serviceName}`);
    } catch (error) {
      console.error('Failed to obfuscate MongoDB service:', error);
    }
    
    // Rename Redis service similarly
    try {
      exec(`systemctl stop redis`);
      exec(`mv /etc/systemd/system/redis.service /etc/systemd/system/${serviceName}-cache.service`);
      exec(`sed -i 's/redis/${serviceName}-cache/g' /etc/systemd/system/${serviceName}-cache.service`);
      exec(`systemctl daemon-reload`);
      exec(`systemctl start ${serviceName}-cache`);
    } catch (error) {
      console.error('Failed to obfuscate Redis service:', error);
    }
    
    console.log(`Database services obfuscated as: ${serviceName}`);
  }
}

module.exports = new DatabaseHider();