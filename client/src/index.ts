export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // កំណត់ MIME type ត្រឹមត្រូវ
    const getContentType = (path: string): string => {
      if (path.endsWith('.tsx') || path.endsWith('.ts')) return 'application/javascript';
      if (path.endsWith('.js')) return 'application/javascript';
      if (path.endsWith('.mjs')) return 'application/javascript';
      if (path.endsWith('.css')) return 'text/css';
      if (path.endsWith('.json')) return 'application/json';
      if (path.endsWith('.png')) return 'image/png';
      if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
      if (path.endsWith('.svg')) return 'image/svg+xml';
      if (path.endsWith('.html')) return 'text/html';
      return 'text/plain';
    };
    
    // សម្រាប់ development - អនុញ្ញាតឱ្យចូលដល់ src/ folder
    if (path.startsWith('/src/')) {
      try {
        const filePath = `.${path}`;
        const file = await fetch(filePath);
        const contentType = getContentType(path);
        
        return new Response(file.body, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(`File not found: ${path}`, { status: 404 });
      }
    }
    
    // សម្រាប់ production - បម្រើឯកសារពី dist folder
    try {
      let filePath = path === '/' ? '/index.html' : path;
      const file = await fetch(`./dist${filePath}`);
      
      if (file.status === 404 && !filePath.includes('.')) {
        // SPA fallback - បញ្ជូនទៅ index.html
        const indexFile = await fetch('./dist/index.html');
        return new Response(indexFile.body, {
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache'
          }
        });
      }
      
      const contentType = getContentType(filePath);
      return new Response(file.body, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': filePath.includes('.') ? 'public, max-age=31536000' : 'no-cache'
        }
      });
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};