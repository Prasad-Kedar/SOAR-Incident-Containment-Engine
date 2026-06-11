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


class ResponseAction(Base):
    __tablename__ = "response_actions"

    id = Column(Integer, primary_key=True)
    incident_id = Column(Integer)
    action_type = Column(String)
    status = Column(String)
    timestamp = Column(String)