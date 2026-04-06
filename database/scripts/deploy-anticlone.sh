#!/bin/bash

echo "🔒 Deploying Anti-Clone Protection..."

# 1. Generate unique hardware fingerprint
NODE_HARDWARE_ID=$(node -e "
const os = require('os');
const crypto = require('crypto');
const interfaces = os.networkInterfaces();
const cpus = os.cpus();
const components = [
  cpus[0].model,
  os.totalmem(),
  os.hostname(),
  os.platform(),
  os.arch()
];
Object.values(interfaces).forEach(iface => {
  iface.forEach(i => {
    if (i.mac !== '00:00:00:00:00:00') components.push(i.mac);
  });
});
const hash = crypto.createHash('sha256').update(components.join('|')).digest('hex');
console.log(hash);
")

echo "Hardware ID: ${NODE_HARDWARE_ID:0:16}..."

# 2. Generate database watermark
DB_WATERMARK=$(openssl rand -hex 32)
echo "DB_WATERMARK=${DB_WATERMARK}" >> .env

# 3. Generate obfuscation keys
OBFUSCATION_KEY=$(openssl rand -hex 32)
echo "OBFUSCATION_KEY=${OBFUSCATION_KEY}" >> .env

# 4. Build frontend with obfuscation
echo "Building frontend with obfuscation..."
cd client
npm run build

# Obfuscate built files
find dist -name "*.js" -type f | while read file; do
  echo "Obfuscating: $file"
  node -e "
    const fs = require('fs');
    const UglifyJS = require('uglify-js');
    const code = fs.readFileSync('$file', 'utf8');
    const result = UglifyJS.minify(code, {
      compress: { passes: 3, drop_console: true },
      mangle: { toplevel: true }
    });
    fs.writeFileSync('$file', result.code);
  "
done

cd ..

# 5. Deploy with clone detection
echo "Starting services with clone detection..."
docker-compose -f docker-compose.yml up -d

# 6. Register with monitoring service
curl -X POST https://monitor.${DOMAIN}/api/register \
  -H "Content-Type: application/json" \
  -d "{
    \"domain\": \"${DOMAIN}\",
    \"hardwareId\": \"${NODE_HARDWARE_ID}\",
    \"timestamp\": \"$(date -Iseconds)\"
  }"

echo "✅ Anti-Clone deployment complete!"