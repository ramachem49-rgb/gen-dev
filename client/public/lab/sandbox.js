// ── Code Sandbox ─────────────────────────────────────────────────────────────
class CodeSandbox {
  constructor(inputEl, outputEl, langEl) {
    this.inputEl = inputEl;
    this.outputEl = outputEl;
    this.langEl = langEl;
    this.rl = new RateLimiter(20, 60000);
  }

  print(text, cls = '') {
    const div = document.createElement('div');
    div.className = 'out-line ' + cls;
    div.textContent = text;
    this.outputEl.appendChild(div);
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }

  clear() { this.outputEl.innerHTML = ''; }

  async run() {
    if (!this.rl.isAllowed()) {
      this.print('⚠ Rate limit: wait before running again.', 'err');
      return;
    }
    const code = this.inputEl.value.trim();
    if (!code) return;
    const lang = this.langEl.value;
    this.clear();
    this.print(`▶ Running ${lang}...`, 'info');

    if (lang === 'javascript') {
      await this.runJS(code);
    } else if (lang === 'python') {
      await this.runPython(code);
    }
  }

  async runJS(code) {
    return new Promise((resolve) => {
      const iframe = document.createElement('iframe');
      iframe.sandbox = 'allow-scripts';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const logs = [];
      const timeout = setTimeout(() => {
        this.print('⏱ Timeout: execution exceeded 5 seconds', 'err');
        cleanup();
        resolve();
      }, 5000);

      const cleanup = () => {
        clearTimeout(timeout);
        try { document.body.removeChild(iframe); } catch {}
        resolve();
      };

      // Intercept messages from iframe
      const handler = (e) => {
        if (e.source !== iframe.contentWindow) return;
        const { type, data } = e.data || {};
        if (type === 'log') {
          if (logs.length < 500) {
            logs.push(data);
            this.print(String(data).slice(0, 500), 'ok');
          }
        } else if (type === 'error') {
          this.print('❌ ' + data, 'err');
          window.removeEventListener('message', handler);
          cleanup();
        } else if (type === 'done') {
          window.removeEventListener('message', handler);
          if (logs.length === 0) this.print('(no output)', 'info');
          cleanup();
        }
      };
      window.addEventListener('message', handler);

      // Blocked APIs list
      const blocked = ['fetch', 'XMLHttpRequest', 'WebSocket', 'eval', 'Function'];

      const sandboxCode = `
        const _parent = window.parent;
        const _log = (...args) => _parent.postMessage({ type: 'log', data: args.map(String).join(' ') }, '*');
        const _err = (msg) => _parent.postMessage({ type: 'error', data: msg }, '*');
        const _done = () => _parent.postMessage({ type: 'done' }, '*');
        
        // Override console
        window.console = { log: _log, warn: _log, error: _log, info: _log };
        
        // Block dangerous APIs
        ${blocked.map(b => `try { Object.defineProperty(window, '${b}', { get: () => { throw new Error('${b} is blocked in sandbox'); } }); } catch {}`).join('\n')}
        
        // Block document access
        try { Object.defineProperty(window, 'document', { get: () => ({ title: 'sandbox', body: null }) }); } catch {}
        
        try {
          ${code}
          _done();
        } catch(e) {
          _err(e.message || String(e));
          _done();
        }
      `;

      iframe.onload = () => {
        try {
          iframe.contentWindow.eval(sandboxCode);
        } catch (e) {
          this.print('❌ ' + e.message, 'err');
          cleanup();
        }
      };
      iframe.srcdoc = '<!DOCTYPE html><html><body></body></html>';
    });
  }

  async runPython(code) {
    // Check if Skulpt is loaded
    if (typeof Sk === 'undefined') {
      this.print('⚠ Loading Python interpreter (Skulpt)...', 'info');
      await this.loadSkulpt();
    }
    if (typeof Sk === 'undefined') {
      this.print('❌ Failed to load Python interpreter. Check internet connection.', 'err');
      return;
    }

    const self = this;
    let outputCount = 0;

    Sk.configure({
      output(text) {
        if (outputCount++ < 500) self.print(text.replace(/\n$/, ''), 'ok');
      },
      read(x) {
        if (Sk.builtinFiles?.files[x]) return Sk.builtinFiles.files[x];
        throw new Error(`File not found: '${x}'`);
      },
      execLimit: 5000,
    });

    try {
      await Sk.misceval.asyncToPromise(() =>
        Sk.importMainWithBody('<stdin>', false, code, true)
      );
      if (outputCount === 0) this.print('(no output)', 'info');
    } catch (e) {
      this.print('❌ ' + (e.toString ? e.toString() : String(e)), 'err');
    }
  }

  loadSkulpt() {
    return new Promise((resolve) => {
      const s1 = document.createElement('script');
      s1.src = 'https://skulpt.org/js/skulpt.min.js';
      s1.onload = () => {
        const s2 = document.createElement('script');
        s2.src = 'https://skulpt.org/js/skulpt-stdlib.js';
        s2.onload = resolve;
        s2.onerror = resolve;
        document.head.appendChild(s2);
      };
      s1.onerror = resolve;
      document.head.appendChild(s1);
    });
  }
}

window.CodeSandbox = CodeSandbox;
