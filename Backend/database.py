from sqlalchemy import create_engine
from backend.models_db import Base

DATABASE_URL = "sqlite:///soar.db"

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)

print("Database created successfully!")