from datetime import datetime

VALID_SEVERITIES = {"HIGH", "MEDIUM", "LOW", "CRITICAL"}

def normalize_alert(alert):

    severity = alert.severity.strip().upper() if alert.severity else "LOW"

    if severity not in VALID_SEVERITIES:
        severity = "LOW"

    return {
        "src_ip": alert.src_ip.strip() if alert.src_ip else None,
        "severity": severity,
        "event_type": alert.event_type.lower() if alert.event_type else "unknown",
        "timestamp": alert.timestamp or datetime.utcnow().isoformat()
    }