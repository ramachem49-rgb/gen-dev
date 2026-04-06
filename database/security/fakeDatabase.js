const net = require('net');
const fs = require('fs');
const path = require('path');

class FakeDatabase {
  constructor() {
    this.setupFakeDatabases();
  }

  setupFakeDatabases() {
    // Fake MySQL (port 3306)
    this.createFakeServer(3306, 'mysql', (socket) => {
      socket.write(this.getMySQLGreeting());
      
      socket.on('data', (data) => {
        const command = data.toString('hex');
        
        // Log the command
        this.logFakeCommand(socket.remoteAddress, 'mysql', command);
        
        // Send fake response based on command
        if (command.includes('73656c656374')) { // 'select' in hex
          socket.write(this.getFakeMySQLData());
        } else if (command.includes('696e73657274')) { // 'insert' in hex
          socket.write('Query OK, 1 row affected');
        } else {
          socket.write(this.getMySQLRandomError());
        }
      });
    });

    // Fake PostgreSQL (port 5432)
    this.createFakeServer(5432, 'postgresql', (socket) => {
      socket.write(this.getPostgreSQLGreeting());
      
      socket.on('data', (data) => {
        this.logFakeCommand(socket.remoteAddress, 'postgresql', data.toString());
        
        if (data.toString().includes('SELECT')) {
          socket.write(this.getFakePostgreSQLData());
        } else {
          socket.write('ERROR:  syntax error at or near "hack"');
        }
      });
    });

    // Fake Elasticsearch (port 9200)
    this.createFakeServer(9200, 'elasticsearch', (socket) => {
      socket.write(JSON.stringify({
        name: 'node-1',
        cluster_name: 'production-cluster',
        cluster_uuid: 'fake-uuid-12345',
        version: {
          number: '7.15.0',
          build_flavor: 'default',
          build_type: 'deb',
          build_hash: '1234567890abcdef',
          build_date: '2023-01-01T00:00:00Z',
          build_snapshot: false,
          lucene_version: '8.9.0',
          minimum_wire_compatibility_version: '6.8.0',
          minimum_index_compatibility_version: '6.0.0-beta1'
        },
        tagline: 'You Know, for Search'
      }) + '\n');
      
      socket.on('data', () => {
        socket.write(JSON.stringify({
          error: {
            root_cause: [{
              type: 'security_exception',
              reason: 'action [indices:data/read/search] requires authentication'
            }],
            type: 'security_exception',
            reason: 'action [indices:data/read/search] requires authentication'
          },
          status: 401
        }) + '\n');
      });
    });
  }

  createFakeServer(port, type, handler) {
    const server = net.createServer(handler);
    
    server.listen(port, '0.0.0.0', () => {
      console.log(`Fake ${type} server listening on port ${port}`);
    });
    
    server.on('error', (err) => {
      // Port might be in use, ignore
    });
  }

  getMySQLGreeting() {
    const packet = Buffer.alloc(64);
    packet[0] = 0x0a; // Protocol version
    packet.write('5.7.35-log', 1); // Server version
    packet.writeUInt32LE(123456, 5); // Thread ID
    // Add more MySQL handshake data
    return packet;
  }

  getPostgreSQLGreeting() {
    return 'R' + // Authentication request
           '\x00\x00\x00\x08' + // Length
           '\x00\x00\x00\x03'; // Authentication method (cleartext password)
  }

  getFakeMySQLData() {
    const fakeData = [
      { id: 1, username: 'admin', password_hash: 'Hack rk kdmh Soey ah jmr' },
      { id: 2, username: 'root', password_hash: 'Hack rk kdmh Soey ah jmr' },
      { id: 3, username: 'test', password_hash: 'Hack rk kdmh Soey ah jmr' }
    ];
    
    return JSON.stringify(fakeData);
  }

  getFakePostgreSQLData() {
    return ' id | username  | password_hash \n' +
           '----+-----------+----------------------------------\n' +
           '  1 | admin     | Hack rk kdmh Soey ah jmr\n' +
           '  2 | root      | Hack rk kdmh Soey ah jmr\n' +
           '  3 | test      | Hack rk kdmh Soey ah jmr\n' +
           '(3 rows)\n';
  }

  getMySQLRandomError() {
    const errors = [
      'ERROR 1045 (28000): Access denied for user',
      'ERROR 1130 (HY000): Host is not allowed to connect',
      'ERROR 2003 (HY000): Can\'t connect to MySQL server',
      'ERROR 1044 (42000): Access denied for user to database',
      'ERROR 1142 (42000): SELECT command denied to user'
    ];
    
    return errors[Math.floor(Math.random() * errors.length)] + '\n';
  }

  logFakeCommand(ip, dbType, command) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      ip,
      dbType,
      command: command.substring(0, 200),
      type: 'fake_db_interaction'
    };
    
    fs.appendFileSync(
      path.join(__dirname, '../logs/fake_db.log'),
      JSON.stringify(logEntry) + '\n'
    );
    
    // Alert if many commands from same IP
    if (global.alertSystem) {
      global.alertSystem.sendDiscordAlert(
        `🎣 **Fake Database Interaction**\n` +
        `IP: ${ip}\n` +
        `Database: ${dbType}\n` +
        `Command: ${command.substring(0, 100)}`,
        'info'
      );
    }
  }
}

module.exports = new FakeDatabase();