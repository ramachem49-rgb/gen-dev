#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════════
# setup-languages.sh — Install all compilers & interpreters for Genz Dev Lab
# Supports: Ubuntu 20.04 / 22.04 / 24.04 / Debian 11+
# Usage:  chmod +x setup-languages.sh && sudo ./setup-languages.sh
# ═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

# ── Colors ────────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; CYAN='\033[0;36m'; BOLD='\033[1m'; NC='\033[0m'

# ── Log setup ─────────────────────────────────────────────────────────────────
LOG_FILE="/var/log/genz-setup.log"
mkdir -p "$(dirname "$LOG_FILE")"
exec > >(tee -a "$LOG_FILE") 2>&1

log()     { echo -e "${GREEN}[✔]${NC} $*"; }
warn()    { echo -e "${YELLOW}[⚠]${NC} $*"; }
error()   { echo -e "${RED}[✗]${NC} $*"; }
section() { echo -e "\n${BOLD}${BLUE}══ $* ══${NC}"; }
info()    { echo -e "${CYAN}[→]${NC} $*"; }

# ── Root check ────────────────────────────────────────────────────────────────
if [[ $EUID -ne 0 ]]; then
  error "Run as root: sudo ./setup-languages.sh"
  exit 1
fi

echo -e "${BOLD}${CYAN}"
echo "╔═══════════════════════════════════════════════╗"
echo "║       Genz Dev Lab — Language Setup           ║"
echo "║  C · C++ · Java · Go · Rust · PHP · Ruby      ║"
echo "║  Python · Node · Kotlin · Swift · R · Lua     ║"
echo "║  Bash · C# · SQLite3 · TypeScript             ║"
echo "╚═══════════════════════════════════════════════╝"
echo -e "${NC}"
echo "Started: $(date)"
echo "Log: $LOG_FILE"

# ── Detect OS ─────────────────────────────────────────────────────────────────
. /etc/os-release
OS_ID="${ID:-ubuntu}"
OS_VER="${VERSION_ID:-22.04}"
info "Detected: $PRETTY_NAME"

# ── Counters ──────────────────────────────────────────────────────────────────
PASS=0; FAIL=0; SKIP=0

ok()   { log "$1"; ((PASS++)); }
fail() { error "$1"; ((FAIL++)); }
skip() { warn "$1 (skipped)"; ((SKIP++)); }

# ═══════════════════════════════════════════════════════════════════════════════
section "System Update & Base Dependencies"
# ═══════════════════════════════════════════════════════════════════════════════
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq \
  curl wget gnupg2 ca-certificates lsb-release software-properties-common \
  apt-transport-https build-essential git unzip zip tar xz-utils \
  libssl-dev libffi-dev zlib1g-dev libreadline-dev libbz2-dev \
  libsqlite3-dev libncurses5-dev libgdbm-dev libnss3-dev \
  pkg-config cmake ninja-build
log "Base dependencies installed"

# ═══════════════════════════════════════════════════════════════════════════════
section "1. C & C++ (GCC / G++)"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq gcc g++ gdb make
if command -v gcc &>/dev/null; then
  ok "GCC $(gcc --version | head -1)"
else
  fail "GCC installation failed"
fi
if command -v g++ &>/dev/null; then
  ok "G++ $(g++ --version | head -1)"
else
  fail "G++ installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "2. Java (OpenJDK 21)"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq default-jdk
if command -v java &>/dev/null && command -v javac &>/dev/null; then
  ok "Java  $(java  --version 2>&1 | head -1)"
  ok "Javac $(javac --version)"
else
  fail "Java installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "3. Go"
# ═══════════════════════════════════════════════════════════════════════════════
GO_VERSION="1.22.4"
GO_ARCH="amd64"
GO_TAR="go${GO_VERSION}.linux-${GO_ARCH}.tar.gz"
GO_URL="https://go.dev/dl/${GO_TAR}"

if command -v go &>/dev/null; then
  ok "Go already installed: $(go version)"
