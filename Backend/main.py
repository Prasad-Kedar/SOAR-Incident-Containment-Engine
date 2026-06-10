from fastapi import FastAPI
from models import Alert
from db_session import SessionLocal
from models_db import AlertDB
from normalizer import normalize_alert
from threat_intel import check_ip

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "SOAR Incident Containment Engine API Running"
    }


@app.post("/alerts")
def receive_alert(alert: Alert):

    normalized = normalize_alert(alert)

    intel = check_ip(normalized["src_ip"])

    risk_score = intel["risk_score"]
    threat = intel["threat"]

    db = SessionLocal()

    new_alert = AlertDB(
        src_ip=normalized["src_ip"],
        severity=normalized["severity"],
        event_type=normalized["event_type"],
        timestamp=normalized["timestamp"],
        status="OPEN"
    )

    db.add(new_alert)
    db.commit()
    db.refresh(new_alert)

    db.close()

    return {
        "status": "success",
        "message": "Alert stored successfully",
        "risk_score": risk_score,
        "threat": threat
    }


@app.get("/alerts")
def get_alerts():

    db = SessionLocal()

    alerts = db.query(AlertDB).all()

    result = []

    for alert in alerts:
        result.append({
            "id": alert.id,
            "src_ip": alert.src_ip,
            "severity": alert.severity,
            "event_type": alert.event_type,
            "timestamp": alert.timestamp,
            "status": alert.status
        })

    db.close()

    return result


@app.get("/dashboard/summary")
def dashboard_summary():

    db = SessionLocal()

    total_alerts = db.query(AlertDB).count()

    high_alerts = db.query(AlertDB).filter(
        AlertDB.severity == "high"
    ).count()

    medium_alerts = db.query(AlertDB).filter(
        AlertDB.severity == "medium"
    ).count()

    low_alerts = db.query(AlertDB).filter(
        AlertDB.severity == "low"
    ).count()

    db.close()

    return {
        "total_alerts": total_alerts,
        "high_alerts": high_alerts,
        "medium_alerts": medium_alerts,
        "low_alerts": low_alerts
    }


@app.get("/dashboard/recent")
def recent_alerts():

    db = SessionLocal()

    alerts = (
        db.query(AlertDB)
        .order_by(AlertDB.id.desc())
        .limit(5)
        .all()
    )

    result = []

    for alert in alerts:
        result.append({
            "id": alert.id,
            "src_ip": alert.src_ip,
            "severity": alert.severity,
            "event_type": alert.event_type,
            "timestamp": alert.timestamp,
            "status": alert.status
        })

    db.close()

    return result


@app.get("/threat/{ip}")
def threat_lookup(ip: str):

    intel = check_ip(ip)

    return {
        "ip": ip,
        "risk_score": intel["risk_score"],
        "threat": intel["threat"]
    }