const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class NetworkProtection {
  constructor() {
    this.setupFirewallRules();
    this.monitorNetworkTraffic();
  }

  // Setup iptables rules
  setupFirewallRules() {
    const rules = [
      // Block common scanning tools
      'iptables -A INPUT -p tcp --tcp-flags FIN,SYN,RST,ACK SYN -m limit --limit 1/s -j ACCEPT',
      'iptables -A INPUT -p tcp --tcp-flags FIN,SYN,RST,ACK SYN -j DROP',
      
      // Block nmap XMAS scans
      'iptables -A INPUT -p tcp --tcp-flags FIN,SYN,RST,PSH,ACK,URG FIN,PSH,URG -j DROP',
      
      // Block nmap NULL scans
      'iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP',
      
      // Block port scans
      'iptables -A INPUT -m recent --name portscan --rcheck --seconds 60 -j DROP',
      'iptables -A FORWARD -m recent --name portscan --rcheck --seconds 60 -j DROP',
      
      // Rate limit SSH connections
      'iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set',
      'iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 4 -j DROP',
      
      // Block invalid packets
      'iptables -A INPUT -m state --state INVALID -j DROP',
      'iptables -A FORWARD -m state --state INVALID -j DROP',
      
      // Block fragmented packets
      'iptables -A INPUT -f -j DROP',
      
      // Block packets with bogus TCP flags
      'iptables -A INPUT -p tcp --tcp-flags FIN,SYN,RST,PSH,ACK,URG NONE -j DROP',
      'iptables -A INPUT -p tcp --tcp-flags FIN,SYN FIN,SYN -j DROP',
      'iptables -A INPUT -p tcp --tcp-flags SYN,RST SYN,RST -j DROP',
      'iptables -A INPUT -p tcp --tcp-flags FIN,RST FIN,RST -j DROP',
      'iptables -A INPUT -p tcp --tcp-flags ACK,FIN FIN -j DROP',
      'iptables -A INPUT -p tcp --tcp-flags ACK,URG URG -j DROP',
      
      // Limit ICMP (ping)
      'iptables -A INPUT -p icmp -m limit --limit 1/second -j ACCEPT',
      'iptables -A INPUT -p icmp -j DROP',
      
      // Block suspicious User-Agents
      'iptables -A INPUT -m string --string "Nmap" --algo bm -j DROP',
      'iptables -A INPUT -m string --string "sqlmap" --algo bm -j DROP',
      'iptables -A INPUT -m string --string "Nikto" --algo bm -j DROP',
      'iptables -A INPUT -m string --string "w3af" --algo bm -j DROP',
    ];
    
    rules.forEach(rule => {
      exec(rule, (error) => {
        if (error) {
          console.error(`Failed to apply rule: ${rule}`, error);
        }
      });
    });
    
    console.log('Firewall rules applied');
  }

  // Monitor network traffic for scanning patterns
  monitorNetworkTraffic() {
    // Monitor for sequential port scanning
    exec('tcpdump -i any -n "tcp[tcpflags] & (tcp-syn) != 0" -l', (error, stdout) => {
      const scanDetector = new Map();
      
      stdout.on('data', (line) => {
        const match = line.match(/(\d+\.\d+\.\d+\.\d+).*?(\d+)/);
        if (match) {
          const ip = match[1];
          const port = parseInt(match[2]);
          
          if (!scanDetector.has(ip)) {
            scanDetector.set(ip, {
              ports: [],
              lastPort: 0
            });
          }
          
          const data = scanDetector.get(ip);
          data.ports.push(port);
          
          // Check for sequential scanning
          if (port === data.lastPort + 1) {
            data.sequentialCount = (data.sequentialCount || 0) + 1;
            
            if (data.sequentialCount > 10) {
              this.blockScanningIP(ip, 'Sequential port scan detected');
            }
          } else {
            data.sequentialCount = 0;
          }
          
          data.lastPort = port;
          
          // Check for common port ranges
          const commonPorts = [21,22,23,25,80,443,3306,5432,27017,6379];
          if (commonPorts.includes(port)) {
            data.commonHits = (data.commonHits || 0) + 1;
            
            if (data.commonHits > 5) {
              this.blockScanningIP(ip, 'Common service scan detected');
            }
          }
        }
      });
    });
  }

  // Block scanning IP
  blockScanningIP(ip, reason) {
    exec(`iptables -A INPUT -s ${ip} -j DROP`, (error) => {
      if (!error) {
        console.log(`Blocked ${ip}: ${reason}`);
        
        // Log the block
        fs.appendFileSync(
          path.join(__dirname, '../logs/blocked_ips.log'),
          `${new Date().toISOString()} - ${ip} - ${reason}\n`
        );
        
        // Send alert
        if (global.alertSystem) {
          global.alertSystem.sendDiscordAlert(
            `🚫 **IP Blocked**\nIP: ${ip}\nReason: ${reason}`,
            'warning'
          );
        }
      }
    });
  }

  // Setup VPN requirement
  setupVPNRequirement() {
    // Only allow connections from VPN subnet
    const vpnSubnet = '10.8.0.0/24';
    
    exec(`iptables -A INPUT ! -s ${vpnSubnet} -p tcp --dport ${databasePortRandomizer.getMongoPort()} -j DROP`);
    exec(`iptables -A INPUT ! -s ${vpnSubnet} -p tcp --dport ${databasePortRandomizer.getRedisPort()} -j DROP`);
    
    console.log('VPN requirement enabled for database access');
  }

  // Setup geographic restrictions (optional)
  setupGeoRestriction(allowedCountries = ['KH', 'US', 'SG']) {
    // Requires iptables geoip module
    const countries = allowedCountries.join(',');
    
    exec(`iptables -A INPUT -m geoip --src-cc ${countries} -j ACCEPT`);
    exec(`iptables -A INPUT -p tcp --dport ${databasePortRandomizer.getMongoPort()} -j DROP`);
    
    console.log(`Geo restriction enabled: only ${allowedCountries.join(', ')} allowed`);
  }

  // Detect and block DDoS attempts
  detectDDoS() {
    const threshold = 1000; // connections per minute
    const connectionTracker = new Map();
    
    setInterval(() => {
      const now = Date.now();
      
      for (const [ip, data] of connectionTracker) {
        if (now - data.startTime > 60000) {
          connectionTracker.delete(ip);
          continue;
        }
        
        if (data.count > threshold) {
          this.blockScanningIP(ip, `DDoS attack detected: ${data.count} connections in 1 minute`);
        }
      }
    }, 10000);
    
    // Track connections
    exec('ss -tn state established | tail -n +2 | awk \'{print $5}\' | cut -d: -f1 | sort | uniq -c', (error, stdout) => {
      const lines = stdout.split('\n');
      lines.forEach(line => {
        const match = line.match(/\s*(\d+)\s+(.+)/);
        if (match) {
          const count = parseInt(match[1]);
          const ip = match[2];
          
          if (!connectionTracker.has(ip)) {
            connectionTracker.set(ip, {
              count,
              startTime: Date.now()
            });
          } else {
            const data = connectionTracker.get(ip);
            data.count = count;
          }
        }
      });
    });
  }
}

module.exports = new NetworkProtection();