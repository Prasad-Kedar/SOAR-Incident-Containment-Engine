from sqlalchemy import Column, Integer, String
from db_session import Base

class AlertDB(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    source_ip = Column(String)
    alert_type = Column(String)
    severity = Column(String)
    status = Column(String, default="new")
