const express = require('express');
const router = express.Router();
const { execSync, spawnSync } = require('child_process');
const fs   = require('fs');
const path = require('path');
const os   = require('os');
const jwt  = require('jsonwebtoken');
const User = require('../models/User');
const telegramService = require('../services/telegramService');

// ── Auth helper — optional JWT (guest falls back to IP limit) ─────────────────
async function getUser(req) {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return null;
    const decoded = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET);
    return await User.findById(decoded.id);
  } catch { return null; }
}

// ── IP fallback rate limit (guest users) ─────────────────────────────────────
const ipLog = new Map();
const GUEST_LIMIT = 5; // guests get only 5/day
const ONE_DAY_MS  = 86400000;

function checkGuestRate(ip) {
  const now = Date.now();
  const log = (ipLog.get(ip) || []).filter(t => now - t < ONE_DAY_MS);
  if (log.length >= GUEST_LIMIT) {
    const resetHrs = Math.ceil((ONE_DAY_MS - (now - log[0])) / 3600000);
    return { ok: false, msg: `Guest limit ${GUEST_LIMIT}/day exceeded. Login for more. Reset in ~${resetHrs}h`, used: log.length, limit: GUEST_LIMIT };
  }
  log.push(now); ipLog.set(ip, log);
  return { ok: true, remaining: GUEST_LIMIT - log.length, used: log.length, limit: GUEST_LIMIT };
}

// ── Check what's installed locally (cross-platform) ──────────────────────────
const IS_WIN = process.platform === 'win32';

function hasCmd(cmd) {
  try {
    if (IS_WIN) {
      // On Windows use 'where' but quote the command to handle special chars like g++
      const out = execSync(`where "${cmd}" 2>nul`, { encoding: 'utf8', stdio: ['pipe','pipe','pipe'] });
      return out.trim().split('\n').some(p => p.trim() && !p.includes('WindowsApps'));
    } else {
      // On Linux/Mac use 'which'
      execSync(`which "${cmd}"`, { encoding: 'utf8', stdio: ['pipe','pipe','pipe'] });
      return true;
    }
  } catch { return false; }
}

// Also try running the command directly as a fallback
function hasCmdFallback(cmd, versionFlag = '--version') {
  if (hasCmd(cmd)) return true;
  try {
    spawnSync(cmd, [versionFlag], { encoding: 'utf8', timeout: 5000 });
    return true;
  } catch { return false; }
}

const INSTALLED = {
  node:    hasCmdFallback('node', '--version'),
  python:  hasCmdFallback('python3', '--version') || hasCmdFallback('python', '--version'),
  go:      hasCmdFallback('go', 'version'),
  java:    hasCmdFallback('java', '--version') && hasCmdFallback('javac', '--version'),
  gcc:     hasCmdFallback('gcc', '--version'),
  gpp:     hasCmdFallback('g++', '--version'),
  php:     hasCmdFallback('php', '--version'),
  ruby:    hasCmdFallback('ruby', '--version'),
  rustc:   hasCmdFallback('rustc', '--version'),
  lua:     hasCmdFallback('lua', '-v') || hasCmdFallback('lua5.4', '-v') || hasCmdFallback('lua5.3', '-v'),
  bash:    hasCmdFallback('bash', '--version'),
  dotnet:  hasCmdFallback('dotnet', '--version'),
  sqlite3: hasCmdFallback('sqlite3', '--version'),
};

console.log('Lab runtime availability:', INSTALLED);

// ── Run code with spawnSync (handles spaces in paths, captures stderr) ────────
function runCode(args, code, ext, timeout = 10000) {
  const tmpDir = os.tmpdir();
  const tmpFile = path.join(tmpDir, `lab_${Date.now()}.${ext}`);
  try {
    fs.writeFileSync(tmpFile, code, 'utf8');
    const [bin, ...binArgs] = args;
    const r = spawnSync(bin, [...binArgs, tmpFile], {
      timeout,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
    });
    return {
      stdout: r.stdout || '',
      stderr: r.stderr || (r.error ? r.error.message : ''),
      exitCode: r.status ?? 1,
    };
  } finally {
    try { fs.unlinkSync(tmpFile); } catch {}
  }
}

