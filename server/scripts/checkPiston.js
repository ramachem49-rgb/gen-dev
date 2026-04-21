const https = require('https');
https.get('https://emkc.org/api/v2/piston/runtimes', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const runtimes = JSON.parse(d);
    const langs = ['go','python','javascript','c','c++','java','rust','ruby','php','bash'];
    langs.forEach(l => {
      const r = runtimes.find(x => x.language === l);
      if (r) console.log(`${l}: ${r.version} (aliases: ${r.aliases?.join(',')||'none'})`);
      else console.log(`${l}: NOT FOUND`);
    });
  });
}).on('error', e => console.error('Error:', e.message));
