const net = require('net');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class PortObfuscation {
  constructor() {
    this.realPorts = {
      mongodb: 27017,
      redis: 6379,
      server: 5000
    };
    
    this.decoys = [];
    this.honeypots = [];
    this.scanDetections = new Map();
    this.blockedIPs = new Map();
    
    this.logPath = path.join(__dirname, '../logs/port_scan.log');
    this.setupDecoyPorts();
    this.setupHoneypots();
    this.monitorPortScans();
  }

  // Setup decoy ports to confuse scanners
  setupDecoyPorts() {
    const decoyPorts = [
      3306,  // Fake MySQL
      5432,  // Fake PostgreSQL
      8080,  // Fake HTTP proxy
      8443,  // Fake HTTPS alternate
      9200,  // Fake Elasticsearch
      9300,  // Fake Elasticsearch
      5672,  // Fake RabbitMQ
      15672, // Fake RabbitMQ management
      61616, // Fake ActiveMQ
      8161,  // Fake ActiveMQ Web
      2181,  // Fake ZooKeeper
      9092,  // Fake Kafka
      50070, // Fake Hadoop
      50075, // Fake Hadoop
      9000,  // Fake PHP-FPM
      9001,  // Fake Supervisor
      11211, // Fake Memcached
      27018, // Fake MongoDB alternate
      27019, // Fake MongoDB alternate
      28017, // Fake MongoDB web
      5001,  // Fake Docker API
      2375,  // Fake Docker Registry
      2376,  // Fake Docker TLS
      3000,  // Fake Node.js app
      1337,  // Fake API
      1338,  // Fake API backup
      4000,  // Fake GraphQL
      4001,  // Fake GraphQL subscriptions
    ];

    decoyPorts.forEach(port => {
      const server = net.createServer((socket) => {
        const clientIP = socket.remoteAddress;
        
        // Log the scan attempt
        this.logScanAttempt(clientIP, port, 'decoy');
        
        // Send fake banner to confuse scanner
        const fakeBanners = {
          3306: 'MySQL server version: 5.7.35',
          5432: 'PostgreSQL 13.3 on x86_64',
          8080: 'Apache Tomcat/9.0.50',
          9200: 'Elasticsearch 7.15.0',
          5672: 'RabbitMQ 3.9.5',
          27018: 'MongoDB 5.0.5',
          5001: 'Docker API version 1.41',
        };
        
        const banner = fakeBanners[port] || 'SSH-2.0-OpenSSH_8.2p1';
        socket.write(banner + '\n');
        
        // Keep connection open to waste scanner's time
        setTimeout(() => {
          socket.destroy();
        }, 30000); // 30 seconds timeout
      });

      server.listen(port, '0.0.0.0', () => {
        console.log(`Decoy port ${port} listening`);
        this.decoys.push(server);
      });

      server.on('error', (err) => {
        // Port might be in use, ignore
      });
    });
  }

  // Setup honeypots to trap attackers
  setupHoneypots() {
    const honeypotPorts = [
      27017, // Main MongoDB port (redirect to honeypot)
      6379,  // Main Redis port (redirect to honeypot)
    ];

    honeypotPorts.forEach(port => {
      const server = net.createServer((socket) => {
        const clientIP = socket.remoteAddress;
        
        // Log the attack
        this.logScanAttempt(clientIP, port, 'honeypot');
        
        // Block the IP immediately
        this.blockIP(clientIP, 'Honeypot triggered');
        
        // Send fake database response
        if (port === 27017) {
          socket.write(this.getFakeMongoResponse());
        } else if (port === 6379) {
          socket.write(this.getFakeRedisResponse());
        }
        
        // Log all commands sent by attacker
        socket.on('data', (data) => {
          this.logHoneypotInteraction(clientIP, port, data.toString());
          
          // Send fake error responses
          socket.write('-ERR authentication failed\r\n');
        });
      });

      server.listen(port, '0.0.0.0', () => {
        console.log(`Honeypot port ${port} listening`);
        this.honeypots.push(server);
      });
    });
  }

  // Fake MongoDB response
  getFakeMongoResponse() {
    const response = {
      ok: 1,
      ismaster: true,
      maxBsonObjectSize: 16777216,
      maxMessageSizeBytes: 48000000,
      maxWriteBatchSize: 100000,
      localTime: new Date().toISOString(),
      logicalSessionTimeoutMinutes: 30,
      connectionId: Math.floor(Math.random() * 1000000),
      minWireVersion: 0,
      maxWireVersion: 13,
      readOnly: false,
      version: '5.0.5',
      versionArray: [5, 0, 5, 0],
    };
    
    return JSON.stringify(response) + '\n';
  }

  // Fake Redis response
  getFakeRedisResponse() {
    return '+OK\r\n' +
           '# Server\r\n' +
           'redis_version:6.2.6\r\n' +
           'redis_mode:standalone\r\n' +
           'os:Linux 5.4.0\r\n' +
           'arch_bits:64\r\n' +
           'multiplexing_api:epoll\r\n' +
           'gcc_version:9.3.0\r\n' +
           'process_id:1234\r\n' +
           'run_id:' + crypto.randomBytes(20).toString('hex') + '\r\n' +
           'tcp_port:6379\r\n' +
           'uptime_in_seconds:999999\r\n' +
           'uptime_in_days:1157\r\n' +
           'hz:10\r\n' +
           'lru_clock:12345678\r\n' +
           'config_file:/etc/redis/redis.conf\r\n';
  }

  // Monitor for port scans
  monitorPortScans() {
    // Track connection attempts to detect scans
    const scanThreshold = 20; // Number of different ports in short time
    const timeWindow = 60000; // 1 minute

    setInterval(() => {
      const now = Date.now();
      
      for (const [ip, data] of this.scanDetections) {
        // Remove old entries
        data.ports = data.ports.filter(p => now - p.timestamp < timeWindow);
        
        // Check if this is a port scan
        if (data.ports.length >= scanThreshold) {
          this.blockIP(ip, 'Port scan detected');
          this.logScanAttempt(ip, 'multiple', 'port_scan');
          
          // Alert security team
          this.sendScanAlert(ip, data.ports);
        }
        
        // Clean up old data
        if (data.ports.length === 0) {
          this.scanDetections.delete(ip);
        }
      }
    }, 10000); // Check every 10 seconds
  }

  // Track port connection attempts
  trackConnection(ip, port) {
    if (!this.scanDetections.has(ip)) {
      this.scanDetections.set(ip, {
        ports: [],
        firstSeen: Date.now()
      });
    }
    
    const data = this.scanDetections.get(ip);
    data.ports.push({
      port,
      timestamp: Date.now()
    });
  }

  // Block malicious IP
  blockIP(ip, reason) {
    const blockDuration = 24 * 60 * 60 * 1000; // 24 hours
    this.blockedIPs.set(ip, {
      blockedUntil: Date.now() + blockDuration,
      reason
    });
    
    // Add to firewall (if running on Linux)
    try {
      const exec = require('child_process').exec;
      exec(`iptables -A INPUT -s ${ip} -j DROP`);
    } catch (error) {
      // Ignore if no iptables
    }
    
    this.logScanAttempt(ip, 'blocked', `IP blocked: ${reason}`);
  }

  // Check if IP is blocked
  isIPBlocked(ip) {
    if (!this.blockedIPs.has(ip)) return false;
    
    const data = this.blockedIPs.get(ip);
    if (Date.now() > data.blockedUntil) {
      this.blockedIPs.delete(ip);
      
      // Remove from firewall
      try {
        const exec = require('child_process').exec;
        exec(`iptables -D INPUT -s ${ip} -j DROP`);
      } catch (error) {
        // Ignore
      }
      
      return false;
    }
    
    return true;
  }

  // Log scan attempts
  logScanAttempt(ip, port, type) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      ip,
      port,
      type,
      userAgent: global.currentUserAgent || 'unknown'
    };
    
    fs.appendFileSync(
      this.logPath,
      JSON.stringify(logEntry) + '\n'
    );
    
    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Port scan detected:', logEntry);
    }
  }

  // Log honeypot interactions
  logHoneypotInteraction(ip, port, command) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      ip,
      port,
      command: command.substring(0, 200), // Truncate long commands
      type: 'honeypot_interaction'
    };
    
    fs.appendFileSync(
      path.join(__dirname, '../logs/honeypot.log'),
      JSON.stringify(logEntry) + '\n'
    );
  }

  // Send alert about port scan
  sendScanAlert(ip, ports) {
    const uniquePorts = [...new Set(ports.map(p => p.port))];
    
    const alert = {
      timestamp: new Date().toISOString(),
      type: 'PORT_SCAN_DETECTED',
      ip,
      portsScanned: uniquePorts,
      count: ports.length,
      duration: '1 minute'
    };
    
    // Send to monitoring system
    if (global.alertSystem) {
      global.alertSystem.sendDiscordAlert(
        `🔍 **Port Scan Detected**\n` +
        `IP: ${ip}\n` +
        `Ports scanned: ${uniquePorts.join(', ')}\n` +
        `Total attempts: ${ports.length}\n` +
        `Action: IP blocked for 24 hours`,
        'warning'
      );
    }
    
    // Store for analysis
    this.storeScanForAnalysis(alert);
  }

  // Store scan for analysis
  storeScanForAnalysis(scan) {
    const scanLog = path.join(__dirname, '../logs/scans.json');
    
    try {
      let scans = [];
      if (fs.existsSync(scanLog)) {
        scans = JSON.parse(fs.readFileSync(scanLog, 'utf8'));
      }
      
      scans.push(scan);
      
      // Keep only last 1000 scans
      if (scans.length > 1000) {
        scans = scans.slice(-1000);
      }
      
      fs.writeFileSync(scanLog, JSON.stringify(scans, null, 2));
    } catch (error) {
      console.error('Failed to store scan:', error);
    }
  }
}

module.exports = new PortObfuscation();