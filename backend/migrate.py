"""
Run this once to create all database tables.
Usage: python migrate.py
"""
from database import engine, Base
import models  # noqa: F401 - importing registers models with Base

def run():
    print("Running migrations...")
    Base.metadata.create_all(bind=engine)
    print("Done. Tables created.")

if __name__ == "__main__":
    run()
