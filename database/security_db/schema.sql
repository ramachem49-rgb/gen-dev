-- បង្កើត Security Events Table
CREATE TABLE IF NOT EXISTS security_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id TEXT UNIQUE NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    event_type TEXT NOT NULL,
    severity TEXT CHECK(severity IN ('INFO', 'WARNING', 'ERROR', 'CRITICAL')),
    source_ip TEXT,
    user_id TEXT,
    username TEXT,
    description TEXT,
    details TEXT, -- JSON data
    action_taken TEXT,
    resolved BOOLEAN DEFAULT 0,
    resolved_at DATETIME,
    resolved_by TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_security_events_timestamp ON security_events(timestamp DESC);
CREATE INDEX idx_security_events_type ON security_events(event_type);
CREATE INDEX idx_security_events_severity ON security_events(severity);
CREATE INDEX idx_security_events_source_ip ON security_events(source_ip);
CREATE INDEX idx_security_events_resolved ON security_events(resolved);

-- បង្កើត Failed Logins Table
CREATE TABLE IF NOT EXISTS failed_logins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT NOT NULL,
    email TEXT,
    attempt_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    reason TEXT,
    country TEXT,
    city TEXT,
    blocked BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_failed_logins_ip ON failed_logins(ip);
CREATE INDEX idx_failed_logins_attempt_time ON failed_logins(attempt_time DESC);

-- បង្កើត API Keys Table
CREATE TABLE IF NOT EXISTS api_keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key_hash TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    user_id TEXT NOT NULL,
    permissions TEXT, -- JSON array
    rate_limit INTEGER DEFAULT 100,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,
    last_used_at DATETIME,
    revoked BOOLEAN DEFAULT 0,
    revoked_at DATETIME,
    created_by TEXT,
    description TEXT
);

CREATE INDEX idx_api_keys_user_id ON api_keys(user_id);
CREATE INDEX idx_api_keys_expires_at ON api_keys(expires_at);

-- បង្កើត Rate Limiting Table
CREATE TABLE IF NOT EXISTS rate_limits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT NOT NULL,
    endpoint TEXT,
    request_count INTEGER DEFAULT 1,
    window_start DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_request DATETIME DEFAULT CURRENT_TIMESTAMP,
    blocked BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_rate_limits_ip_window ON rate_limits(ip, window_start);
CREATE INDEX idx_rate_limits_blocked ON rate_limits(blocked);

-- បង្កើត Security Alerts Table
CREATE TABLE IF NOT EXISTS security_alerts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    alert_id TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    severity TEXT CHECK(severity IN ('INFO', 'WARNING', 'ERROR', 'CRITICAL')),
    category TEXT,
    source TEXT,
    affected_ips TEXT, -- JSON array
    affected_users TEXT, -- JSON array
    metadata TEXT, -- JSON
    status TEXT DEFAULT 'NEW' CHECK(status IN ('NEW', 'ACKNOWLEDGED', 'IN_PROGRESS', 'RESOLVED', 'IGNORED')),
    acknowledged_by TEXT,
    acknowledged_at DATETIME,
    resolved_by TEXT,
    resolved_at DATETIME,
    resolution_notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_security_alerts_status ON security_alerts(status);
CREATE INDEX idx_security_alerts_severity ON security_alerts(severity);
CREATE INDEX idx_security_alerts_created ON security_alerts(created_at DESC);

-- បង្កើត Audit Log Table
CREATE TABLE IF NOT EXISTS audit_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_id TEXT UNIQUE NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id TEXT,
    username TEXT,
    action TEXT NOT NULL,
    resource_type TEXT,
    resource_id TEXT,
    old_value TEXT, -- JSON
    new_value TEXT, -- JSON
    ip_address TEXT,
    user_agent TEXT,
    session_id TEXT,
    status TEXT CHECK(status IN ('SUCCESS', 'FAILURE')),
    error_message TEXT,
    metadata TEXT, -- JSON
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_log_timestamp ON audit_log(timestamp DESC);
CREATE INDEX idx_audit_log_user ON audit_log(user_id);
CREATE INDEX idx_audit_log_action ON audit_log(action);
CREATE INDEX idx_audit_log_resource ON audit_log(resource_type, resource_id);

-- បង្កើត Threat Intelligence Table
CREATE TABLE IF NOT EXISTS threat_intel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    indicator TEXT NOT NULL,
    type TEXT CHECK(type IN ('IP', 'DOMAIN', 'URL', 'HASH', 'EMAIL')),
    threat_type TEXT,
    confidence INTEGER CHECK(confidence >= 0 AND confidence <= 100),
    severity TEXT CHECK(severity IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
    source TEXT,
    first_seen DATETIME,
    last_seen DATETIME,
    metadata TEXT, -- JSON
    expires_at DATETIME,
    active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_threat_intel_indicator ON threat_intel(indicator);
CREATE INDEX idx_threat_intel_type ON threat_intel(type);
CREATE INDEX idx_threat_intel_active ON threat_intel(active);
CREATE INDEX idx_threat_intel_expires ON threat_intel(expires_at);

-- បង្កើត Blocked IPs Table
CREATE TABLE IF NOT EXISTS blocked_ips (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT UNIQUE NOT NULL,
    reason TEXT NOT NULL,
    severity TEXT DEFAULT 'MEDIUM',
    blocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,
    attempts INTEGER DEFAULT 0,
    first_seen DATETIME,
    last_seen DATETIME,
    country TEXT,
    isp TEXT,
    whitelisted BOOLEAN DEFAULT 0,
    notes TEXT,
    blocked_by TEXT,
    unblocked_at DATETIME,
    unblocked_by TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_blocked_ips_ip ON blocked_ips(ip);
CREATE INDEX idx_blocked_ips_expires ON blocked_ips(expires_at);
CREATE INDEX idx_blocked_ips_whitelisted ON blocked_ips(whitelisted);

-- បង្កើត Triggers for updated_at
CREATE TRIGGER update_security_events_updated_at 
    AFTER UPDATE ON security_events
BEGIN
    UPDATE security_events SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER update_security_alerts_updated_at 
    AFTER UPDATE ON security_alerts
BEGIN
    UPDATE security_alerts SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER update_threat_intel_updated_at 
    AFTER UPDATE ON threat_intel
BEGIN
    UPDATE threat_intel SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER update_blocked_ips_updated_at 
    AFTER UPDATE ON blocked_ips
BEGIN
    UPDATE blocked_ips SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;