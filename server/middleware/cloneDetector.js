const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const alertSystem = require('../monitoring/alerts/notification');

class CloneDetector {
  constructor() {
    this.pageHashes = new Map();
    this.suspiciousDomains = new Map();
    this.beaconEndpoints = [];
    this.watermarks = new Map();
    
    this.setupBeaconEndpoints();
    this.loadPageHashes();
    this.startMonitoring();
  }

  // បង្កើត beacon endpoints សម្រាប់រាវរកការ clone [citation:10]
  setupBeaconEndpoints() {
    // បង្កើត unique paths សម្រាប់ beacon
    const paths = [
      '/.well-known/security.txt',
      '/assets/js/analytics.js',
      '/api/telemetry',
      '/cdn-cgi/trace',
      '/favicon.ico',
      '/robots.txt',
      '/sitemap.xml'
    ];
    
    paths.forEach(path => {
      const beaconId = crypto.randomBytes(16).toString('hex');
      this.beaconEndpoints.push({
        path,
        beaconId,
        createdAt: Date.now()
      });
    });
  }

  // បង្កើត watermark សម្រាប់ទំព័រនីមួយៗ [citation:4]
  generateWatermark(pageId) {
    const watermark = {
      id: pageId,
      timestamp: Date.now(),
      nonce: crypto.randomBytes(32).toString('hex'),
      hmac: crypto.createHmac('sha256', process.env.WATERMARK_SECRET)
        .update(pageId + Date.now())
        .digest('hex')
    };
    
    this.watermarks.set(pageId, watermark);
    return watermark;
  }

  // បង្កើតស្គ្រីបសម្រាប់ដាក់ក្នុង HTML [citation:10]
  generateBeaconScript(pageId) {
    const watermark = this.generateWatermark(pageId);
    const beaconEndpoint = this.beaconEndpoints[
      Math.floor(Math.random() * this.beaconEndpoints.length)
    ];
    
    return `
      <script>
        (function() {
          const beaconData = {
            id: '${watermark.id}',
            timestamp: ${watermark.timestamp},
            nonce: '${watermark.nonce}',
            hmac: '${watermark.hmac}',
            referrer: document.referrer,
            url: window.location.href,
            userAgent: navigator.userAgent
          };
          
          // ផ្ញើ beacon តាមវិធីផ្សេងៗ
          fetch('${beaconEndpoint.path}', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(beaconData),
            mode: 'no-cors',
            cache: 'no-cache'
          });
          
          // Image beacon
          const img = new Image();
          img.src = '${beaconEndpoint.path}?data=' + encodeURIComponent(
            JSON.stringify(beaconData)
          );
          
          // ពិនិត្យមើលថាតើនេះជា clone ដែរឬទេ
          if (window.location.hostname !== '${process.env.DOMAIN}') {
            // ផ្ញើ alert ទៅកាន់ server
            fetch('/api/security/clone-detected', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                cloneDomain: window.location.hostname,
                originalDomain: '${process.env.DOMAIN}',
                pageId: '${watermark.id}'
              })
            });
          }
        })();
      </script>
    `;
  }

  // គណនា hash នៃទំព័រសម្រាប់ប្រៀបធៀប [citation:4]
  calculatePageHash(html) {
    // ដក script និង style ចេញដើម្បីយកតែខ្លឹមសារ
    const cleanHtml = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    return crypto.createHash('sha256').update(cleanHtml).digest('hex');
  }

  // ផ្ទុក page hashes
  loadPageHashes() {
    // គណនា hash សម្រាប់ទំព័រសំខាន់ៗ
    const criticalPages = [
      '/', '/login', '/dashboard', '/lessons', '/about', '/contact'
    ];
    
    criticalPages.forEach(page => {
      // នេះគួរតែយកពី cache ឬ generate ពេលផ្លាស់ប្តូរ
      this.pageHashes.set(page, null);
    });
  }

  // ពិនិត្យរកការ clone [citation:1]
  async detectClone(pageId, html, domain) {
    const currentHash = this.calculatePageHash(html);
    const originalHash = this.pageHashes.get(pageId);
    
    if (!originalHash) {
      this.pageHashes.set(pageId, currentHash);
      return false;
    }
    
    // ប្រៀបធៀប hash
    if (currentHash === originalHash && domain !== process.env.DOMAIN) {
      return true;
    }
    
    return false;
  }

  // ពិនិត្យ domain ស្រដៀងគ្នា (typosquatting) [citation:1][citation:4]
  checkSimilarDomains(domain) {
    const originalDomain = process.env.DOMAIN;
    
    // បង្កើត variations ដែលអាចកើតមាន
    const variations = this.generateDomainVariations(originalDomain);
    
    // ពិនិត្យមើលថាតើ domain នេះជា variation ដែរឬទេ
    return variations.includes(domain);
  }

