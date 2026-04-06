const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const encrypt = require('./encrypt');

class DatabaseBackup {
  constructor() {
    this.backupDir = path.join(__dirname, '../backups');
    this.mongoDataDir = path.join(__dirname, '../mongodb/data');
    
    // Create backup directory if it doesn't exist
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true, mode: 0o700 });
    }
  }

  // Backup MongoDB
  backupMongoDB() {
    return new Promise((resolve, reject) => {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(this.backupDir, `mongodb-${timestamp}`);
      
      // Use mongodump
      const cmd = `mongodump --out ${backupPath}`;
      
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        
        // Create tar.gz
        const tarPath = path.join(this.backupDir, `mongodb-${timestamp}.tar.gz`);
        exec(`tar -czf ${tarPath} -C ${this.backupDir} mongodb-${timestamp}`, (tarError) => {
          if (tarError) {
            reject(tarError);
            return;
          }
          
          // Remove the uncompressed backup
          exec(`rm -rf ${backupPath}`);
          
          // Encrypt the backup
          encrypt.encryptBackup(tarPath, `${tarPath}.enc`)
            .then((encryptedPath) => {
              // Remove unencrypted tar
              fs.unlinkSync(tarPath);
              resolve(encryptedPath);
            })
            .catch(reject);
        });
      });
    });
  }

  // Schedule automatic backups
  scheduleBackups() {
    // Backup every 6 hours
    setInterval(() => {
      this.backupMongoDB()
        .then((backupPath) => {
          console.log(`Backup created: ${backupPath}`);
        })
        .catch((error) => {
          console.error('Backup failed:', error);
        });
    }, 6 * 60 * 60 * 1000);
    
    // Clean up old backups (keep 7 days)
    setInterval(() => {
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      
      fs.readdirSync(this.backupDir).forEach(file => {
        const filePath = path.join(this.backupDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.mtimeMs < sevenDaysAgo) {
          fs.unlinkSync(filePath);
          console.log(`Deleted old backup: ${file}`);
        }
      });
    }, 24 * 60 * 60 * 1000);
  }
}

module.exports = new DatabaseBackup();