from sqlalchemy import create_engine
from models_db import Base

DATABASE_URL = "sqlite:///soar.db"

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)

print("Database created successfully!")