// ── Compile + run (C, C++, Rust) ──────────────────────────────────────────────
function compileAndRun(compileArgs, code, srcExt, timeout = 15000) {
  const tmpDir = os.tmpdir();
  const id = Date.now();
  const srcFile = path.join(tmpDir, `lab_${id}.${srcExt}`);
  const outFile = path.join(tmpDir, `lab_${id}.out`);
  try {
    fs.writeFileSync(srcFile, code, 'utf8');
    // Compile
    const [compiler, ...cArgs] = compileArgs;
    const compile = spawnSync(compiler, [...cArgs, '-o', outFile, srcFile], {
      timeout,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
    });
    if (compile.status !== 0) {
      return {
        stdout: compile.stdout || '',
        stderr: compile.stderr || (compile.error ? compile.error.message : 'Compilation failed'),
        exitCode: compile.status ?? 1,
        compile: compile.stderr || '',
      };
    }
    // Run
    const run = spawnSync(outFile, [], { timeout: 10000, maxBuffer: 1024 * 1024, encoding: 'utf8' });
    return {
      stdout: run.stdout || '',
      stderr: run.stderr || '',
      exitCode: run.status ?? 0,
      compile: '',
    };
  } finally {
    try { fs.unlinkSync(srcFile); } catch {}
    try { fs.unlinkSync(outFile); } catch {}
  }
}

