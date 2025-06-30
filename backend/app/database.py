from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base

# Cria o engine do SQLite
engine = create_engine("sqlite:///database.db", echo=True)
SessionLocal = sessionmaker(bind=engine)

# Cria as tabelas no banco
def init_db():
    Base.metadata.create_all(bind=engine)