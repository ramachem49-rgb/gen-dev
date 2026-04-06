const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

class SecurityConfig {
  constructor() {
    this.encryptionKey = this.loadOrCreateEncryptionKey();
  }

  loadOrCreateEncryptionKey() {
    const keyPath = path.join(__dirname, '../../security/keys/database.key');
    
    try {
      // Try to load existing key
      return fs.readFileSync(keyPath, 'utf8').trim();
    } catch (error) {
      // Create new encryption key if doesn't exist
      const newKey = crypto.randomBytes(32).toString('hex');
      fs.writeFileSync(keyPath, newKey, { mode: 0o600 }); // Read/write for owner only
      return newKey;
    }
  }

  // Encrypt sensitive data
  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(this.encryptionKey, 'hex'), iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  // Decrypt sensitive data
  decrypt(encryptedData) {
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      Buffer.from(this.encryptionKey, 'hex'),
      Buffer.from(encryptedData.iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
    
    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }

  // Hash data for integrity
  hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  // Generate secure random tokens
  generateToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }
}

module.exports = new SecurityConfig();