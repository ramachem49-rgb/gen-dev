const https = require('https');
const body = JSON.stringify({
  files: [{ name: 'main.go', content: 'package main\nimport "fmt"\nfunc main(){fmt.Println("Hello Go!")}' }]
});
const req = https.request({
  hostname: 'glot.io', path: '/api/run/go/latest', method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
}, res => {
  let d = ''; res.on('data', c => d += c);
  res.on('end', () => console.log(res.statusCode, d.slice(0, 300)));
});
req.on('error', e => console.log('Error:', e.message));
req.write(body); req.end();
