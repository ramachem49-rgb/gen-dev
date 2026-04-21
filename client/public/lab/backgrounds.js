// ── Terminal Backgrounds ──────────────────────────────────────────────────────
const TERMINAL_BACKGROUNDS = [
  { id: 1,  name: 'Anime City',   url: 'https://i.pinimg.com/1200x/34/94/19/349419b33656e63635c88efd69f1f368.jpg' },
  { id: 2,  name: 'Purple Night', url: 'https://i.pinimg.com/1200x/97/6a/bf/976abf7241ff8cf50dec646a2df9a00b.jpg' },
  { id: 3,  name: 'Neon City',    url: 'https://i.pinimg.com/1200x/de/ba/95/deba959d06337986b754325861a58e4c.jpg' },
  { id: 4,  name: 'Blue Glow',    url: 'https://i.pinimg.com/1200x/a8/6b/84/a86b846169bbb9a75ebe00ab56c18fa5.jpg' },
  { id: 5,  name: 'Sakura',       url: 'https://i.pinimg.com/1200x/25/5e/e7/255ee7dec22301bf23ee4a18400215b0.jpg' },
  { id: 6,  name: 'Dark Forest',  url: 'https://i.pinimg.com/1200x/72/40/d6/7240d60317d1047048824d77bc97cf96.jpg' },
  { id: 7,  name: 'Cyber Tokyo',  url: 'https://i.pinimg.com/1200x/78/6d/af/786daff6b289898cd2c01c6803314c55.jpg' },
  { id: 8,  name: 'Galaxy',       url: 'https://i.pinimg.com/1200x/b4/11/61/b41161b48eb6ca30ec7514c18b57bc4c.jpg' },
  { id: 9,  name: 'Rain Street',  url: 'https://i.pinimg.com/1200x/18/cc/03/18cc03d530653208dd5f49a03f4d9712.jpg' },
  { id: 10, name: 'Sunset',       url: 'https://i.pinimg.com/1200x/ad/b5/17/adb5171a93b88eccfa61872e2f505991.jpg' },
  { id: 11, name: 'Mountain',     url: 'https://i.pinimg.com/1200x/82/6b/54/826b5474ac2b1d0796926894c2927489.jpg' },
  { id: 12, name: 'Anime Girl',   url: 'https://i.pinimg.com/1200x/2a/34/89/2a348986e39878ca8f57273d8431989c.jpg' },
  { id: 13, name: 'Space',        url: 'https://i.pinimg.com/1200x/1e/ac/e0/1eace0ac46927b9a7aba22b4f5c2b102.jpg' },
  { id: 14, name: 'Cyberpunk',    url: 'https://i.pinimg.com/1200x/54/57/f0/5457f05bea206d3aeccf6749065d453b.jpg' },
];

const BG_KEY = 'lab_bg_v3'; // Changed version to avoid conflict

function loadBgConfig() {
  try { 
    const raw = localStorage.getItem(BG_KEY);
    if (raw) return JSON.parse(raw);
    return null;
  } catch { 
    return null; 
  }
}

function saveBgConfig(cfg) { 
  localStorage.setItem(BG_KEY, JSON.stringify(cfg)); 
}

// Initialize custom backgrounds storage if not exists
function initCustomBgs() {
  if (!localStorage.getItem('lab_custom_bgs')) {
    localStorage.setItem('lab_custom_bgs', JSON.stringify([]));
  }
}

