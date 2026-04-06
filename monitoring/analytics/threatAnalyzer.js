const fs = require('fs');
const path = require('path');

class ThreatAnalyzer {
  constructor() {
    this.threatData = [];
    this.patterns = new Map();
    this.correlations = new Map();
    this.loadHistoricalData();
  }
  
  loadHistoricalData() {
    const dataPath = path.join(__dirname, '../logs/attacks.json');
    if (fs.existsSync(dataPath)) {
      try {
        const data = fs.readFileSync(dataPath, 'utf8');
        const parsed = JSON.parse(data);
        this.threatData = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error('Failed to load historical data:', error);
        this.threatData = [];
      }
    }
  }
  
  analyzeThreatPattern(attacks) {
    const analysis = {
      patterns: [],
      correlations: [],
      predictions: [],
      riskScore: 0,
      recommendations: []
    };
    
    // Analyze attack patterns
    const patterns = this.detectPatterns(attacks);
    analysis.patterns = patterns;
    
    // Find correlations
    const correlations = this.findCorrelations(attacks);
    analysis.correlations = correlations;
    
    // Predict future threats
    const predictions = this.predictThreats(attacks);
    analysis.predictions = predictions;
    
    // Calculate risk score
    analysis.riskScore = this.calculateRiskScore(attacks);
    
    // Generate recommendations
    analysis.recommendations = this.generateRecommendations(analysis);
    
    return analysis;
  }
  
  detectPatterns(attacks) {
    const patterns = [];
    
    // Time-based patterns
    const timePattern = this.analyzeTimePattern(attacks);
    if (timePattern) patterns.push(timePattern);
    
    // Source-based patterns
    const sourcePattern = this.analyzeSourcePattern(attacks);
    if (sourcePattern) patterns.push(sourcePattern);
    
    // Target-based patterns
    const targetPattern = this.analyzeTargetPattern(attacks);
    if (targetPattern) patterns.push(targetPattern);
    
    // Sequential patterns
    const sequentialPattern = this.analyzeSequentialPattern(attacks);
    if (sequentialPattern) patterns.push(sequentialPattern);
    
    return patterns;
  }
  
  analyzeTimePattern(attacks) {
    const timeDistribution = {};
    
    attacks.forEach(attack => {
      const hour = new Date(attack.timestamp).getHours();
      timeDistribution[hour] = (timeDistribution[hour] || 0) + 1;
    });
    
    const peakHours = Object.entries(timeDistribution)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([hour, count]) => ({ hour: parseInt(hour), count }));
    
    if (peakHours.length > 0) {
      return {
        type: 'TIME_PATTERN',
        description: 'Attack time distribution detected',
        peakHours,
        severity: 'MEDIUM'
      };
    }
    
