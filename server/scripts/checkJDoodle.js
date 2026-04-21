const https = require('https');
// Test JDoodle free API
const body = JSON.stringify({
  script: 'package main\nimport "fmt"\nfunc main(){fmt.Println("Hello Go!")}',
  language: 'go', versionIndex: '3',
  clientId: 'test', clientSecret: 'test'
});
const req = https.request({
  hostname: 'api.jdoodle.com', path: '/v1/execute', method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
}, res => {
  let d = ''; res.on('data', c => d += c);
  res.on('end', () => console.log(res.statusCode, d.slice(0, 300)));
});
req.on('error', e => console.log('Error:', e.message));
req.write(body); req.end();
