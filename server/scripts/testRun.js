const http = require('http');

function test(lang, code) {
  return new Promise(resolve => {
    const body = JSON.stringify({ lang, code });
    const req = http.request({
      hostname: 'localhost', port: 5000, path: '/api/run',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        console.log(`[${lang}] Status: ${res.statusCode}`);
        const j = JSON.parse(d);
        if (j.stdout) console.log('  stdout:', j.stdout.trim());
        if (j.stderr) console.log('  stderr:', j.stderr.trim());
        if (j.error)  console.log('  error:', j.error);
        resolve();
      });
    });
    req.on('error', e => { console.log(`[${lang}] Error:`, e.message); resolve(); });
    req.write(body); req.end();
  });
}

async function main() {
  await test('go',     'package main\nimport "fmt"\nfunc main(){fmt.Println("Hello Go!")}');
  await test('python', 'print("Hello Python!")');
  await test('c',      '#include<stdio.h>\nint main(){printf("Hello C!\\n");return 0;}');
  await test('php',    '<?php echo "Hello PHP!\\n";');
  await test('ruby',   'puts "Hello Ruby!"');
  await test('bash',   'echo "Hello Bash!"');
}
main();