// ── Apply background to entire Lab (body) ─────────────────────────────────────
function applyBg(cfg) {
  const old = document.getElementById('lab-bg-overlay');
  if (old) old.remove();

  // Reset body styles
  document.body.style.backgroundImage = '';
  document.body.style.backgroundSize = '';
  document.body.style.backgroundPosition = '';
  document.body.style.backgroundAttachment = '';

  if (!cfg || cfg.id === 0 || cfg.id === '0') {
    _restorePanels();
    return;
  }

  initCustomBgs();
  const customs = JSON.parse(localStorage.getItem('lab_custom_bgs') || '[]');
  const all = [...TERMINAL_BACKGROUNDS, ...customs];
  const bg = cfg.url ? cfg : all.find(b => b.id == cfg.id);
  if (!bg) return;

  const opacity = cfg.opacity ?? 0.60;

  // Background image on body
  document.body.style.backgroundImage = `url('${bg.url}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';

  // Semi-transparent dark overlay so text stays readable
  const overlay = document.createElement('div');
  overlay.id = 'lab-bg-overlay';
  overlay.style.cssText = `
    position:fixed;
    inset:0;
    z-index:0;
    pointer-events:none;
    background:rgba(13,17,23,${1 - opacity});
  `;
  document.body.insertBefore(overlay, document.body.firstChild);

  // Make panels transparent so bg shows through
  _makePanelsTransparent();

  const app = document.getElementById('app');
  if (app) { 
    app.style.position = 'relative'; 
    app.style.zIndex = '1'; 
  }
}

function _makePanelsTransparent() {
  const rules = {
    '#titlebar':          'rgba(13,17,23,0.60)',
    '#actbar':            'rgba(13,17,23,0.60)',
    '#sidebar':           'rgba(13,17,23,0.55)',
    '#file-tree':         'transparent',
    '#editor-area':       'rgba(13,17,23,0.50)',
    '#editor-container':  'rgba(13,17,23,0.50)',
    '#editor':            'rgba(13,17,23,0.40)',
    '#editor-tabs':       'rgba(13,17,23,0.60)',
    '#term-panel':        'rgba(10,14,26,0.60)',
    '#term-body':         'rgba(10,14,26,0.50)',
    '#tout':              'transparent',
    '#tinrow':            'rgba(13,17,23,0.55)',
    '#statusbar':         'rgba(0,20,15,0.80)',
    '#main-area':         'transparent',
    '#no-file':           'transparent',
  };
  Object.entries(rules).forEach(([sel, color]) => {
    const el = document.querySelector(sel);
    if (el) { 
      el.style.background = color; 
      el.style.backgroundColor = color; 
    }
  });
}

function _restorePanels() {
  const els = ['#titlebar','#actbar','#sidebar','#file-tree','#editor-area',
    '#editor-container','#editor','#editor-tabs','#term-panel','#term-body',
    '#tout','#tinrow','#statusbar','#main-area','#no-file'];
  els.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) { 
      el.style.background = ''; 
      el.style.backgroundColor = ''; 
    }
  });
  document.body.style.backgroundImage = '';
  document.body.style.backgroundSize = '';
  document.body.style.backgroundPosition = '';
  document.body.style.backgroundAttachment = '';
  
  // Remove overlay if exists
  const overlay = document.getElementById('lab-bg-overlay');
  if (overlay) overlay.remove();
}

// ── Picker UI ─────────────────────────────────────────────────────────────────
function showBgPicker() {
  const existing = document.getElementById('bg-picker-modal');
  if (existing) { 
    existing.remove(); 
    return; 
  }

  initCustomBgs();
  const cfg = loadBgConfig() || { id: 0, opacity: 0.60 };
  const customs = JSON.parse(localStorage.getItem('lab_custom_bgs') || '[]');
  const allBgs = [...TERMINAL_BACKGROUNDS, ...customs];

  const modal = document.createElement('div');
  modal.id = 'bg-picker-modal';
  modal.style.cssText = `
    position:fixed;bottom:36px;right:16px;width:360px;max-height:520px;
    background:#1e1e1e;border:1px solid #454545;border-radius:14px;
    z-index:9999;overflow:hidden;display:flex;flex-direction:column;
    box-shadow:0 12px 40px rgba(0,0,0,.7);font-family:Consolas,monospace;
  `;

  modal.innerHTML = `
    <div style="padding:12px 14px;border-bottom:1px solid #454545;display:flex;align-items:center;justify-content:space-between;flex-shrink:0">
      <span style="font-size:13px;font-weight:700;color:#ccc">🖼 Background</span>
      <button class="bg-picker-close" style="background:transparent;border:none;color:#858585;cursor:pointer;font-size:18px;line-height:1">×</button>
    </div>

    <div style="overflow-y:auto;flex:1;padding:12px;scrollbar-width:thin">
      <!-- None -->
      <div data-bg-id="0" class="bg-option"
        style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;
               border:2px solid ${cfg.id === 0 ? '#569cd6' : '#333'};margin-bottom:10px;background:#252526;transition:border .15s">
        <div style="width:56px;height:36px;background:#1e1e1e;border:1px solid #454545;border-radius:5px;
                    display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">🚫</div>
        <div>
          <div style="font-size:12px;color:#ccc;font-weight:600">None</div>
          <div style="font-size:10px;color:#666">Default dark background</div>
        </div>
      </div>

      <!-- Grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
        ${allBgs.map(bg => {
          const isBase64 = bg.url && bg.url.startsWith('data:');
          const imgSrc = isBase64 ? bg.url : bg.url;
          return `
          <div data-bg-id="${bg.id}" class="bg-option"
            style="border-radius:9px;overflow:hidden;cursor:pointer;
                   border:2px solid ${cfg.id == bg.id ? '#569cd6' : 'transparent'};
                   transition:border .15s,transform .15s;position:relative"
            onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
            <img src="${imgSrc}" alt="${bg.name.replace(/['"]/g, '&quot;')}"
              style="width:100%;height:72px;object-fit:cover;display:block;background:#333" loading="lazy"
              onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23333\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%23666\' font-size=\'10\'%3Eno image%3C/text%3E%3C/svg%3E'"/>
            <div style="padding:5px 8px;background:#252526;display:flex;align-items:center;justify-content:space-between">
              <span style="font-size:11px;color:#ccc">${bg.name.replace(/['"]/g, '&quot;')}</span>
              ${bg.custom ? `<button class="del-custom-bg" data-id="${bg.id}" style="background:transparent;border:none;color:#f44747;cursor:pointer;font-size:12px;padding:0;line-height:1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
              </button>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Opacity -->
      <div style="background:#252526;border-radius:9px;padding:12px;margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span style="font-size:11px;color:#858585">Opacity</span>
          <span style="font-size:11px;color:#ccc;font-weight:600" id="opacity-val">${Math.round((cfg.opacity??0.60)*100)}%</span>
        </div>
        <input type="range" id="opacity-slider" min="10" max="90" value="${Math.round((cfg.opacity??0.60)*100)}"
          style="width:100%;accent-color:#569cd6;cursor:pointer"/>
        <div style="display:flex;justify-content:space-between;margin-top:4px">
          <span style="font-size:10px;color:#555">10%</span>
          <span style="font-size:10px;color:#555">90%</span>
        </div>
      </div>

      <!-- Add custom -->
      <div style="background:#252526;border-radius:9px;padding:12px">
        <p style="font-size:11px;color:#858585;margin-bottom:8px;font-weight:600">+ Add Custom Background</p>

        <!-- Upload from device -->
        <div style="margin-bottom:10px">
          <label id="upload-bg-label" style="display:flex;align-items:center;justify-content:center;gap:8px;
            width:100%;padding:10px;background:#1e1e1e;border:2px dashed #454545;border-radius:8px;
            cursor:pointer;color:#858585;font-size:12px;transition:border .15s;font-family:inherit"
            onmouseover="this.style.borderColor='#569cd6';this.style.color='#569cd6'"
            onmouseout="this.style.borderColor='#454545';this.style.color='#858585'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Upload from device
            <input type="file" accept="image/*" style="display:none" id="bg-upload-input"/>
          </label>
        </div>

        <!-- Or URL -->
        <p style="font-size:10px;color:#555;text-align:center;margin-bottom:8px">🔗 or add by URL 🔗</p>
        <input id="custom-bg-name" placeholder="Name (e.g. My Wallpaper)"
          style="width:100%;background:#1e1e1e;border:1px solid #454545;border-radius:6px;
                 padding:6px 10px;color:#ccc;font-size:12px;margin-bottom:6px;outline:none;font-family:inherit;box-sizing:border-box"/>
        <input id="custom-bg-url" placeholder="https://example.com/image.jpg"
          style="width:100%;background:#1e1e1e;border:1px solid #454545;border-radius:6px;
                 padding:6px 10px;color:#ccc;font-size:12px;margin-bottom:8px;outline:none;font-family:inherit;box-sizing:border-box"/>
        <button id="add-bg-url-btn"
          style="width:100%;background:#569cd6;border:none;border-radius:7px;padding:7px;
                 color:#fff;font-size:12px;cursor:pointer;font-family:inherit;font-weight:600">
          Add by URL
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Event listeners
  modal.querySelector('.bg-picker-close')?.addEventListener('click', () => modal.remove());
  
  modal.querySelectorAll('.bg-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      if (e.target.classList.contains('del-custom-bg')) return;
      const id = opt.getAttribute('data-bg-id');
      selectBg(parseInt(id));
    });
  });

  modal.querySelectorAll('.del-custom-bg').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'));
      deleteCustomBg(id);
    });
  });

  const slider = document.getElementById('opacity-slider');
  if (slider) {
    slider.addEventListener('input', (e) => updateOpacity(e.target.value));
  }

  const uploadLabel = document.getElementById('upload-bg-label');
  const uploadInput = document.getElementById('bg-upload-input');
  if (uploadLabel && uploadInput) {
    uploadInput.addEventListener('change', (e) => uploadBgFromDevice(e.target));
    uploadLabel.querySelector('input')?.addEventListener('click', (e) => e.stopPropagation());
  }

  const addUrlBtn = document.getElementById('add-bg-url-btn');
  if (addUrlBtn) {
    addUrlBtn.addEventListener('click', () => addCustomBg());
  }

  // Close on outside click
  setTimeout(() => {
    const closeHandler = (e) => {
      if (!modal.contains(e.target) && !e.target.closest('[onclick*="showBgPicker"]') && !e.target.closest('#act-bg')) {
        modal.remove();
        document.removeEventListener('click', closeHandler);
      }
    };
    document.addEventListener('click', closeHandler);
  }, 100);
}