else
  info "Downloading Go ${GO_VERSION}..."
  wget -q "$GO_URL" -O "/tmp/${GO_TAR}"
  rm -rf /usr/local/go
  tar -C /usr/local -xzf "/tmp/${GO_TAR}"
  rm "/tmp/${GO_TAR}"

  # Add to PATH system-wide
  cat > /etc/profile.d/go.sh << 'EOF'
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
EOF
  chmod +x /etc/profile.d/go.sh
  export PATH=$PATH:/usr/local/go/bin

  if command -v go &>/dev/null; then
    ok "Go $(go version)"
  else
    fail "Go installation failed"
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "4. Rust"
# ═══════════════════════════════════════════════════════════════════════════════
if command -v rustc &>/dev/null; then
  ok "Rust already installed: $(rustc --version)"
else
  info "Installing Rust via rustup..."
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | \
    sh -s -- -y --no-modify-path --default-toolchain stable
  export PATH="$HOME/.cargo/bin:$PATH"

  # System-wide symlinks
  ln -sf "$HOME/.cargo/bin/rustc"  /usr/local/bin/rustc  2>/dev/null || true
  ln -sf "$HOME/.cargo/bin/cargo"  /usr/local/bin/cargo  2>/dev/null || true
  ln -sf "$HOME/.cargo/bin/rustup" /usr/local/bin/rustup 2>/dev/null || true

  cat > /etc/profile.d/rust.sh << 'EOF'
export PATH="$HOME/.cargo/bin:$PATH"
EOF
  chmod +x /etc/profile.d/rust.sh

  if command -v rustc &>/dev/null; then
    ok "Rust $(rustc --version)"
  else
    fail "Rust installation failed"
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "5. PHP"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq php-cli php-common
if command -v php &>/dev/null; then
  ok "PHP $(php --version | head -1)"
else
  fail "PHP installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "6. Ruby"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq ruby-full
if command -v ruby &>/dev/null; then
  ok "Ruby $(ruby --version)"
else
  fail "Ruby installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "7. Python 3"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq python3 python3-pip python3-venv python3-dev
# Ensure 'python' command works
if ! command -v python &>/dev/null; then
  update-alternatives --install /usr/bin/python python /usr/bin/python3 1
fi
if command -v python3 &>/dev/null; then
  ok "Python3 $(python3 --version)"
else
  fail "Python3 installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "8. Node.js (LTS) & npm"
# ═══════════════════════════════════════════════════════════════════════════════
if command -v node &>/dev/null; then
  ok "Node.js already installed: $(node --version)"
else
  info "Adding NodeSource repository (Node.js 20 LTS)..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash - 2>/dev/null
  apt-get install -y -qq nodejs
  if command -v node &>/dev/null; then
    ok "Node.js $(node --version)"
    ok "npm $(npm --version)"
  else
    fail "Node.js installation failed"
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "9. TypeScript (ts-node)"
# ═══════════════════════════════════════════════════════════════════════════════
if command -v node &>/dev/null; then
  npm install -g typescript ts-node @types/node --silent 2>/dev/null || \
  npm install -g typescript ts-node @types/node
  if command -v tsc &>/dev/null; then
    ok "TypeScript $(tsc --version)"
    ok "ts-node $(ts-node --version)"
  else
    fail "TypeScript installation failed"
  fi
else
  skip "TypeScript (Node.js not available)"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "10. Kotlin"
# ═══════════════════════════════════════════════════════════════════════════════
KOTLIN_VERSION="2.0.0"
KOTLIN_ZIP="kotlin-compiler-${KOTLIN_VERSION}.zip"
KOTLIN_URL="https://github.com/JetBrains/kotlin/releases/download/v${KOTLIN_VERSION}/${KOTLIN_ZIP}"
KOTLIN_DIR="/opt/kotlinc"

if command -v kotlinc &>/dev/null; then
  ok "Kotlin already installed: $(kotlinc -version 2>&1)"
