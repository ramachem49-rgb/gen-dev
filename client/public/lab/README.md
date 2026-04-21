# Lab — Standalone Code Environment

Standalone browser-based lab. No backend required.

## Open
Just open `lab/index.html` in any browser — no server needed.

## Features

### ⌨ Terminal
- Commands: `ls`, `cd`, `pwd`, `echo`, `cat`, `touch`, `mkdir`, `rm`, `mv`, `cp`, `whoami`, `date`, `history`, `clear`, `help`
- Arrow Up/Down — command history
- Tab — autocomplete filenames
- Virtual filesystem stored in `localStorage`

### 📁 File Manager
- Create, edit, delete, download files
- Upload files from your computer
- Folder tree navigation
- Max file size: 1MB

### ▶ Sandbox
- **JavaScript** — runs in sandboxed iframe (no DOM/fetch/eval access)
- **Python** — runs via Skulpt (client-side interpreter)
- Timeout: 5 seconds
- Rate limit: 20 runs/minute
- `Ctrl+Enter` to run

## Security
- All code runs client-side only
- JS sandbox uses `iframe[sandbox]` with strict CSP
- No external network requests from user code
- Rate limiting: 60 actions/min (terminal), 20 runs/min (sandbox)
- Input sanitization on all file operations

## Storage
- Virtual filesystem: `localStorage` key `lab_vfs`
- Command history: `localStorage` key `lab_history`
- Reset button clears all data
