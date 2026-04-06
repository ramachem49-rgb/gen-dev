const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

class DatabaseEncryption {
  constructor() {
    this.keyPath = path.join(__dirname, '../../security/keys/database.key');
    this.key = fs.readFileSync(this.keyPath, 'utf8').trim();
  }

  // Encrypt database backup
  encryptBackup(backupPath, outputPath) {
    return new Promise((resolve, reject) => {
      const iv = crypto.randomBytes(16);
      const key = Buffer.from(this.key, 'hex');
      
      const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
      
      const input = fs.createReadStream(backupPath);
      const output = fs.createWriteStream(outputPath);
      
      // Write IV at the beginning of the file
      output.write(iv);
      
      input
        .pipe(cipher)
        .pipe(output)
        .on('finish', () => {
          // Write auth tag at the end
          const authTag = cipher.getAuthTag();
          output.write(authTag);
          resolve(outputPath);
        })
        .on('error', reject);
    });
  }

  // Decrypt database backup
  decryptBackup(encryptedPath, outputPath) {
    return new Promise((resolve, reject) => {
      const input = fs.createReadStream(encryptedPath);
      const output = fs.createWriteStream(outputPath);
      
      let iv = Buffer.alloc(16);
      let authTag = Buffer.alloc(16);
      let encryptedData = Buffer.alloc(0);
      
      input.on('data', (chunk) => {
        if (iv.length > 0) {
          // Read IV first
          const toRead = Math.min(chunk.length, iv.length);
          chunk.copy(iv, 16 - iv.length, 0, toRead);
          iv = iv.slice(toRead);
          chunk = chunk.slice(toRead);
        }
        
        if (iv.length === 0 && authTag.length > 0) {
          // Read auth tag at the end
          if (chunk.length >= authTag.length) {
            authTag = chunk.slice(-16);
            encryptedData = Buffer.concat([encryptedData, chunk.slice(0, -16)]);
            authTag = Buffer.alloc(0);
          } else {
            encryptedData = Buffer.concat([encryptedData, chunk]);
          }
        } else {
          encryptedData = Buffer.concat([encryptedData, chunk]);
        }
      });
      
      input.on('end', () => {
        const key = Buffer.from(this.key, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag(authTag);
        
        const decrypted = Buffer.concat([
          decipher.update(encryptedData),
          decipher.final()
        ]);
        
        fs.writeFileSync(outputPath, decrypted);
        resolve(outputPath);
      });
      
      input.on('error', reject);
    });
  }

  // Compress and encrypt
  backupAndEncrypt(dbPath) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(__dirname, '../backups', `backup-${timestamp}.gz`);
    const encryptedFile = path.join(__dirname, '../backups', `backup-${timestamp}.enc`);
    
    return new Promise((resolve, reject) => {
      // Compress first
      const gzip = zlib.createGzip();
      const input = fs.createReadStream(dbPath);
      const output = fs.createWriteStream(backupFile);
      
      input
        .pipe(gzip)
        .pipe(output)
        .on('finish', () => {
          // Then encrypt
          this.encryptBackup(backupFile, encryptedFile)
            .then(() => {
              // Remove the unencrypted backup
              fs.unlinkSync(backupFile);
              resolve(encryptedFile);
            })
            .catch(reject);
        })
        .on('error', reject);
    });
  }
}

module.exports = new DatabaseEncryption();