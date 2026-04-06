const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const os = require('os');

class DatabaseAntiClone {
  constructor() {
    this.hardwareFingerprint = this.generateHardwareFingerprint();
    this.databaseWatermark = this.generateDatabaseWatermark();
    this.cloneDetections = new Map();
    
    this.setupCloneDetection();
  }

  // បង្កើត hardware fingerprint តែមួយគត់ [citation:3][citation:7]
  generateHardwareFingerprint() {
    const networkInterfaces = os.networkInterfaces();
    const cpus = os.cpus();
    const totalMem = os.totalmem();
    
    // ប្រមូល hardware identifiers
    const components = [
      cpus[0]?.model || 'unknown',
      totalMem.toString(),
      os.hostname(),
      os.platform(),
      os.arch()
    ];
    
    // បន្ថែម MAC addresses
    Object.values(networkInterfaces).forEach(interfaces => {
      interfaces.forEach(iface => {
        if (iface.mac !== '00:00:00:00:00:00') {
          components.push(iface.mac);
        }
      });
    });
    
    // បង្កើត unique fingerprint
    const fingerprint = crypto.createHash('sha256')
      .update(components.join('|'))
      .digest('hex');
    
    return fingerprint;
  }

  // បង្កើត database watermark [citation:2][citation:3]
  generateDatabaseWatermark() {
    return {
      id: crypto.randomBytes(32).toString('hex'),
      createdAt: Date.now(),
      hardwareId: this.hardwareFingerprint,
      nonce: crypto.randomBytes(16).toString('hex'),
      signature: null
    };
  }

  // ចុះហត្ថលេខាលើ watermark
  signWatermark() {
    const data = this.databaseWatermark.id + 
                 this.databaseWatermark.hardwareId + 
                 this.databaseWatermark.nonce;
    
    this.databaseWatermark.signature = crypto
      .createHmac('sha256', process.env.DATABASE_SECRET)
      .update(data)
      .digest('hex');
    
    return this.databaseWatermark;
  }

  // ពិនិត្យ watermark
  verifyWatermark(watermark) {
    if (!watermark || !watermark.signature) {
      return false;
    }
    
    const data = watermark.id + watermark.hardwareId + watermark.nonce;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.DATABASE_SECRET)
      .update(data)
      .digest('hex');
    