function selectBg(id) {
  const cfg = loadBgConfig() || { id: 0, opacity: 0.60 };
  cfg.id = id;
  saveBgConfig(cfg);
  applyBg(id === 0 ? null : cfg);
  
  // Update UI borders
  document.querySelectorAll('.bg-option').forEach(el => {
    el.style.borderColor = 'transparent';
  });
  const selected = document.querySelector(`.bg-option[data-bg-id="${id}"]`);
  if (selected) selected.style.borderColor = '#569cd6';
}

function updateOpacity(val) {
  const opacitySpan = document.getElementById('opacity-val');
  if (opacitySpan) opacitySpan.textContent = val + '%';
  const cfg = loadBgConfig() || { id: 0, opacity: 0.60 };
  cfg.opacity = val / 100;
  saveBgConfig(cfg);
  // Reapply with new opacity
  applyBg(cfg);
}

function addCustomBg() {
  const nameInput = document.getElementById('custom-bg-name');
  const urlInput = document.getElementById('custom-bg-url');
  const name = nameInput?.value.trim();
  const url = urlInput?.value.trim();
  if (!name || !url) {
    alert('Enter both name and URL');
    return;
  }
  _saveCustomBg(name, url);
}

function uploadBgFromDevice(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    alert('Image too large (max 10MB)');
    input.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    const name = file.name.replace(/\.[^.]+$/, '') || 'My Background';
    _saveCustomBg(name, dataUrl);
    input.value = ''; // Reset input
  };
  reader.onerror = () => {
    alert('Failed to read file');
    input.value = '';
  };
  reader.readAsDataURL(file);
}

