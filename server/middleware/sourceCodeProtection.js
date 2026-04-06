const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const UglifyJS = require('uglify-js');
const CleanCSS = require('clean-css');

class SourceCodeProtection {
  constructor() {
    this.fileHashes = new Map();
    this.sourceMaps = new Map();
    this.obfuscationKeys = new Map();
    
    this.loadFileHashes();
    this.setupObfuscation();
  }

  // ផ្ទុក file hashes
  loadFileHashes() {
    const clientPath = path.join(__dirname, '../../client/src');
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || 
                   file.endsWith('.ts') || file.endsWith('.tsx')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const hash = crypto.createHash('sha256').update(content).digest('hex');
          this.fileHashes.set(fullPath, hash);
        }
      });
    };
    
    walkDir(clientPath);
  }

  // បង្កើតការ obfuscation
  setupObfuscation() {
    // បង្កើត key សម្រាប់ obfuscation នីមួយៗ
    const key = crypto.randomBytes(32).toString('hex');
    this.obfuscationKeys.set('default', key);
  }

  // Obfuscate JavaScript code [citation:6]
  obfuscateJavaScript(code, filename) {
    // ប្រើ UglifyJS ដើម្បី minify និង obfuscate
    const result = UglifyJS.minify(code, {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        unused: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        collapse_vars: true,
        reduce_vars: true,
        booleans: true,
        loops: true,
        unused: true,
        passes: 3
      },
      mangle: {
        toplevel: true,
        eval: true,
        keep_classnames: false,
        keep_fnames: false,
        reserved: ['require', 'exports', 'module']
      },
      output: {
        beautify: false,
        comments: false
      }
    });
    
    if (result.error) {
      console.error('Obfuscation error:', result.error);
      return code;
    }
    
    return result.code;
  }

  // បង្កើត source map ក្លែងក្លាយ [citation:6]
  generateFakeSourceMap(filename) {
    const fakeMap = {
      version: 3,
      file: filename,
      sources: ['fake_source.js'],
      names: ['a', 'b', 'c', 'd', 'e', 'f'],
      mappings: 'AAAA,SAASA,EAAE,CAACC,CAAD,CAAO',
      sourcesContent: ['// This is a fake source map for obfuscation']
    };
    
    return JSON.stringify(fakeMap);
  }

  // បន្ថែម code traps [citation:6]
  addCodeTraps(code) {
    const traps = [
      // ពិនិត្យមើលថាតើកំពុងរត់ក្នុង clone domain ដែរឬទេ
      `
      (function() {
        if (window.location.hostname !== '${process.env.DOMAIN}') {
          // បញ្ជូនទៅកាន់គេហទំព័រពិត
          window.location.href = 'https://${process.env.DOMAIN}' + window.location.pathname;
        }
      })();
      `,
      
      // ពិនិត្យការ debugger
      `
      (function() {
        const startTime = Date.now();
        debugger;
        const endTime = Date.now();
        if (endTime - startTime > 100) {
          // កំពុងត្រូវបាន debug
          window.location.href = 'about:blank';
        }
      })();
      `,
      
      // ពិនិត្យ DevTools
      `
      (function() {
        const element = new Image();
        Object.defineProperty(element, 'id', {
          get: function() {
            // DevTools កំពុងបើក
            window.location.href = 'about:blank';
          }
        });
        console.log(element);
      })();
      `
    ];
    
    // បន្ថែម traps ចៃដន្យ
    const numTraps = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < numTraps; i++) {
      const trap = traps[Math.floor(Math.random() * traps.length)];
      code += trap;
    }
    
    return code;
  }

  // អ៊ិនគ្រីបផ្នែកខ្លះនៃ code [citation:8]
  encryptCodeSections(code) {
    // ស្វែងរកផ្នែកដែលត្រូវអ៊ិនគ្រីប
    const sensitivePatterns = [
      /apiKey\s*=\s*['"]([^'"]+)['"]/g,
      /secret\s*=\s*['"]([^'"]+)['"]/g,
      /password\s*=\s*['"]([^'"]+)['"]/g,
      /token\s*=\s*['"]([^'"]+)['"]/g
    ];
    
    let encryptedCode = code;
    const key = this.obfuscationKeys.get('default');
    
    sensitivePatterns.forEach(pattern => {
      encryptedCode = encryptedCode.replace(pattern, (match, value) => {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
        let encrypted = cipher.update(value, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        return match.replace(value, `__decrypt("${encrypted}", "${iv.toString('hex')}")`);
      });
    });
    
    // បន្ថែម function សម្រាប់ decrypt
    const decryptFunction = `
      function __decrypt(encrypted, iv) {
        const key = "${key}";
        const decipher = crypto.createDecipheriv('aes-256-cbc', 
          Buffer.from(key, 'hex'), 
          Buffer.from(iv, 'hex')
        );
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
      }
    `;
    
    return decryptFunction + encryptedCode;
  }

  // ពិនិត្យការ clone source code
  detectSourceCodeClone(filePath, content) {
    const originalHash = this.fileHashes.get(filePath);
    
    if (!originalHash) return false;
    
    const currentHash = crypto.createHash('sha256')
      .update(content)
      .digest('hex');
    
    return currentHash === originalHash;
  }

  // ការពារការ view source [citation:8]
  addSourceProtection() {
    return `
      <script>
        // ការពារការ right-click
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        // ការពារការ select
        document.addEventListener('selectstart', event => event.preventDefault());
        
        // ការពារការ copy
        document.addEventListener('copy', event => {
          event.clipboardData.setData('text/plain', 'Copying is disabled');
          event.preventDefault();
        });
        
        // ការពារការ cut
        document.addEventListener('cut', event => event.preventDefault());
        
        // ការពារការ paste
        document.addEventListener('paste', event => event.preventDefault());
        
        // ការពារការ drag
        document.addEventListener('dragstart', event => event.preventDefault());
        
        // ការពារការ keyboard shortcuts
        document.addEventListener('keydown', event => {
          if (event.ctrlKey || event.metaKey) {
            if (event.key === 'c' || event.key === 'u' || event.key === 's') {
              event.preventDefault();
            }
          }
        });
        
        // ការពារការ print
        window.addEventListener('beforeprint', event => {
          document.body.innerHTML = '<h1>Printing is disabled</h1>';
        });
        
        // ការពារការ view source
        const devtools = {
          open: false,
          orientation: null
        };
        
        const threshold = 160;
        
        setInterval(() => {
          if (window.outerWidth - window.innerWidth > threshold ||
              window.outerHeight - window.innerHeight > threshold) {
            if (!devtools.open) {
              devtools.open = true;
              window.location.href = 'about:blank';
            }
          } else {
            devtools.open = false;
          }
        }, 1000);
      </script>
    `;
  }

  // បង្កើត dynamic code loading [citation:6]
  generateDynamicLoader() {
    return `
      <script>
        // ផ្ទុក code តាមតម្រូវការ
        const modules = new Map();
        
        async function loadModule(name) {
          if (modules.has(name)) {
            return modules.get(name);
          }
          
          const response = await fetch('/api/module/' + name + '?t=' + Date.now());
          const encrypted = await response.text();
          
          // decrypt នៅ client side
          const decrypted = atob(encrypted);
          const module = new Function('module', 'exports', decrypted);
          
          const exp = {};
          module(null, exp);
          
          modules.set(name, exp);
          return exp;
        }
        
        // ប្រើប្រាស់ modules
        window.loadModule = loadModule;
      </script>
    `;
  }
}

module.exports = new SourceCodeProtection();