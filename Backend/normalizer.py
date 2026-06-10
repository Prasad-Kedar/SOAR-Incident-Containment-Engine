def normalize_alert(alert):

    return {
        "src_ip": alert.src_ip.strip(),
        "severity": alert.severity.lower(),
        "event_type": alert.event_type.lower(),
        "timestamp": alert.timestamp
    }