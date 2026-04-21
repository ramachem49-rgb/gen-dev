const http = require('http');
http.get('http://localhost:5000/api/hierarchical-lessons?courseId=c-prog', (r) => {
  let d = '';
  r.on('data', (c) => d += c);
  r.on('end', () => {
    const j = JSON.parse(d);
    console.log('Total:', j.data.length);
    j.data.slice(0, 6).forEach((x) => {
      console.log(`_id: ${x._id} | parentId: ${JSON.stringify(x.parentId)} | title: ${x.title}`);
    });
  });
});