// ── Java: needs class name = filename ─────────────────────────────────────────
function runJava(code, timeout = 20000) {
  // Extract public class name from code
  const match = code.match(/public\s+class\s+(\w+)/);
  const className = match ? match[1] : 'Main';
  const tmpDir = path.join(os.tmpdir(), `lab_java_${Date.now()}`);
  const srcFile = path.join(tmpDir, `${className}.java`);
  try {
    fs.mkdirSync(tmpDir, { recursive: true });
    fs.writeFileSync(srcFile, code, 'utf8');
    // Compile
    const compile = spawnSync('javac', [srcFile], {
      timeout,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
      cwd: tmpDir,
    });
    if (compile.status !== 0) {
      return {
        stdout: '',
        stderr: compile.stderr || 'Compilation failed',
        exitCode: compile.status ?? 1,
        compile: compile.stderr || '',
      };
    }
    // Run
    const run = spawnSync('java', ['-cp', tmpDir, className], {
      timeout: 10000,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
    });
    return {
      stdout: run.stdout || '',
      stderr: run.stderr || '',
      exitCode: run.status ?? 0,
      compile: '',
    };
  } finally {
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

// ── Rust ──────────────────────────────────────────────────────────────────────
function runRust(code, timeout = 30000) {
  const tmpDir = path.join(os.tmpdir(), `lab_rs_${Date.now()}`);
  const srcFile = path.join(tmpDir, 'main.rs');
  const outFile = path.join(tmpDir, 'main');
  try {
    fs.mkdirSync(tmpDir, { recursive: true });
    fs.writeFileSync(srcFile, code, 'utf8');
    const compile = spawnSync('rustc', [srcFile, '-o', outFile], {
      timeout,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
      cwd: tmpDir,
    });
    if (compile.status !== 0) {
      return { stdout: '', stderr: compile.stderr || 'Compilation failed', exitCode: 1, compile: compile.stderr || '' };
    }
    const run = spawnSync(outFile, [], { timeout: 10000, maxBuffer: 1024 * 1024, encoding: 'utf8' });
    return { stdout: run.stdout || '', stderr: run.stderr || '', exitCode: run.status ?? 0, compile: '' };
  } finally {
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

// ── SQL (sqlite3) ─────────────────────────────────────────────────────────────
function runSQL(code, timeout = 10000) {
  const tmpDir = os.tmpdir();
  const sqlFile = path.join(tmpDir, `lab_${Date.now()}.sql`);
  try {
    fs.writeFileSync(sqlFile, code, 'utf8');
    const r = spawnSync('sqlite3', [':memory:'], {
      input: code,
      timeout,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
    });
    return { stdout: r.stdout || '', stderr: r.stderr || '', exitCode: r.status ?? 0, compile: '' };
  } finally {
    try { fs.unlinkSync(sqlFile); } catch {}
  }
}

// ── POST /api/run ─────────────────────────────────────────────────────────────
router.post('/', async (_req, res) => {
  const ip = _req.ip || _req.socket?.remoteAddress || 'unknown';

  // Try authenticated user first
  const user = await getUser(_req);
  let rateInfo;

  if (user) {
    rateInfo = await user.consumeLabRun();
    if (!rateInfo.ok) {
      telegramService.sendLabNotify({
        title: '⚠️ Lab Limit Reached',
        userId: user.userId,
        name: user.name,
        extra: `Used: ${rateInfo.used}/${rateInfo.limit} — resets in ~${rateInfo.resetHrs}h`,
      });
      return res.status(429).json({
        error: `កំណត់ ${rateInfo.limit} ដង/ថ្ងៃ — អស់ហើយ! នឹងបើកឡើងវិញក្នុង ~${rateInfo.resetHrs} ម៉ោង`,
        used: rateInfo.used, limit: rateInfo.limit,
      });
    }
  } else {
    // Guest fallback
    rateInfo = checkGuestRate(ip);
    if (!rateInfo.ok) {
      return res.status(429).json({ error: rateInfo.msg, used: rateInfo.used, limit: rateInfo.limit });
    }
  }

  const { lang, code } = _req.body || {};
  if (!lang || !code) return res.status(400).json({ error: 'lang and code required' });
  if (code.length > 100000) return res.status(400).json({ error: 'Code too large (max 100KB)' });

  let result;

  try {
    switch (lang) {
      case 'python':
      case 'py': {
        const pyCmd = ['python3', 'python'].find(c => hasCmd(c));
        if (!pyCmd) return res.status(501).json({ error: 'Python not installed on server.' });
        result = runCode([pyCmd], code, 'py');
        break;
      }

      case 'go': {
        if (!INSTALLED.go) return res.status(501).json({ error: 'Go not installed. Download: https://go.dev/dl/' });
        const goDir = path.join(os.tmpdir(), `lab_go_${Date.now()}`);
        fs.mkdirSync(goDir, { recursive: true });
        const goFile = path.join(goDir, 'main.go');
        try {
          fs.writeFileSync(goFile, code, 'utf8');
          const r = spawnSync('go', ['run', goFile], { timeout: 15000, maxBuffer: 1024*1024, encoding: 'utf8', cwd: goDir });
          result = { stdout: r.stdout||'', stderr: r.stderr||'', exitCode: r.status??0, compile: '' };
        } finally {
          try { fs.rmSync(goDir, { recursive: true, force: true }); } catch {}
        }
        break;
      }

      case 'js':
      case 'javascript':
        if (!INSTALLED.node) return res.status(501).json({ error: 'Node.js not installed on server.' });
        result = runCode(['node'], code, 'js');
        break;

      case 'java':
        if (!INSTALLED.java) return res.status(501).json({ error: 'Java (javac + java) not installed on server.' });
        result = runJava(code);
        break;

      case 'c':
        if (!INSTALLED.gcc) return res.status(501).json({ error: 'GCC not installed on server.' });
        result = compileAndRun(['gcc'], code, 'c');
        break;

      case 'cpp':
        if (!INSTALLED.gpp) return res.status(501).json({ error: 'G++ not installed on server.' });
        result = compileAndRun(['g++', '-std=c++17'], code, 'cpp');
        break;

      case 'rust':
        if (!INSTALLED.rustc) return res.status(501).json({ error: 'Rust (rustc) not installed. Download: https://rustup.rs/' });
        result = runRust(code);
        break;

      case 'php':
        if (!INSTALLED.php) return res.status(501).json({ error: 'PHP not installed on server.' });
        result = runCode(['php'], code, 'php');
        break;

      case 'ruby':
      case 'rb':
        if (!INSTALLED.ruby) return res.status(501).json({ error: 'Ruby not installed on server.' });
        result = runCode(['ruby'], code, 'rb');
        break;

      case 'lua': {
        const luaCmd = ['lua', 'lua54', 'lua5.4', 'lua5.3'].find(c => hasCmd(c));
        if (!luaCmd) return res.status(501).json({ error: 'Lua not installed on server.' });
        result = runCode([luaCmd], code, 'lua');
        break;
      }

      case 'bash':
      case 'sh':
        if (!INSTALLED.bash) return res.status(501).json({ error: 'Bash not installed on server.' });
        result = runCode(['bash'], code, 'sh');
        break;

      case 'csharp':
      case 'cs':
        if (!INSTALLED.dotnet && !hasCmd('dotnet-script')) return res.status(501).json({ error: 'dotnet not installed. Download: https://dotnet.microsoft.com/download' });
        result = runCSharp(code);
        break;

      case 'sql':
      case 'sqlite3':
        if (!INSTALLED.sqlite3) return res.status(501).json({ error: 'sqlite3 not installed on server.' });
        result = runSQL(code);
        break;

      default:
        return res.status(400).json({
          error: `Language "${lang}" requires external compiler. Available locally: ${Object.entries(INSTALLED).filter(([,v])=>v).map(([k])=>k).join(', ')}`,
        });
    }

    res.json({
      stdout:    result.stdout  || '',
      stderr:    result.stderr  || '',
      compile:   result.compile || '',
      exitCode:  result.exitCode,
      remaining: rateInfo.remaining,
      used:      rateInfo.used,
      limit:     rateInfo.limit,
      unlimited: rateInfo.unlimited || false,
      engine:    'local',
    });

    // Notify Telegram on errors (exit code != 0)
    if (result.exitCode !== 0 && user) {
      telegramService.sendLabNotify({
        title: '🔴 Lab Run Error',
        userId: user.userId,
        name: user.name,
        extra: `Lang: ${lang}\nExit: ${result.exitCode}\n${(result.stderr || '').slice(0, 200)}`,
      });
    }

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── C# via dotnet-script or script runner ─────────────────────────────────────
function runCSharp(code, timeout = 20000) {
  // Try dotnet-script first
  if (hasCmd('dotnet-script')) {
    return runCode(['dotnet-script'], code, 'csx');
  }
  // Fallback: wrap in a minimal project
  const tmpDir = path.join(os.tmpdir(), `lab_cs_${Date.now()}`);
  try {
    fs.mkdirSync(tmpDir, { recursive: true });
    // Wrap top-level code in a class if needed
    const wrapped = code.includes('static void Main') ? code
      : `using System;\nclass _Program { static void Main(string[] args) {\n${code}\n} }`;
    fs.writeFileSync(path.join(tmpDir, 'Program.cs'), wrapped, 'utf8');
    fs.writeFileSync(path.join(tmpDir, 'lab.csproj'),
      `<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net8.0</TargetFramework></PropertyGroup></Project>`,
      'utf8');
    const build = spawnSync('dotnet', ['run', '--project', tmpDir], {
      timeout,
      maxBuffer: 1024 * 1024,
      encoding: 'utf8',
      cwd: tmpDir,
    });
    return { stdout: build.stdout||'', stderr: build.stderr||'', exitCode: build.status??0, compile: '' };
  } finally {
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

// GET /api/run/status
router.get('/status', (_req, res) => {
  res.json({ installed: INSTALLED });
});

// POST /api/run/consume — consume one rate limit token (for client-side JS/TS/Py/HTML)
router.post('/consume', async (_req, res) => {
  const ip = _req.ip || _req.socket?.remoteAddress || 'unknown';
  const user = await getUser(_req);
  let rateInfo;

  if (user) {
    rateInfo = await user.consumeLabRun();
    if (!rateInfo.ok) {
      return res.status(429).json({
        error: `កំណត់ ${rateInfo.limit} ដង/ថ្ងៃ — អស់ហើយ! នឹងបើកឡើងវិញក្នុង ~${rateInfo.resetHrs} ម៉ោង`,
        used: rateInfo.used, limit: rateInfo.limit,
      });
    }
  } else {
    rateInfo = checkGuestRate(ip);
    if (!rateInfo.ok) {
      return res.status(429).json({ error: rateInfo.msg, used: rateInfo.used, limit: rateInfo.limit });
    }
  }

  res.json({
    remaining: rateInfo.remaining,
    used:      rateInfo.used,
    limit:     rateInfo.limit,
    unlimited: rateInfo.unlimited || false,
  });
});

// GET /api/run/limits — get current user's rate limit info
router.get('/limits', async (_req, res) => {
  const user = await getUser(_req);
  if (user) {
    const now = new Date();
    // Auto-reset if needed
    if (now > user.lab.resetAt) {
      user.lab.used = 0;
      user.lab.resetAt = new Date(now.getTime() + 86400000);
      await user.save();
    }
    return res.json({
      loggedIn:  true,
      unlimited: user.lab.unlimited,
      used:      user.lab.used,
      limit:     user.lab.limit,
      remaining: user.lab.unlimited ? 9999 : Math.max(0, user.lab.limit - user.lab.used),
      resetAt:   user.lab.resetAt,
    });
  }
  // Guest — can't know exact count without IP tracking here, return defaults
  res.json({ loggedIn: false, limit: GUEST_LIMIT, remaining: null });
});

module.exports = router;
