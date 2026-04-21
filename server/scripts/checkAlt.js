// Test alternative free code execution APIs
const https = require('https');
const http = require('http');

// Test 1: Piston public instance
function testPiston(host, path, useHttps) {
  return new Promise(resolve => {
    const body = JSON.stringify({
      language: 'python', version: '3.10.0',
      files: [{ name: 'main.py', content: 'print("hello")' }],
      stdin: '', args: []
    });
    const mod = useHttps ? https : http;
    const req = mod.request({
      hostname: host, path, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, res => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        console.log(`[${host}] ${res.statusCode}: ${d.slice(0, 200)}`);
        resolve();
      });
    });
    req.on('error', e => { console.log(`[${host}] ERROR: ${e.message}`); resolve(); });
    req.setTimeout(10000, () => { console.log(`[${host}] TIMEOUT`); req.destroy(); resolve(); });
    req.write(body); req.end();
  });
}

async function main() {
  console.log('Testing Piston instances...');
  await testPiston('emkc.org', '/api/v2/piston/execute', true);
  await testPiston('piston.rodenthole.com', '/api/v2/execute', true);
  // Test local piston if running
  await testPiston('localhost', '/api/v2/piston/execute', false);
}
main();
