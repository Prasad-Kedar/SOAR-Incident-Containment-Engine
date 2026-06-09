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

    return {
    "status": "success",
    "message": "Alert stored successfully",
    "risk_score": risk_score,
    "threat": threat
}


@app.get("/dashboard/summary")
def dashboard_summary():

    db = SessionLocal()

    total_alerts = db.query(AlertDB).count()

    high_alerts = db.query(AlertDB).filter(
        AlertDB.severity == "HIGH"
    ).count()

    medium_alerts = db.query(AlertDB).filter(
        AlertDB.severity == "MEDIUM"
    ).count()

    low_alerts = db.query(AlertDB).filter(
        AlertDB.severity == "LOW"
    ).count()

    db.close()

    return {
        "total_alerts": total_alerts,
        "high_alerts": high_alerts,
        "medium_alerts": medium_alerts,
        "low_alerts": low_alerts
    }
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