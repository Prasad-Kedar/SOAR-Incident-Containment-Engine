from fastapi import FastAPI
from models import Alert
from datetime import datetime
from db_session import SessionLocal
from models_db import ResponseAction
from models_db import AlertDB, ResponseAction, NotificationLog, Analyst
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


@app.get("/incident/{incident_id}/intel")
def incident_intel(incident_id: int):

    db = SessionLocal()

    incident = db.query(AlertDB).filter(
        AlertDB.id == incident_id
    ).first()

    if not incident:
        db.close()
        return {
            "message": "Incident not found"
        }

    intel = check_ip(
        incident.src_ip
    )

    db.close()

    return {
        "incident_id": incident.id,
        "src_ip": incident.src_ip,
        "risk_score": intel["risk_score"],
        "threat": intel["threat"]
    }


@app.get("/incidents/high-risk")
def high_risk_incidents():

    db = SessionLocal()

    incidents = db.query(AlertDB).filter(
        AlertDB.severity == "high"
    ).all()

    result = []

    for incident in incidents:
        result.append({
            "id": incident.id,
            "src_ip": incident.src_ip,
            "severity": incident.severity,
            "status": incident.status
        })

    db.close()

    return result

@app.post("/response/block-ip/{incident_id}")
def block_ip(incident_id: int):

    db = SessionLocal()

    action = ResponseAction(
        incident_id=incident_id,
        action_type="BLOCK_IP",
        status="SUCCESS",
        timestamp=datetime.now()
    )

    db.add(action)
    db.commit()
    db.close()

    return {
        "message": "IP blocked successfully"
    }

@app.post("/response/isolate-host/{incident_id}")
def isolate_host(incident_id: int):

    db = SessionLocal()

    action = ResponseAction(
        incident_id=incident_id,
        action_type="ISOLATE_HOST",
        status="SUCCESS",
        timestamp=str(datetime.now())
    )

    db.add(action)

    db.commit()

    db.close()

    return {
        "message": "Host isolated successfully"
    }

@app.get("/responses")
def response_history():

    db = SessionLocal()

    actions = db.query(ResponseAction).all()

    result = []

    for action in actions:

        result.append({
            "id": action.id,
            "incident_id": action.incident_id,
            "action_type": action.action_type,
            "status": action.status,
            "timestamp": action.timestamp
        })

    db.close()

    return result

@app.get("/dashboard/security-metrics")
def security_metrics():

    db = SessionLocal()

    total_alerts = db.query(AlertDB).count()

    open_incidents = db.query(AlertDB).filter(
        AlertDB.status == "OPEN"
    ).count()

    closed_incidents = db.query(AlertDB).filter(
        AlertDB.status == "CLOSED"
    ).count()

    high_risk = db.query(AlertDB).filter(
        AlertDB.severity == "high"
    ).count()

    db.close()

    return {
        "total_alerts": total_alerts,
        "open_incidents": open_incidents,
        "closed_incidents": closed_incidents,
        "high_risk_incidents": high_risk
    }

@app.get("/dashboard/response-metrics")
def response_metrics():

    db = SessionLocal()

    total_actions = db.query(ResponseAction).count()

    blocked_ips = db.query(ResponseAction).filter(
        ResponseAction.action_type == "BLOCK_IP"
    ).count()

    isolated_hosts = db.query(ResponseAction).filter(
        ResponseAction.action_type == "ISOLATE_HOST"
    ).count()

    db.close()

    return {
        "total_actions": total_actions,
        "blocked_ips": blocked_ips,
        "isolated_hosts": isolated_hosts
    }

@app.get("/dashboard/trends")
def incident_trends():

    db = SessionLocal()

    high_count = db.query(AlertDB).filter(
        AlertDB.severity == "high"
    ).count()

    medium_count = db.query(AlertDB).filter(
        AlertDB.severity == "medium"
    ).count()

    low_count = db.query(AlertDB).filter(
        AlertDB.severity == "low"
    ).count()

    db.close()

    return {
        "high": high_count,
        "medium": medium_count,
        "low": low_count
    }

@app.post("/notify/{incident_id}")
def notify_incident(incident_id: int):

    db = SessionLocal()

    notification = NotificationLog(
        incident_id=incident_id,
        notification_type="EMAIL",
        recipient="soc-team@company.local",
        status="SENT",
        timestamp=str(datetime.now())
    )

    db.add(notification)

    db.commit()

    db.close()

    return {
        "message": "Notification sent successfully"
    }

@app.post("/incident/{incident_id}/escalate")
def escalate_incident(incident_id: int):

    return {
        "incident_id": incident_id,
        "status": "ESCALATED",
        "assigned_team": "SOC-L2"
    }

@app.get("/notifications")
def get_notifications():

    db = SessionLocal()

    notifications = db.query(
        NotificationLog
    ).all()

    result = []

    for n in notifications:

        result.append({
            "id": n.id,
            "incident_id": n.incident_id,
            "recipient": n.recipient,
            "status": n.status,
            "timestamp": n.timestamp
        })

    db.close()

    return result

@app.post("/analysts")
def create_analyst():

    try:
        db = SessionLocal()

        analyst = Analyst(
            name="Prasad",
            email="Prasad@soc.local",
            role="SOC Analyst"
        )

        db.add(analyst)
        db.commit()
        db.close()

        return {
            "message": "Analyst created successfully"
        }

    except Exception as e:
        return {
            "error": str(e)
        }


@app.put("/incident/{incident_id}/assign/{analyst_name}")
def assign_incident(
    incident_id: int,
    analyst_name: str
):

    db = SessionLocal()

    incident = db.query(AlertDB).filter(
        AlertDB.id == incident_id
    ).first()

    if not incident:
        db.close()

        return {
            "message": "Incident not found"
        }

    incident.assigned_to = analyst_name

    db.commit()
    db.close()

    return {
        "message": "Incident assigned",
        "analyst": analyst_name
    }

@app.get("/analyst/{name}/incidents")
def analyst_incidents(name: str):

    db = SessionLocal()

    incidents = db.query(AlertDB).filter(
        AlertDB.assigned_to == name
    ).all()

    result = []

    for incident in incidents:

        result.append({
            "id": incident.id,
            "src_ip": incident.src_ip,
            "status": incident.status,
            "severity": incident.severity
        })

    db.close()

    return result