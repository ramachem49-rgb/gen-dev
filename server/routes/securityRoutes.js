const express = require('express');
const router = express.Router();
const cloneDetector = require('../middleware/cloneDetector');
const databaseAntiClone = require('../security/databaseAntiClone');
const sourceCodeProtection = require('../middleware/sourceCodeProtection');

// Endpoint សម្រាប់ beacon
router.post('/security/clone-detected', (req, res) => {
  const { cloneDomain, originalDomain, pageId } = req.body;
  
  cloneDetector.handleCloneDetection(cloneDomain, '/');
  
  res.json({ success: true });
});

// Endpoint សម្រាប់ dynamic module loading
router.get('/module/:name', (req, res) => {
  const moduleName = req.params.name;
  const modulePath = path.join(__dirname, `../../client/src/modules/${moduleName}.js`);
  
  try {
    let code = fs.readFileSync(modulePath, 'utf8');
    
    // Obfuscate code
    code = sourceCodeProtection.obfuscateJavaScript(code, moduleName);
    
    // Encrypt
    const encrypted = Buffer.from(code).toString('base64');
    
    res.send(encrypted);
  } catch (error) {
    res.status(404).send('Module not found');
  }
});

// Endpoint សម្រាប់ពិនិត្យការ clone database
router.get('/security/verify-database', (req, res) => {
  const connectionString = req.query.conn;
  
  if (!connectionString) {
    return res.status(400).json({ error: 'No connection string' });
  }
  
  const isValid = databaseAntiClone.verifyConnection(connectionString);
  
  if (!isValid) {
    databaseAntiClone.detectCloneAttempt('invalid_connection');
  }
  
  res.json({ valid: isValid });
});

// Endpoint សម្រាប់រាយការណ៍ការ clone
router.post('/security/report-clone', async (req, res) => {
  const { domain, reason, evidence } = req.body;
  
  // កត់ត្រា
  fs.appendFileSync(
    path.join(__dirname, '../logs/reported_clones.log'),
    JSON.stringify({
      timestamp: new Date().toISOString(),
      domain,
      reason,
      evidence,
      reporter: req.ip
    }) + '\n'
  );
  
  // ផ្ញើ DMCA takedown
  await cloneDetector.sendTakedownRequest(domain);
  
  res.json({ 
    success: true,
    message: 'Clone reported and takedown requested'
  });
});

module.exports = router;