    return null;
  }
  
  analyzeSourcePattern(attacks) {
    const sourceDistribution = {};
    
    attacks.forEach(attack => {
      const ip = attack.ip;
      sourceDistribution[ip] = (sourceDistribution[ip] || 0) + 1;
    });
    
    const topSources = Object.entries(sourceDistribution)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([ip, count]) => ({ ip, count }));
    
    if (topSources.length > 0 && topSources[0].count > 10) {
      return {
        type: 'SOURCE_PATTERN',
        description: 'Repeated attacks from same sources',
        topSources,
        severity: topSources[0].count > 50 ? 'HIGH' : 'MEDIUM'
      };
    }
    
    return null;
  }
  
  analyzeTargetPattern(attacks) {
    const targetDistribution = {};
    
    attacks.forEach(attack => {
      const target = attack.target || attack.endpoint || 'unknown';
      targetDistribution[target] = (targetDistribution[target] || 0) + 1;
    });
    
    const topTargets = Object.entries(targetDistribution)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([target, count]) => ({ target, count }));
    
    if (topTargets.length > 0) {
      return {
        type: 'TARGET_PATTERN',
        description: 'Focused attacks on specific targets',
        topTargets,
        severity: 'HIGH'
      };
    }
    
    return null;
  }
  
  analyzeSequentialPattern(attacks) {
    const sequences = [];
    let currentSequence = [];
    let lastTime = null;
    
    // Sort attacks by time
    const sortedAttacks = [...attacks].sort((a, b) => 
      new Date(a.timestamp) - new Date(b.timestamp)
    );
    
    for (const attack of sortedAttacks) {
      const currentTime = new Date(attack.timestamp);
      
      if (lastTime && (currentTime - lastTime) < 60000) { // Within 1 minute
        currentSequence.push(attack);
      } else {
        if (currentSequence.length > 1) {
          sequences.push([...currentSequence]);
        }
        currentSequence = [attack];
      }
      
      lastTime = currentTime;
    }
    
    if (currentSequence.length > 1) {
      sequences.push(currentSequence);
    }
    
    if (sequences.length > 0) {
      const avgSequenceLength = sequences.reduce((sum, seq) => sum + seq.length, 0) / sequences.length;
      
      return {
        type: 'SEQUENTIAL_PATTERN',
        description: 'Automated attack sequence detected',
        sequenceCount: sequences.length,
        avgLength: avgSequenceLength,
        severity: avgSequenceLength > 5 ? 'HIGH' : 'MEDIUM'
      };
    }
    
    return null;
  }
  
  findCorrelations(attacks) {
    const correlations = [];
    
    // Correlation between attack types
    const typeCorrelation = this.correlateAttackTypes(attacks);
    if (typeCorrelation) correlations.push(typeCorrelation);
    
    // Correlation with external factors
    const externalCorrelation = this.correlateExternalFactors(attacks);
    if (externalCorrelation) correlations.push(externalCorrelation);
    
    // Geographic correlation
    const geoCorrelation = this.correlateGeographicData(attacks);
    if (geoCorrelation) correlations.push(geoCorrelation);
    
    return correlations;
  }
  
  correlateAttackTypes(attacks) {
    const typePairs = new Map();
    
    for (let i = 0; i < attacks.length - 1; i++) {
      const currentType = attacks[i].type;
      const nextType = attacks[i + 1].type;
      const pair = `${currentType}->${nextType}`;
      
      typePairs.set(pair, (typePairs.get(pair) || 0) + 1);
    }
    
    const topPairs = Array.from(typePairs.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    if (topPairs.length > 0 && topPairs[0][1] > 5) {
      return {
        type: 'ATTACK_TYPE_CORRELATION',
        description: 'Attack sequences follow predictable patterns',
        topSequences: topPairs.map(([pair, count]) => ({ sequence: pair, count })),
        confidence: 'HIGH'
      };
    }
    
    return null;
  }
  
  correlateExternalFactors(attacks) {
    // This would integrate with external threat intelligence feeds
    // Placeholder for external correlation logic
    
    const correlations = [];
    
    // Check for correlation with known threat actors
    const threatActors = this.matchThreatActors(attacks);
    if (threatActors.length > 0) {
      correlations.push({
        type: 'THREAT_ACTOR',
        description: 'Attacks match known threat actor patterns',
        actors: threatActors,
        confidence: 'MEDIUM'
      });
    }
    
    return correlations.length > 0 ? correlations[0] : null;
  }
  
  correlateGeographicData(attacks) {
    const geoDistribution = {};
    
    attacks.forEach(attack => {
      const country = attack.country || 'Unknown';
      geoDistribution[country] = (geoDistribution[country] || 0) + 1;
    });
    
    const topCountries = Object.entries(geoDistribution)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    if (topCountries.length > 0 && topCountries[0][1] > attacks.length * 0.5) {
      return {
        type: 'GEOGRAPHIC_CORRELATION',
        description: 'Attacks concentrated in specific regions',
        topCountries: topCountries.map(([country, count]) => ({ country, count })),
        concentration: (topCountries[0][1] / attacks.length * 100).toFixed(1) + '%'
      };
    }
    
    return null;
  }
  
  matchThreatActors(attacks) {
    // This is a simplified version - in production, integrate with threat intelligence feeds
    const threatActorPatterns = {
      'APT28': ['phishing', 'credential_theft', 'reconnaissance'],
      'Lazarus': ['financial', 'crypto', 'malware'],
      'Anonymous': ['ddos', 'defacement', 'leak']
    };
    
    const matchedActors = [];
    const attackTypes = [...new Set(attacks.map(a => a.type))];
    
    for (const [actor, patterns] of Object.entries(threatActorPatterns)) {
      const matchCount = patterns.filter(p => attackTypes.includes(p)).length;
      if (matchCount > 0) {
        matchedActors.push({
          actor,
          matchScore: (matchCount / patterns.length) * 100,
          matchedPatterns: patterns.filter(p => attackTypes.includes(p))
        });
      }
    }
    
    return matchedActors.filter(a => a.matchScore > 50);
  }
  
  predictThreats(attacks) {
    const predictions = [];
    
    // Predict based on time patterns
    const timePrediction = this.predictByTime(attacks);
    if (timePrediction) predictions.push(timePrediction);
    
    // Predict based on attack progression
    const progressionPrediction = this.predictByProgression(attacks);
    if (progressionPrediction) predictions.push(progressionPrediction);
    
    // Predict based on historical data
    const historicalPrediction = this.predictByHistory(attacks);
    if (historicalPrediction) predictions.push(historicalPrediction);
    
    return predictions;
  }
  
  predictByTime(attacks) {
    const lastAttack = new Date(Math.max(...attacks.map(a => new Date(a.timestamp))));
    const now = new Date();
    const timeSinceLastAttack = now - lastAttack;
    
    // If attacks were frequent, predict next attack soon
    if (attacks.length > 10 && timeSinceLastAttack < 3600000) {
      const avgInterval = this.calculateAverageInterval(attacks);
      
      return {
        type: 'TIME_BASED',
        description: 'Next attack predicted based on frequency',
        predictedTime: new Date(lastAttack.getTime() + avgInterval),
        confidence: 70,
        timeWindow: `${Math.floor(avgInterval / 60000)} minutes`
      };
    }
    
    return null;
  }
  
  predictByProgression(attacks) {
    // Analyze attack progression (reconnaissance -> exploitation)
    const stages = {
      recon: attacks.filter(a => a.type === 'SCANNER' || a.type === 'RECONNAISSANCE'),
      exploit: attacks.filter(a => ['SQL_INJECTION', 'XSS', 'RCE'].includes(a.type)),
      post: attacks.filter(a => a.type === 'PRIVILEGE_ESCALATION' || a.type === 'PERSISTENCE')
    };
    
    if (stages.recon.length > 5 && stages.exploit.length === 0) {
      return {
        type: 'PROGRESSION_BASED',
        description: 'Reconnaissance phase detected - exploitation attempts likely incoming',
        predictedAttackTypes: ['SQL_INJECTION', 'XSS', 'RCE'],
        urgency: 'HIGH',
        confidence: 85,
        timeFrame: 'Next 1-6 hours'
      };
    }
    
    return null;
  }
  
  predictByHistory(attacks) {
    // Analyze historical attack patterns from same sources
    const sourceGroups = new Map();
    
    attacks.forEach(attack => {
      if (!sourceGroups.has(attack.ip)) {
        sourceGroups.set(attack.ip, []);
      }
      sourceGroups.get(attack.ip).push(attack);
    });
    
    const predictiveSources = Array.from(sourceGroups.entries())
      .filter(([_, history]) => history.length > 3)
      .map(([ip, history]) => {
        const commonTypes = this.getMostCommonTypes(history);
        return {
          ip,
          predictedType: commonTypes[0],
          confidence: (commonTypes[0].count / history.length) * 100
        };
      })
      .filter(p => p.confidence > 60);
    
    if (predictiveSources.length > 0) {
      return {
        type: 'HISTORICAL_BASED',
        description: 'Predictions based on historical attacker behavior',
        predictions: predictiveSources,
        confidence: 75
      };
    }
    
    return null;
  }
  
  calculateAverageInterval(attacks) {
    const sortedAttacks = [...attacks].sort((a, b) => 
      new Date(a.timestamp) - new Date(b.timestamp)
    );
    
    let totalInterval = 0;
    let intervals = 0;
    
    for (let i = 1; i < sortedAttacks.length; i++) {
      const interval = new Date(sortedAttacks[i].timestamp) - new Date(sortedAttacks[i-1].timestamp);
      totalInterval += interval;
      intervals++;
    }
    
    return intervals > 0 ? totalInterval / intervals : 0;
  }
  
  getMostCommonTypes(attacks) {
    const typeCount = {};
    attacks.forEach(a => {
      typeCount[a.type] = (typeCount[a.type] || 0) + 1;
    });
    
    return Object.entries(typeCount)
      .map(([type, count]) => ({ type, count }))
      .sort((a, b) => b.count - a.count);
  }
  
  calculateRiskScore(attacks) {
    let score = 0;
    
    // Factor 1: Attack volume
    if (attacks.length > 100) score += 30;
    else if (attacks.length > 50) score += 20;
    else if (attacks.length > 10) score += 10;
    
    // Factor 2: Attack severity
    const criticalCount = attacks.filter(a => a.severity === 'CRITICAL').length;
    const highCount = attacks.filter(a => a.severity === 'HIGH').length;
    
    score += criticalCount * 5;
    score += highCount * 2;
    
    // Factor 3: Attack diversity
    const uniqueTypes = new Set(attacks.map(a => a.type)).size;
    if (uniqueTypes > 3) score += 15;
    else if (uniqueTypes > 1) score += 5;
    
    // Factor 4: Persistence
    const uniqueIPs = new Set(attacks.map(a => a.ip)).size;
    if (uniqueIPs > 10) score += 20;
    else if (uniqueIPs > 5) score += 10;
    
    // Cap at 100
    return Math.min(score, 100);
  }
  
  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.riskScore > 75) {
      recommendations.push('🚨 CRITICAL: Implement emergency security measures immediately');
      recommendations.push('Enable full DDoS protection and activate incident response team');
    } else if (analysis.riskScore > 50) {
      recommendations.push('⚠️ HIGH: Strengthen security posture');
      recommendations.push('Review and update firewall rules');
      recommendations.push('Increase monitoring frequency');
    } else if (analysis.riskScore > 25) {
      recommendations.push('🟡 MEDIUM: Review security configurations');
      recommendations.push('Update WAF rules based on attack patterns');
    }
    
    // Pattern-based recommendations
    analysis.patterns.forEach(pattern => {
      switch(pattern.type) {
        case 'TIME_PATTERN':
          recommendations.push(`Increase monitoring during peak hours: ${pattern.peakHours.map(h => `${h.hour}:00`).join(', ')}`);
          break;
        case 'SOURCE_PATTERN':
          recommendations.push(`Block or rate-limit top attacking IPs: ${pattern.topSources.map(s => s.ip).join(', ')}`);
          break;
        case 'TARGET_PATTERN':
          recommendations.push(`Apply additional protection to vulnerable endpoints: ${pattern.topTargets.map(t => t.target).join(', ')}`);
          break;
        case 'SEQUENTIAL_PATTERN':
          recommendations.push('Implement automated blocking for sequential attack patterns');
          break;
      }
    });
    
    // Correlation-based recommendations
    analysis.correlations.forEach(correlation => {
      if (correlation.type === 'THREAT_ACTOR') {
        recommendations.push(`Research and prepare defenses against identified threat actors: ${correlation.actors.map(a => a.actor).join(', ')}`);
      }
      if (correlation.type === 'GEOGRAPHIC_CORRELATION') {
        recommendations.push(`Consider geographic restrictions for high-risk countries: ${correlation.topCountries.map(c => c.country).join(', ')}`);
      }
    });
    
    // Prediction-based recommendations
    analysis.predictions.forEach(prediction => {
      if (prediction.type === 'PROGRESSION_BASED') {
        recommendations.push(`Prepare for exploitation attempts - review and patch vulnerabilities`);
        recommendations.push(`Enable aggressive rate limiting for authentication endpoints`);
      }
      if (prediction.type === 'HISTORICAL_BASED') {
        prediction.predictions.forEach(p => {
          recommendations.push(`Monitor predicted attack from ${p.ip} - expected type: ${p.predictedType}`);
        });
      }
    });
    
    // Remove duplicates
    return [...new Set(recommendations)];
  }
  
  generateThreatReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalAttacks: this.threatData.length,
        uniqueAttackers: new Set(this.threatData.map(a => a.ip)).size,
        timeRange: {
          start: this.threatData[0]?.timestamp,
          end: this.threatData[this.threatData.length - 1]?.timestamp
        }
      },
      analysis: this.analyzeThreatPattern(this.threatData.slice(-1000)), // Last 1000 attacks
      recommendations: [],
      riskLevel: 'LOW'
    };
    
    const analysis = report.analysis;
    
    if (analysis.riskScore > 75) report.riskLevel = 'CRITICAL';
    else if (analysis.riskScore > 50) report.riskLevel = 'HIGH';
    else if (analysis.riskScore > 25) report.riskLevel = 'MEDIUM';
    else report.riskLevel = 'LOW';
    
    report.recommendations = analysis.recommendations;
    
    return report;
  }
}

module.exports = new ThreatAnalyzer();