const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class DatabasePortRandomizer {
  constructor() {
    this.portRange = {
      min: 49152, // IANA dynamic port range
      max: 65535
    };
    
    this.currentPorts = {
      mongodb: null,
      redis: null
    };
    
    this.configPath = path.join(__dirname, '../config/port_config.json');
    this.loadOrGeneratePorts();
  }

  // Load existing ports or generate new ones
  loadOrGeneratePorts() {
    try {
      if (fs.existsSync(this.configPath)) {
        const config = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
        this.currentPorts = config.ports;
        console.log('Loaded database ports:', this.currentPorts);
      } else {
        this.randomizePorts();
      }
    } catch (error) {
      console.error('Failed to load ports:', error);
      this.randomizePorts();
    }
  }

  // Generate random ports
  randomizePorts() {
    this.currentPorts = {
      mongodb: this.generateRandomPort(),
      redis: this.generateRandomPort()
    };
    
    // Save to config
    fs.writeFileSync(this.configPath, JSON.stringify({
      ports: this.currentPorts,
      generatedAt: new Date().toISOString()
    }, null, 2));
    
    console.log('Generated new database ports:', this.currentPorts);
  }

  // Generate a single random port
  generateRandomPort() {
    const port = Math.floor(Math.random() * 
      (this.portRange.max - this.portRange.min + 1)) + this.portRange.min;
    return port;
  }

  // Get current MongoDB port
  getMongoPort() {
    return this.currentPorts.mongodb;
  }

  // Get current Redis port
  getRedisPort() {
    return this.currentPorts.redis;
  }

  // Update MongoDB config with new port
  updateMongoConfig(port) {
    const mongoConfigPath = path.join(__dirname, '../../database/mongodb/mongod.conf');
    
    try {
      let config = '';
      if (fs.existsSync(mongoConfigPath)) {
        config = fs.readFileSync(mongoConfigPath, 'utf8');
      }
      
      // Update or add port setting
      if (config.includes('port:')) {
        config = config.replace(/port: \d+/, `port: ${port}`);
      } else {
        config += `\nnet:\n  port: ${port}\n`;
      }
      
      fs.writeFileSync(mongoConfigPath, config);
    } catch (error) {
      console.error('Failed to update MongoDB config:', error);
    }
  }

  // Update Redis config with new port
  updateRedisConfig(port) {
    const redisConfigPath = path.join(__dirname, '../../database/redis/redis.conf');
    
    try {
      let config = '';
      if (fs.existsSync(redisConfigPath)) {
        config = fs.readFileSync(redisConfigPath, 'utf8');
      }
      
      // Update port setting
      if (config.includes('port ')) {
        config = config.replace(/port \d+/, `port ${port}`);
      } else {
        config += `\nport ${port}\n`;
      }
      
      fs.writeFileSync(redisConfigPath, config);
    } catch (error) {
      console.error('Failed to update Redis config:', error);
    }
  }

  // Rotate ports (call this periodically)
  rotatePorts() {
    console.log('Rotating database ports...');
    
    // Stop database services
    exec('docker-compose -f docker-compose.database.yml stop', (error) => {
      if (error) {
        console.error('Failed to stop databases:', error);
        return;
      }
      
      // Generate new ports
      const oldPorts = { ...this.currentPorts };
      this.randomizePorts();
      
      // Update configs
      this.updateMongoConfig(this.currentPorts.mongodb);
      this.updateRedisConfig(this.currentPorts.redis);
      
      // Update environment variables
      this.updateEnvFile();
      
      // Restart databases with new ports
      exec('docker-compose -f docker-compose.database.yml start', (startError) => {
        if (startError) {
          console.error('Failed to start databases:', startError);
          return;
        }
        
        console.log('Database ports rotated successfully');
        console.log('Old ports:', oldPorts);
        console.log('New ports:', this.currentPorts);
        
        // Notify security team
        if (global.alertSystem) {
          global.alertSystem.sendDiscordAlert(
            `🔄 **Database Ports Rotated**\n` +
            `Old MongoDB: ${oldPorts.mongodb}\n` +
            `New MongoDB: ${this.currentPorts.mongodb}\n` +
            `Old Redis: ${oldPorts.redis}\n` +
            `New Redis: ${this.currentPorts.redis}`,
            'info'
          );
        }
      });
    });
  }

  // Update .env file with new ports
  updateEnvFile() {
    const envPath = path.join(__dirname, '../../.env');
    
    try {
      let envContent = '';
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
      }
      
      // Update MongoDB URI
      const mongoRegex = /MONGODB_URI=mongodb:\/\/[^:]+:\d+/;
      const newMongoURI = `MONGODB_URI=mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${this.currentPorts.mongodb}/learning_platform?authSource=admin`;
      
      if (envContent.match(mongoRegex)) {
        envContent = envContent.replace(mongoRegex, newMongoURI);
      } else {
        envContent += `\n${newMongoURI}\n`;
      }
      
      // Update Redis port
      const redisRegex = /REDIS_PORT=\d+/;
      if (envContent.match(redisRegex)) {
        envContent = envContent.replace(redisRegex, `REDIS_PORT=${this.currentPorts.redis}`);
      } else {
        envContent += `\nREDIS_PORT=${this.currentPorts.redis}\n`;
      }
      
      fs.writeFileSync(envPath, envContent);
    } catch (error) {
      console.error('Failed to update .env file:', error);
    }
  }

  // Schedule periodic port rotation
  scheduleRotation(intervalDays = 30) {
    const interval = intervalDays * 24 * 60 * 60 * 1000;
    setInterval(() => {
      this.rotatePorts();
    }, interval);
  }
}

module.exports = new DatabasePortRandomizer();