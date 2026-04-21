// ── File Manager ─────────────────────────────────────────────────────────────
const FILE_ICONS = {
  js: '📜', ts: '📘', py: '🐍', html: '🌐', css: '🎨',
  json: '📋', txt: '📄', md: '📝', default: '📄',
};

function getIcon(name) {
  const ext = name.split('.').pop()?.toLowerCase();
  return FILE_ICONS[ext] || FILE_ICONS.default;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1024 / 1024).toFixed(1) + ' MB';
}

class FileManager {
  constructor(treeEl, listEl, editorEl, toolbarEl) {
    this.treeEl = treeEl;
    this.listEl = listEl;
    this.editorEl = editorEl;
    this.toolbarEl = toolbarEl;
    this.vfs = loadVFS();
    this.selectedPath = null;
    this.editingPath = null;
    this.render();
  }

  render() {
    this.renderTree();
    this.renderList();
    this.renderToolbar();
  }

  renderTree() {
    this.treeEl.innerHTML = '';
    const dirs = Object.keys(this.vfs.nodes)
      .filter(k => this.vfs.nodes[k].type === 'dir')
      .sort();
    dirs.forEach(path => {
      const depth = path.split('/').filter(Boolean).length;
      const name = path === '/' ? '/' : path.split('/').pop();
      const item = document.createElement('div');
      item.className = 'tree-item' + (path === this.vfs.cwd ? ' selected' : '');
      item.style.paddingLeft = (depth * 12 + 8) + 'px';
      item.innerHTML = `<span class="icon">📁</span> ${name || '/'}`;
      item.onclick = () => { this.vfs.cwd = path; saveVFS(this.vfs); this.render(); };
      this.treeEl.appendChild(item);
    });
  }

  renderList() {
    this.listEl.innerHTML = '';
    const items = listDir(this.vfs, this.vfs.cwd);
    if (items.length === 0) {
      this.listEl.innerHTML = '<div style="color:var(--text2);padding:20px;font-size:13px;">Empty directory</div>';
      return;
    }
    items.sort((a, b) => {
      if (a.node.type !== b.node.type) return a.node.type === 'dir' ? -1 : 1;
      return a.name.localeCompare(b.name);
    }).forEach(({ name, node, path }) => {
      const card = document.createElement('div');
      card.className = 'file-card' + (path === this.selectedPath ? ' selected' : '');
      card.innerHTML = `
        <div class="file-icon">${node.type === 'dir' ? '📁' : getIcon(name)}</div>
        <div class="file-name">${name}</div>
        ${node.type === 'file' ? `<div style="font-size:10px;color:var(--text2);margin-top:3px">${formatSize((node.content||'').length)}</div>` : ''}
      `;
      card.onclick = () => {
        this.selectedPath = path;
        if (node.type === 'dir') { this.vfs.cwd = path; saveVFS(this.vfs); this.render(); }
        else { this.openFile(path); this.render(); }
      };
      this.listEl.appendChild(card);
    });
  }

  renderToolbar() {
    this.toolbarEl.innerHTML = `
      <span style="color:var(--text2);font-size:12px">${this.vfs.cwd}</span>
      <button class="btn primary" id="btn-new-file">+ File</button>
      <button class="btn" id="btn-new-dir">+ Folder</button>
      <button class="btn" id="btn-upload">⬆ Upload</button>
      ${this.editingPath ? `
        <button class="btn primary" id="btn-save">💾 Save</button>
        <button class="btn danger" id="btn-delete">🗑 Delete</button>
        <button class="btn" id="btn-download">⬇ Download</button>
        <span style="color:var(--text2);font-size:12px;margin-left:auto">${this.editingPath.split('/').pop()}</span>
      ` : ''}
      <input type="file" id="upload-input" style="display:none" multiple>
    `;
    document.getElementById('btn-new-file')?.addEventListener('click', () => this.newFile());
    document.getElementById('btn-new-dir')?.addEventListener('click', () => this.newDir());
    document.getElementById('btn-upload')?.addEventListener('click', () => document.getElementById('upload-input').click());
    document.getElementById('upload-input')?.addEventListener('change', (e) => this.uploadFiles(e.target.files));
    document.getElementById('btn-save')?.addEventListener('click', () => this.saveFile());
    document.getElementById('btn-delete')?.addEventListener('click', () => this.deleteFile());
    document.getElementById('btn-download')?.addEventListener('click', () => this.downloadFile());
  }

  openFile(path) {
    this.editingPath = path;
    const node = this.vfs.nodes[path];
    this.editorEl.innerHTML = `<textarea id="file-textarea" spellcheck="false">${(node.content || '').replace(/</g, '&lt;')}</textarea>`;
    document.getElementById('file-textarea').addEventListener('input', () => {
      // live char count
    });
    this.renderToolbar();
  }

  newFile() {
    const name = prompt('File name (e.g. script.js):');
    if (!name || !name.trim()) return;
    const safeName = name.trim().replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = this.vfs.cwd + '/' + safeName;
    if (this.vfs.nodes[path]) return alert('File already exists');
    if ((name.length) > 100) return alert('Name too long');
    this.vfs.nodes[path] = { type: 'file', content: '', modified: Date.now() };
    saveVFS(this.vfs);
    this.selectedPath = path;
    this.openFile(path);
    this.render();
  }

  newDir() {
    const name = prompt('Folder name:');
    if (!name || !name.trim()) return;
    const safeName = name.trim().replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = this.vfs.cwd + '/' + safeName;
    if (this.vfs.nodes[path]) return alert('Already exists');
    this.vfs.nodes[path] = { type: 'dir', modified: Date.now() };
    saveVFS(this.vfs);
    this.render();
  }

  saveFile() {
    if (!this.editingPath) return;
    const ta = document.getElementById('file-textarea');
    if (!ta) return;
    const content = ta.value;
    if (content.length > 1024 * 1024) return alert('File too large (max 1MB)');
    this.vfs.nodes[this.editingPath].content = content;
    this.vfs.nodes[this.editingPath].modified = Date.now();
    saveVFS(this.vfs);
    // Flash save indicator
    const btn = document.getElementById('btn-save');
    if (btn) { btn.textContent = '✅ Saved'; setTimeout(() => { if (btn) btn.textContent = '💾 Save'; }, 1500); }
  }

  deleteFile() {
    if (!this.editingPath) return;
    if (!confirm(`Delete "${this.editingPath.split('/').pop()}"?`)) return;
    delete this.vfs.nodes[this.editingPath];
    saveVFS(this.vfs);
    this.editingPath = null;
    this.selectedPath = null;
    this.editorEl.innerHTML = '';
    this.render();
  }

  downloadFile() {
    if (!this.editingPath) return;
    const node = this.vfs.nodes[this.editingPath];
    const ta = document.getElementById('file-textarea');
    const content = ta ? ta.value : (node.content || '');
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = this.editingPath.split('/').pop();
    a.click();
    URL.revokeObjectURL(a.href);
  }

  uploadFiles(files) {
    Array.from(files).forEach(file => {
      if (file.size > 1024 * 1024) { alert(`${file.name}: too large (max 1MB)`); return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        const path = this.vfs.cwd + '/' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        this.vfs.nodes[path] = { type: 'file', content: e.target.result, modified: Date.now() };
        saveVFS(this.vfs);
        this.render();
      };
      reader.readAsText(file);
    });
  }
}

window.FileManager = FileManager;
