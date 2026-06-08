from fastapi import FastAPI
from models import Alert
from db_session import SessionLocal
from backend.models_db import AlertDB
from normalizer import normalize_alert
from threat_intel import check_ip
app = FastAPI()

@app.get("/alerts")
def get_alerts():

    db = SessionLocal()

    alerts = db.query(AlertDB).all()

    results = []

    for alert in alerts:
        results.append({
            "id": alert.id,
            "src_ip": alert.src_ip,
            "severity": alert.severity,
            "event_type": alert.event_type,
            "timestamp": alert.timestamp
        })

    return results

@app.get("/")
def home():
    return {
        "message": "SOAR Incident Containment Engine API Running"
    }


@app.post("/alerts")
def receive_alert(alert: Alert):

    normalized = normalize_alert(alert)

    intel = check_ip(
        normalized["src_ip"]
    )

    risk_score = intel["risk_score"]
    threat = intel["threat"]

    db = SessionLocal()

    new_alert = AlertDB(
        src_ip=normalized["src_ip"],
        severity=normalized["severity"],
        event_type=normalized["event_type"],
        timestamp=normalized["timestamp"]
    )

    db.add(new_alert)
    db.commit()

    return {
        "status": "success",
        "message": "Alert stored successfully",
        "risk_score": risk_score,
        "threat": threat
    }