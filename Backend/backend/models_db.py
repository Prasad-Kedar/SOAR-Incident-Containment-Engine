from sqlalchemy import Column,Integer,String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class AlertDB(Base):

    __tablename__="alerts"

    id = Column(Integer,primary_key=True)
    src_ip = Column(String)
    severity = Column(String)
    event_type = Column(String)
    timestamp = Column(String)