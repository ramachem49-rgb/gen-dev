// ── Virtual Filesystem ────────────────────────────────────────────────────────
const VFS_KEY = 'lab_vfs';

function loadVFS() {
  try {
    const raw = localStorage.getItem(VFS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return defaultVFS();
}

function saveVFS(vfs) {
  localStorage.setItem(VFS_KEY, JSON.stringify(vfs));
}

function defaultVFS() {
  return {
    cwd: '/home/user',
    nodes: {
      '/': { type: 'dir' },
      '/home': { type: 'dir' },
      '/home/user': { type: 'dir' },
      '/home/user/projects': { type: 'dir' },
      '/home/user/hello.js': { type: 'file', content: 'console.log("Hello, World!");' },
      '/home/user/readme.txt': { type: 'file', content: 'Welcome to the Lab!\nType "help" to see commands.' },
    },
  };
}

function resolvePath(cwd, target) {
  if (!target || target === '.') return cwd;
  if (target === '..') {
    const parts = cwd.split('/').filter(Boolean);
    parts.pop();
    return '/' + parts.join('/') || '/';
  }
  if (target.startsWith('/')) return normPath(target);
  return normPath(cwd + '/' + target);
}

function normPath(p) {
  const parts = p.split('/').filter(Boolean);
  const stack = [];
  for (const part of parts) {
    if (part === '..') stack.pop();
    else if (part !== '.') stack.push(part);
  }
  return '/' + stack.join('/');
}

function listDir(vfs, path) {
  return Object.keys(vfs.nodes).filter(k => {
    if (k === path) return false;
    const parent = k.substring(0, k.lastIndexOf('/')) || '/';
    return parent === path;
  }).map(k => ({ name: k.split('/').pop(), node: vfs.nodes[k], path: k }));
}

// ── Rate Limiter ──────────────────────────────────────────────────────────────
class RateLimiter {
  constructor(max = 60, windowMs = 60000) {
    this.max = max; this.windowMs = windowMs; this.actions = [];
  }
  isAllowed() {
    const now = Date.now();
    this.actions = this.actions.filter(t => now - t < this.windowMs);
    if (this.actions.length >= this.max) return false;
    this.actions.push(now);
    return true;
  }
  remaining() {
    const now = Date.now();
    this.actions = this.actions.filter(t => now - t < this.windowMs);
    return Math.max(0, this.max - this.actions.length);
  }
}

// ── Terminal ──────────────────────────────────────────────────────────────────
class Terminal {
  constructor(outputEl, inputEl, promptEl) {
    this.output = outputEl;
    this.input = inputEl;
    this.prompt = promptEl;
    this.vfs = loadVFS();
    this.history = JSON.parse(localStorage.getItem('lab_history') || '[]');
    this.histIdx = -1;
    this.rl = new RateLimiter();
    this.updatePrompt();
    this.bindEvents();
    this.print('info', 'Lab Terminal v1.0 — type "help" for commands');
    this.print('dim', '─'.repeat(50));
  }

  updatePrompt() {
    this.prompt.textContent = `user@lab:${this.vfs.cwd}$ `;
  }

  print(cls, text) {
    const div = document.createElement('div');
    div.className = `line ${cls}`;
    div.textContent = text;
    this.output.appendChild(div);
    this.output.scrollTop = this.output.scrollHeight;
  }

  bindEvents() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        this.input.value = '';
        if (cmd) {
          this.history.unshift(cmd);
          if (this.history.length > 100) this.history.pop();
          localStorage.setItem('lab_history', JSON.stringify(this.history));
          this.histIdx = -1;
        }
        this.print('cmd', `${this.prompt.textContent}${cmd}`);
        if (cmd) this.exec(cmd);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.histIdx < this.history.length - 1) {
          this.histIdx++;
          this.input.value = this.history[this.histIdx] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.histIdx > 0) { this.histIdx--; this.input.value = this.history[this.histIdx]; }
        else { this.histIdx = -1; this.input.value = ''; }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        this.autocomplete();
      }
    });
  }

  autocomplete() {
    const val = this.input.value;
    const parts = val.split(' ');
    const last = parts[parts.length - 1];
    if (parts.length === 1) return; // command itself
    const items = listDir(this.vfs, this.vfs.cwd).map(i => i.name);
    const matches = items.filter(n => n.startsWith(last));
    if (matches.length === 1) {
      parts[parts.length - 1] = matches[0];
      this.input.value = parts.join(' ');
    } else if (matches.length > 1) {
      this.print('dim', matches.join('  '));
    }
  }

  exec(raw) {
    if (!this.rl.isAllowed()) {
      this.print('err', 'Rate limit exceeded. Wait a moment.');
      return;
    }
    const [cmd, ...args] = raw.trim().split(/\s+/);
    const commands = {
      help: () => this.cmdHelp(),
      clear: () => { this.output.innerHTML = ''; },
      pwd: () => this.print('', this.vfs.cwd),
      ls: () => this.cmdLs(args[0]),
      cd: () => this.cmdCd(args[0]),
      echo: () => this.print('', args.join(' ')),
      cat: () => this.cmdCat(args[0]),
      touch: () => this.cmdTouch(args[0]),
      mkdir: () => this.cmdMkdir(args[0]),
      rm: () => this.cmdRm(args[0]),
      mv: () => this.cmdMv(args[0], args[1]),
      cp: () => this.cmdCp(args[0], args[1]),
      whoami: () => this.print('', 'user'),
      date: () => this.print('', new Date().toString()),
      history: () => this.history.slice(0, 20).forEach((h, i) => this.print('dim', `  ${i + 1}  ${h}`)),
    };
    if (commands[cmd]) commands[cmd]();
    else this.print('err', `Command not found: ${cmd}. Type "help".`);
  }

  cmdHelp() {
    const cmds = [
      ['ls [dir]', 'List directory contents'],
      ['cd <dir>', 'Change directory'],
      ['pwd', 'Print working directory'],
      ['echo <text>', 'Print text'],
      ['cat <file>', 'Show file content'],
      ['touch <file>', 'Create empty file'],
      ['mkdir <dir>', 'Create directory'],
      ['rm <path>', 'Remove file or directory'],
      ['mv <src> <dst>', 'Move/rename'],
      ['cp <src> <dst>', 'Copy file'],
      ['whoami', 'Current user'],
      ['date', 'Current date/time'],
      ['history', 'Command history'],
      ['clear', 'Clear terminal'],
    ];
    this.print('info', 'Available commands:');
    cmds.forEach(([c, d]) => this.print('dim', `  ${c.padEnd(20)} ${d}`));
  }

  cmdLs(dir) {
    const path = dir ? resolvePath(this.vfs.cwd, dir) : this.vfs.cwd;
    if (!this.vfs.nodes[path] || this.vfs.nodes[path].type !== 'dir') {
      return this.print('err', `ls: ${path}: No such directory`);
    }
    const items = listDir(this.vfs, path);
    if (items.length === 0) return this.print('dim', '(empty)');
    const line = items.map(i => i.node.type === 'dir' ? `\x1b[34m${i.name}/\x1b[0m` : i.name).join('  ');
    // plain text version
    const plain = items.map(i => i.node.type === 'dir' ? `📁 ${i.name}` : `📄 ${i.name}`).join('   ');
    this.print('', plain);
  }

  cmdCd(dir) {
    if (!dir || dir === '~') { this.vfs.cwd = '/home/user'; }
    else {
      const path = resolvePath(this.vfs.cwd, dir);
      if (!this.vfs.nodes[path] || this.vfs.nodes[path].type !== 'dir') {
        return this.print('err', `cd: ${dir}: No such directory`);
      }
      this.vfs.cwd = path;
    }
    saveVFS(this.vfs);
    this.updatePrompt();
  }

  cmdCat(file) {
    if (!file) return this.print('err', 'cat: missing operand');
    const path = resolvePath(this.vfs.cwd, file);
    const node = this.vfs.nodes[path];
    if (!node) return this.print('err', `cat: ${file}: No such file`);
    if (node.type === 'dir') return this.print('err', `cat: ${file}: Is a directory`);
    node.content.split('\n').forEach(l => this.print('', l));
  }

  cmdTouch(file) {
    if (!file) return this.print('err', 'touch: missing operand');
    const path = resolvePath(this.vfs.cwd, file);
    if (!this.vfs.nodes[path]) {
      this.vfs.nodes[path] = { type: 'file', content: '', modified: Date.now() };
      saveVFS(this.vfs);
    }
  }

  cmdMkdir(dir) {
    if (!dir) return this.print('err', 'mkdir: missing operand');
    const path = resolvePath(this.vfs.cwd, dir);
    if (this.vfs.nodes[path]) return this.print('err', `mkdir: ${dir}: Already exists`);
    this.vfs.nodes[path] = { type: 'dir', modified: Date.now() };
    saveVFS(this.vfs);
  }

  cmdRm(target) {
    if (!target) return this.print('err', 'rm: missing operand');
    const path = resolvePath(this.vfs.cwd, target);
    if (!this.vfs.nodes[path]) return this.print('err', `rm: ${target}: No such file`);
    // Remove node and all children
    Object.keys(this.vfs.nodes).filter(k => k === path || k.startsWith(path + '/')).forEach(k => delete this.vfs.nodes[k]);
    saveVFS(this.vfs);
  }

  cmdMv(src, dst) {
    if (!src || !dst) return this.print('err', 'mv: missing operand');
    const srcPath = resolvePath(this.vfs.cwd, src);
    const dstPath = resolvePath(this.vfs.cwd, dst);
    if (!this.vfs.nodes[srcPath]) return this.print('err', `mv: ${src}: No such file`);
    this.vfs.nodes[dstPath] = { ...this.vfs.nodes[srcPath] };
    delete this.vfs.nodes[srcPath];
    saveVFS(this.vfs);
  }

  cmdCp(src, dst) {
    if (!src || !dst) return this.print('err', 'cp: missing operand');
    const srcPath = resolvePath(this.vfs.cwd, src);
    const dstPath = resolvePath(this.vfs.cwd, dst);
    if (!this.vfs.nodes[srcPath]) return this.print('err', `cp: ${src}: No such file`);
    this.vfs.nodes[dstPath] = { ...this.vfs.nodes[srcPath], modified: Date.now() };
    saveVFS(this.vfs);
  }
}

window.Terminal = Terminal;
