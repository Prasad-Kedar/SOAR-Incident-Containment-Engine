from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class AlertDB(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    src_ip = Column(String)
    severity = Column(String)
    event_type = Column(String)
    timestamp = Column(String)
    status = Column(String, default="OPEN")
    assigned_to = Column(String, nullable=True)


class ResponseAction(Base):
    __tablename__ = "response_actions"

    id = Column(Integer, primary_key=True)
    incident_id = Column(Integer)
    action_type = Column(String)
    status = Column(String)
    timestamp = Column(String)


class NotificationLog(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True)
    incident_id = Column(Integer)
    notification_type = Column(String)
    recipient = Column(String)
    status = Column(String)
    timestamp = Column(String)


class Analyst(Base):
    __tablename__ = "analysts"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    role = Column(String)


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True)
    analyst = Column(String)
    action = Column(String)
    incident_id = Column(Integer)
    timestamp = Column(String)
 
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)

    username = Column(String)

    password = Column(String)

    role = Column(String)