else
  info "Downloading Kotlin ${KOTLIN_VERSION}..."
  wget -q "$KOTLIN_URL" -O "/tmp/${KOTLIN_ZIP}"
  unzip -q "/tmp/${KOTLIN_ZIP}" -d /opt/
  mv /opt/kotlinc "$KOTLIN_DIR" 2>/dev/null || true
  rm "/tmp/${KOTLIN_ZIP}"

  ln -sf "${KOTLIN_DIR}/bin/kotlinc" /usr/local/bin/kotlinc
  ln -sf "${KOTLIN_DIR}/bin/kotlin"  /usr/local/bin/kotlin

  cat > /etc/profile.d/kotlin.sh << EOF
export PATH=\$PATH:${KOTLIN_DIR}/bin
EOF
  chmod +x /etc/profile.d/kotlin.sh

  if command -v kotlinc &>/dev/null; then
    ok "Kotlin $(kotlinc -version 2>&1)"
  else
    fail "Kotlin installation failed"
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "11. Swift"
# ═══════════════════════════════════════════════════════════════════════════════
SWIFT_VERSION="5.10.1"
UBUNTU_CODENAME=$(lsb_release -cs)

# Map codename to Swift release name
case "$UBUNTU_CODENAME" in
  focal)   SWIFT_UBUNTU="ubuntu2004" ;;
  jammy)   SWIFT_UBUNTU="ubuntu2204" ;;
  noble)   SWIFT_UBUNTU="ubuntu2404" ;;
  *)       SWIFT_UBUNTU="ubuntu2204" ;;
esac

SWIFT_PKG="swift-${SWIFT_VERSION}-RELEASE-${SWIFT_UBUNTU}"
SWIFT_URL="https://download.swift.org/swift-${SWIFT_VERSION}-release/${SWIFT_UBUNTU}/swift-${SWIFT_VERSION}-RELEASE/${SWIFT_PKG}.tar.gz"
SWIFT_DIR="/opt/swift"

if command -v swift &>/dev/null; then
  ok "Swift already installed: $(swift --version 2>&1 | head -1)"
else
  info "Installing Swift dependencies..."
  apt-get install -y -qq \
    binutils libc6-dev libcurl4-openssl-dev libedit2 libgcc-9-dev \
    libpython3-dev libsqlite3-dev libstdc++-9-dev libxml2-dev \
    libz3-dev pkg-config tzdata zlib1g-dev 2>/dev/null || \
  apt-get install -y -qq \
    binutils libc6-dev libcurl4-openssl-dev libedit2 \
    libsqlite3-dev libxml2-dev pkg-config tzdata zlib1g-dev

  info "Downloading Swift ${SWIFT_VERSION} for ${SWIFT_UBUNTU}..."
  if wget -q --spider "$SWIFT_URL" 2>/dev/null; then
    wget -q "$SWIFT_URL" -O "/tmp/${SWIFT_PKG}.tar.gz"
    mkdir -p "$SWIFT_DIR"
    tar -xzf "/tmp/${SWIFT_PKG}.tar.gz" -C "$SWIFT_DIR" --strip-components=1
    rm "/tmp/${SWIFT_PKG}.tar.gz"

    ln -sf "${SWIFT_DIR}/usr/bin/swift"  /usr/local/bin/swift
    ln -sf "${SWIFT_DIR}/usr/bin/swiftc" /usr/local/bin/swiftc

    cat > /etc/profile.d/swift.sh << EOF
export PATH=\$PATH:${SWIFT_DIR}/usr/bin
EOF
    chmod +x /etc/profile.d/swift.sh

    if command -v swift &>/dev/null; then
      ok "Swift $(swift --version 2>&1 | head -1)"
    else
      fail "Swift installation failed"
    fi
  else
    warn "Swift download URL not available for ${SWIFT_UBUNTU}, trying snap..."
    snap install swift --classic 2>/dev/null && ok "Swift (snap)" || fail "Swift installation failed"
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "12. R"
# ═══════════════════════════════════════════════════════════════════════════════
if command -v Rscript &>/dev/null; then
  ok "R already installed: $(Rscript --version 2>&1)"