function _saveCustomBg(name, url) {
  initCustomBgs();
  const customs = JSON.parse(localStorage.getItem('lab_custom_bgs') || '[]');
  const id = Date.now();
  customs.push({ id, name, url, custom: true });
  localStorage.setItem('lab_custom_bgs', JSON.stringify(customs));
  
  // Close and reopen picker to refresh
  const modal = document.getElementById('bg-picker-modal');
  if (modal) modal.remove();
  showBgPicker();
  
  // Auto-select the new background
  setTimeout(() => selectBg(id), 100);
}

function deleteCustomBg(id) {
  initCustomBgs();
  const customs = JSON.parse(localStorage.getItem('lab_custom_bgs') || '[]');
  const newCustoms = customs.filter(b => b.id !== id);
  localStorage.setItem('lab_custom_bgs', JSON.stringify(newCustoms));
  
  const cfg = loadBgConfig();
  if (cfg && cfg.id == id) { 
    saveBgConfig({ id: 0, opacity: 0.60 }); 
    applyBg(null); 
  }
  
  // Refresh picker
  const modal = document.getElementById('bg-picker-modal');
  if (modal) modal.remove();
  showBgPicker();
}

// ── Auto-apply on load ────────────────────────────────────────────────────────
// Wait for DOM and also for main app to initialize
function initBackgrounds() {
  initCustomBgs();
  const cfg = loadBgConfig();
  if (cfg && cfg.id !== 0 && cfg.id !== '0') {
    // Small delay to ensure DOM is ready
    setTimeout(() => applyBg(cfg), 100);
  }
}

// Run after DOM content loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackgrounds);
} else {
  initBackgrounds();
}