  // បង្កើត domain variations [citation:1]
  generateDomainVariations(domain) {
    const variations = [];
    const [name, tld] = domain.split('.');
    
    // Typosquatting variations
    const typos = [
      name.replace(/o/g, '0'),
      name.replace(/l/g, '1'),
      name.replace(/e/g, '3'),
      name + 's',
      name.slice(0, -1),
      name + name.slice(-1)
    ];
    
    // TLD swaps
    const tlds = ['.com', '.net', '.org', '.io', '.co', '.app', '.dev'];
    tlds.forEach(newTld => {
      if (newTld !== '.' + tld) {
        variations.push(name + newTld);
      }
    });
    
    // Subdomain tricks
    variations.push('login.' + domain);
    variations.push('secure.' + domain);
    variations.push('account.' + domain);
    
    return [...new Set(variations)];
  }

  // ចាប់ផ្តើមការតាមដាន [citation:10]
  startMonitoring() {
    // ពិនិត្យ beacon endpoints រៀងរាល់ 5 នាទី
    setInterval(() => {
      this.checkBeaconEndpoints();
    }, 300000);
    
    // ស្វែងរក clone domains
    setInterval(() => {
      this.searchCloneDomains();
    }, 3600000); // រៀងរាល់ម៉ោង
  }

  // ពិនិត្យ beacon endpoints
  async checkBeaconEndpoints() {
    for (const endpoint of this.beaconEndpoints) {
      try {
        // ពិនិត្យមើលការហៅមកពី domains ផ្សេង
        const response = await axios.get(
          `https://${process.env.DOMAIN}${endpoint.path}`,
          { timeout: 5000 }
        );
        
        // ពិនិត្យ referer
        if (response.headers['referer']) {
          const refererDomain = new URL(response.headers['referer']).hostname;
          if (refererDomain !== process.env.DOMAIN) {
            this.handleCloneDetection(refererDomain, endpoint.path);
          }
        }
      } catch (error) {
        // Ignore errors
      }
    }
  }

  // ស្វែងរក clone domains [citation:1]
  async searchCloneDomains() {
    const originalDomain = process.env.DOMAIN;
    const variations = this.generateDomainVariations(originalDomain);
    
    for (const variation of variations) {
      try {
        const response = await axios.get(`https://${variation}`, {
          timeout: 5000,
          validateStatus: false
        });
        
        if (response.status === 200) {
          // ពិនិត្យមើលថាតើជា clone ដែរឬទេ
          const html = response.data;
          const isClone = await this.detectClone('/', html, variation);
          
          if (isClone) {
            this.handleCloneDetection(variation, '/');
          }
        }
      } catch (error) {
        // Domain មិនមាន
      }
    }
  }

  // ដោះស្រាយពេលឃើញការ clone [citation:4]
  async handleCloneDetection(cloneDomain, path) {
    console.error(`🚨 Clone detected: ${cloneDomain}${path}`);
    
    // កត់ត្រា
    const detection = {
      timestamp: new Date().toISOString(),
      cloneDomain,
      originalDomain: process.env.DOMAIN,
      path,
      method: 'beacon_detection'
    };
    
    fs.appendFileSync(
      path.join(__dirname, '../logs/clone_detections.log'),
      JSON.stringify(detection) + '\n'
    );
    
    // ផ្ញើ alert
    alertSystem.sendDiscordAlert(
      `⚠️ **Website Clone Detected**\n` +
      `Clone Domain: ${cloneDomain}\n` +
      `Original Domain: ${process.env.DOMAIN}\n` +
      `Path: ${path}\n` +
      `Action: Sending takedown request...`,
      'critical'
    );
    
    // ផ្ញើ takedown request [citation:4]
    await this.sendTakedownRequest(cloneDomain);
    
    // បន្ថែមទៅ blacklist
    this.suspiciousDomains.set(cloneDomain, {
      detectedAt: Date.now(),
      path,
      status: 'takedown_requested'
    });
  }

  // ផ្ញើ takedown request [citation:4]
  async sendTakedownRequest(domain) {
    // DMCA takedown request ទៅ hosting provider
    const hostingProviders = [
      { name: 'Cloudflare', email: 'abuse@cloudflare.com' },
      { name: 'AWS', email: 'abuse@amazonaws.com' },
      { name: 'Google Cloud', email: 'abuse@google.com' }
    ];
    
    // រក hosting provider
    try {
      const response = await axios.get(`https://${domain}`);
      const server = response.headers.server || '';
      
      for (const provider of hostingProviders) {
        if (server.includes(provider.name)) {
          // ផ្ញើ email takedown request
          // នៅទីនេះគួរតែផ្ញើតាម SMTP
          console.log(`Sending DMCA takedown to ${provider.email} for ${domain}`);
          break;
        }
      }
    } catch (error) {
      console.error('Failed to send takedown request:', error);
    }
    
    // រាយការណ៍ទៅ Google Safe Browsing
    try {
      await axios.post(
        `https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?key=${process.env.GOOGLE_SAFE_BROWSING_API_KEY}`,
        {
          client: { clientId: process.env.DOMAIN, clientVersion: '1.0.0' },
          threatInfo: {
            threatTypes: ['SOCIAL_ENGINEERING'],
            platformTypes: ['ANY_PLATFORM'],
            threatEntryTypes: ['URL'],
            threatEntries: [{ url: `https://${domain}` }]
          }
        }
      );
    } catch (error) {
      console.error('Failed to report to Google Safe Browsing:', error);
    }
  }
}

module.exports = new CloneDetector();