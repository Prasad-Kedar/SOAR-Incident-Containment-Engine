malicious_ips = [
    "8.8.8.8",
    "1.1.1.1"
]

def check_ip(ip):

    if ip in malicious_ips:
        return {
            "risk_score": 90,
            "threat": True
        }

    return {
        "risk_score": 10,
        "threat": False
    }