else
  info "Adding R CRAN repository..."
  UBUNTU_CODENAME=$(lsb_release -cs)
  wget -qO- "https://cloud.r-project.org/bin/linux/ubuntu/marutter_pubkey.asc" \
    | gpg --dearmor -o /usr/share/keyrings/r-project.gpg
  echo "deb [signed-by=/usr/share/keyrings/r-project.gpg] \
    https://cloud.r-project.org/bin/linux/ubuntu ${UBUNTU_CODENAME}-cran40/" \
    > /etc/apt/sources.list.d/r-project.list
  apt-get update -qq
  apt-get install -y -qq r-base r-base-dev

  if command -v Rscript &>/dev/null; then
    ok "R $(Rscript --version 2>&1)"
  else
    # Fallback: install from default repo
    apt-get install -y -qq r-base 2>/dev/null && ok "R (fallback)" || fail "R installation failed"
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "13. Lua"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq lua5.4 lua5.4-dev luarocks 2>/dev/null || \
apt-get install -y -qq lua5.3 lua5.3-dev

LUA_CMD=$(command -v lua5.4 || command -v lua5.3 || command -v lua || true)
if [[ -n "$LUA_CMD" ]]; then
  # Create 'lua' alias if not exists
  if ! command -v lua &>/dev/null; then
    ln -sf "$LUA_CMD" /usr/local/bin/lua
  fi
  ok "Lua $($LUA_CMD -v 2>&1)"
else
  fail "Lua installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "14. Bash"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq bash
if command -v bash &>/dev/null; then
  ok "Bash $(bash --version | head -1)"
else
  fail "Bash installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "15. C# (Mono + dotnet)"
# ═══════════════════════════════════════════════════════════════════════════════
# Try .NET SDK first (preferred)
if command -v dotnet &>/dev/null; then
  ok ".NET already installed: $(dotnet --version)"
else
  info "Installing .NET SDK 8.0..."
  UBUNTU_CODENAME=$(lsb_release -cs)
  wget -q "https://packages.microsoft.com/config/ubuntu/${OS_VER}/packages-microsoft-prod.deb" \
    -O /tmp/packages-microsoft-prod.deb 2>/dev/null || true

  if [[ -f /tmp/packages-microsoft-prod.deb ]]; then
    dpkg -i /tmp/packages-microsoft-prod.deb
    apt-get update -qq
    apt-get install -y -qq dotnet-sdk-8.0
    rm /tmp/packages-microsoft-prod.deb
  fi

  if command -v dotnet &>/dev/null; then
    ok ".NET SDK $(dotnet --version)"
    # Install dotnet-script for single-file C# execution
    dotnet tool install -g dotnet-script 2>/dev/null || true
    ln -sf "$HOME/.dotnet/tools/dotnet-script" /usr/local/bin/dotnet-script 2>/dev/null || true
  else
    warn ".NET SDK failed, installing Mono as fallback..."
    apt-get install -y -qq mono-complete 2>/dev/null || \
    apt-get install -y -qq mono-runtime mono-mcs
    if command -v mcs &>/dev/null; then
      ok "Mono $(mono --version | head -1)"
    else
      fail "C# (Mono/.NET) installation failed"
    fi
  fi
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "16. SQLite3"
# ═══════════════════════════════════════════════════════════════════════════════
apt-get install -y -qq sqlite3 libsqlite3-dev
if command -v sqlite3 &>/dev/null; then
  ok "SQLite3 $(sqlite3 --version)"
else
  fail "SQLite3 installation failed"
fi

# ═══════════════════════════════════════════════════════════════════════════════
section "Environment Variables & Aliases"
# ═══════════════════════════════════════════════════════════════════════════════
cat > /etc/profile.d/genz-lab.sh << 'ENVEOF'
# Genz Dev Lab — Environment
export GENZ_LAB=1
export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java) 2>/dev/null)) 2>/dev/null)
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/.cargo/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# Aliases
alias python=python3
alias py=python3
alias node-ts='ts-node'
alias ll='ls -la'
ENVEOF
chmod +x /etc/profile.d/genz-lab.sh
log "Environment variables configured"

