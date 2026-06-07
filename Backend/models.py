from pydantic import BaseModel

class Alert(BaseModel):
    src_ip: str
    severity: str
    event_type: str
    timestamp: str