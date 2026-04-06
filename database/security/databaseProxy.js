const net = require('net');
const tls = require('tls');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class DatabaseProxy {
  constructor() {
    this.proxyPort = 40000; // Single entry point
    this.backendPorts = {
      mongodb: databasePortRandomizer.getMongoPort(),
      redis: databasePortRandomizer.getRedisPort()
    };
    
    this.authenticatedClients = new Map();
    this.setupProxyServer();
  }

  setupProxyServer() {
    const server = net.createServer((clientSocket) => {
      const clientIP = clientSocket.remoteAddress;
      
      // Require authentication first
      this.authenticateClient(clientSocket, (success, service) => {
        if (success) {
          // Connect to real database
          const backendPort = this.backendPorts[service];
          const backendSocket = net.createConnection(backendPort, 'localhost', () => {
            // Pipe data between client and database
            clientSocket.pipe(backendSocket);
            backendSocket.pipe(clientSocket);
            
            // Log connection
            this.logConnection(clientIP, service);
          });
          
          backendSocket.on('error', (err) => {
            clientSocket.write('Database connection failed\r\n');
            clientSocket.destroy();
          });
        } else {
          clientSocket.write('Authentication failed\r\n');
          clientSocket.destroy();
        }
      });
    });

    server.listen(this.proxyPort, '0.0.0.0', () => {
      console.log(`Database proxy listening on port ${this.proxyPort}`);
    });
  }

  authenticateClient(socket, callback) {
    let authData = '';
    
    // Send authentication challenge
    const challenge = crypto.randomBytes(32).toString('hex');
    socket.write(`AUTH CHALLENGE: ${challenge}\r\n`);
    
    socket.once('data', (data) => {
      authData = data.toString().trim();
      
      // Verify authentication
      this.verifyAuth(authData, challenge, (success, service) => {
        callback(success, service);
      });
    });
    
    // Timeout after 5 seconds
    setTimeout(() => {
      callback(false);
    }, 5000);
  }

  verifyAuth(authData, challenge, callback) {
    try {
      const [token, service, signature] = authData.split(':');
      
      // Verify JWT token
      const jwt = require('jsonwebtoken');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Verify signature (HMAC of challenge with user's password hash)
      const expectedSignature = crypto
        .createHmac('sha256', decoded.passwordHash)
        .update(challenge)
        .digest('hex');
      
      if (signature === expectedSignature && ['mongodb', 'redis'].includes(service)) {
        callback(true, service);
      } else {
        callback(false);
      }
    } catch (error) {
      callback(false);
    }
  }

  logConnection(ip, service) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      ip,
      service,
      action: 'PROXY_CONNECT'
    };
    
    fs.appendFileSync(
      path.join(__dirname, '../logs/proxy.log'),
      JSON.stringify(logEntry) + '\n'
    );
  }
}

module.exports = new DatabaseProxy();