# ═══════════════════════════════════════════════════════════════════════════════
section "Post-Install Version Check"
# ═══════════════════════════════════════════════════════════════════════════════
echo ""
echo -e "${BOLD}Language Versions:${NC}"
echo "─────────────────────────────────────────────────"

check_version() {
  local name="$1"; local cmd="$2"
  if command -v "$cmd" &>/dev/null; then
    local ver
    ver=$($3 2>&1 | head -1)
    printf "  %-12s %s\n" "$name" "$ver"
    return 0
  else
    printf "  %-12s %s\n" "$name" "NOT FOUND"
    return 1
  fi
}

check_version "C (gcc)"    gcc    "gcc --version"
check_version "C++ (g++)"  g++    "g++ --version"
check_version "Java"       java   "java --version"
check_version "Go"         go     "go version"
check_version "Rust"       rustc  "rustc --version"
check_version "PHP"        php    "php --version"
check_version "Ruby"       ruby   "ruby --version"
check_version "Python3"    python3 "python3 --version"
check_version "Node.js"    node   "node --version"
check_version "TypeScript" tsc    "tsc --version"
check_version "ts-node"    ts-node "ts-node --version"
check_version "Kotlin"     kotlinc "kotlinc -version"
check_version "Swift"      swift  "swift --version"
check_version "R"          Rscript "Rscript --version"
check_version "Lua"        lua    "lua -v"
check_version "Bash"       bash   "bash --version"
check_version "SQLite3"    sqlite3 "sqlite3 --version"
if command -v dotnet &>/dev/null; then
  printf "  %-12s %s\n" "C# (.NET)" "$(dotnet --version)"
elif command -v mcs &>/dev/null; then
  printf "  %-12s %s\n" "C# (Mono)" "$(mono --version | head -1)"
else
  printf "  %-12s %s\n" "C#" "NOT FOUND"
fi

echo "─────────────────────────────────────────────────"

# ═══════════════════════════════════════════════════════════════════════════════
section "Quick Smoke Tests"
# ═══════════════════════════════════════════════════════════════════════════════
run_test() {
  local lang="$1"; local cmd="$2"; local expected="$3"
  local out
  out=$(eval "$cmd" 2>&1 | tr -d '\n')
  if echo "$out" | grep -q "$expected"; then
    log "Test $lang: OK"
  else
    warn "Test $lang: got '$out' (expected '$expected')"
  fi
}

run_test "C"       "echo '#include<stdio.h>\nint main(){printf(\"ok\");return 0;}' | gcc -x c - -o /tmp/_t_c && /tmp/_t_c && rm /tmp/_t_c" "ok"
run_test "Python3" "python3 -c 'print(\"ok\")'"  "ok"
run_test "Node.js" "node -e 'console.log(\"ok\")'" "ok"
run_test "Go"      "echo 'package main\nimport \"fmt\"\nfunc main(){fmt.Print(\"ok\")}' > /tmp/_t.go && go run /tmp/_t.go && rm /tmp/_t.go" "ok"
run_test "PHP"     "php -r 'echo \"ok\";'"  "ok"
run_test "Ruby"    "ruby -e 'puts \"ok\"'" "ok"
run_test "Lua"     "lua -e 'print(\"ok\")'" "ok"
run_test "SQLite3" "echo 'SELECT \"ok\";' | sqlite3" "ok"

# ═══════════════════════════════════════════════════════════════════════════════
echo ""
echo -e "${BOLD}${GREEN}═══════════════════════════════════════════════${NC}"
echo -e "${BOLD}${GREEN}  Setup Complete!${NC}"
echo -e "  Passed : ${GREEN}${PASS}${NC}"
echo -e "  Failed : ${RED}${FAIL}${NC}"
echo -e "  Skipped: ${YELLOW}${SKIP}${NC}"
echo -e "  Log    : ${LOG_FILE}"
echo -e "${BOLD}${GREEN}═══════════════════════════════════════════════${NC}"
echo "Finished: $(date)"

if [[ $FAIL -gt 0 ]]; then
  echo -e "${YELLOW}Some installations failed. Check log: ${LOG_FILE}${NC}"
  exit 1
fi
