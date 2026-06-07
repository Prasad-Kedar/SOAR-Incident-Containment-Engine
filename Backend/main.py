from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message":"SOAR Engine Running"
    }

from fastapi import FastAPI
from models import Alert
from alerts import alerts_db

app = FastAPI()

@app.get("/")
def home():
    return {"message": "SOAR Engine Running"}

@app.post("/alerts")
def receive_alert(alert: Alert):

    alerts_db.append(alert.dict())

    return {
        "status": "success",
        "message": "Alert received",
        "total_alerts": len(alerts_db)
    }

@app.get("/alerts")
def get_alerts():
    return alerts_db