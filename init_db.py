from db_session import engine, Base
from models_db import AlertDB

Base.metadata.create_all(bind=engine)

print("Database Created Successfully")