    return watermark.signature === expectedSignature;
  }

  // បង្កើត encrypted key សម្រាប់ database [citation:3]
  generateDatabaseKey() {
    // ប្រើ hardware fingerprint ដើម្បីបង្កើត key
    const key = crypto.pbkdf2Sync(
      this.hardwareFingerprint,
      process.env.DATABASE_SALT,
      100000, // iterations
      32,     // key length
      'sha256'
    );
    
    return key.toString('hex');
  }

  // អ៊ិនគ្រីបទិន្នន័យសំខាន់ៗ [citation:5]
  encryptSensitiveData(data) {
    const key = Buffer.from(this.generateDatabaseKey(), 'hex');
    const iv = crypto.randomBytes(16);
    
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    
    let encrypted = cipher.update(
      JSON.stringify(data),
      'utf8',
      'hex'
    );
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  // ឌិគ្រីបទិន្នន័យ
  decryptSensitiveData(encryptedData) {
    try {
      const key = Buffer.from(this.generateDatabaseKey(), 'hex');
      const iv = Buffer.from(encryptedData.iv, 'hex');
      const authTag = Buffer.from(encryptedData.authTag, 'hex');
      
      const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
      decipher.setAuthTag(authTag);
      
      let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      
      return JSON.parse(decrypted);
    } catch (error) {
      // បរាជ័យក្នុងការឌិគ្រីប - អាចជាការ clone
      this.detectCloneAttempt('decryption_failure', error);
      return null;
    }
  }

  // ពិនិត្យការ clone database [citation:7]
  async detectCloneAttempt(type, error) {
    const detection = {
      timestamp: Date.now(),
      type,
      hardwareId: this.hardwareFingerprint,
      error: error?.message || 'unknown'
    };
    
    // កត់ត្រា
    fs.appendFileSync(
      path.join(__dirname, '../logs/clone_attempts.log'),
      JSON.stringify(detection) + '\n'
    );
    
    // ប្រមូលផ្តុំការព្យាយាមពី hardware ដូចគ្នា
    if (!this.cloneDetections.has(this.hardwareFingerprint)) {
      this.cloneDetections.set(this.hardwareFingerprint, {
        attempts: [],
        firstSeen: Date.now()
      });
    }
    
    const data = this.cloneDetections.get(this.hardwareFingerprint);
    data.attempts.push(detection);
    
    // បើមានការព្យាយាមច្រើន ប្រហែលជាការ clone
    if (data.attempts.length > 3) {
      this.handleCloneDetection();
    }
    
    // សម្អាតការកត់ត្រាចាស់
    const oneDayAgo = Date.now() - 86400000;
    if (data.firstSeen < oneDayAgo) {
      this.cloneDetections.delete(this.hardwareFingerprint);
    }
  }

  // ដោះស្រាយពេលឃើញការ clone database [citation:7]
  handleCloneDetection() {
    console.error('🚨 Database clone detected!');
    
    // កត់ត្រាការ clone
    const cloneEvent = {
      timestamp: new Date().toISOString(),
      hardwareId: this.hardwareFingerprint,
      action: 'database_clone_detected'
    };
    
    fs.appendFileSync(
      path.join(__dirname, '../logs/clone_events.log'),
      JSON.stringify(cloneEvent) + '\n'
    );
    
    // ផ្ញើ alert
    if (global.alertSystem) {
      global.alertSystem.sendDiscordAlert(
        `⚠️ **Database Clone Detected**\n` +
        `Hardware ID: ${this.hardwareFingerprint.substring(0, 16)}...\n` +
        `Action: Database access disabled`,
        'critical'
      );
    }
    
    // បិទការចូលប្រើ database
    this.disableDatabaseAccess();
  }

  // បិទការចូលប្រើ database
  disableDatabaseAccess() {
    // លុប connection pool
    if (global.dbConnection) {
      global.dbConnection.close();
    }
    
    // ប្តូរ password database
    // នេះគួរតែធ្វើតាមរយៈ MongoDB admin
    console.log('Database access disabled due to clone detection');
  }

  // បង្កើតការតភ្ជាប់ដោយសុវត្ថិភាព [citation:7]
  createSecureConnection() {
    // ពិនិត្យ hardware fingerprint
    const currentFingerprint = this.generateHardwareFingerprint();
    
    if (currentFingerprint !== this.hardwareFingerprint) {
      // Hardware បានផ្លាស់ប្តូរ - អាចជាការ clone
      this.detectCloneAttempt('hardware_mismatch');
      return null;
    }
    
    // បង្កើត connection string ជាមួយ watermark
    const watermark = this.signWatermark();
    const connectionString = process.env.MONGODB_URI + 
      `?watermark=${encodeURIComponent(JSON.stringify(watermark))}`;
    
    return connectionString;
  }

  // ពិនិត្យ connection watermark [citation:7]
  verifyConnection(connectionString) {
    try {
      const url = new URL(connectionString);
      const watermarkParam = url.searchParams.get('watermark');
      
      if (!watermarkParam) {
        return false;
      }
      
      const watermark = JSON.parse(decodeURIComponent(watermarkParam));
      return this.verifyWatermark(watermark);
    } catch (error) {
      return false;
    }
  }

  // បង្កើត database decoy [citation:2]
  createDatabaseDecoy() {
    // បង្កើត fake database ដើម្បីបំភាន់
    const decoyData = {
      users: [
        { username: 'admin', password_hash: 'fake_hash_1' },
        { username: 'root', password_hash: 'fake_hash_2' }
      ],
      config: {
        database_version: '5.0.5',
        replication: { enabled: true, role: 'primary' }
      },
      watermark: this.databaseWatermark
    };
    
    return decoyData;
  }
}

module.exports = new DatabaseAntiClone();