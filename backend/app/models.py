from sqlalchemy import Column, Integer, String, ForeignKey, create_engine
from sqlalchemy.orm import declarative_base, relationship, sessionmaker

Base = declarative_base()

class Questao(Base):
    __tablename__ = "questoes"
    id = Column(Integer, primary_key=True)
    enunciado = Column(String, nullable=False)
    assunto = Column(String, nullable=True)
    gabarito = Column(String, nullable=False)
    alternativas = relationship("Alternativa", back_populates="questao")

class Alternativa(Base):
    __tablename__ = "alternativas"
    id = Column(Integer, primary_key=True)
    letra = Column(String, nullable=False)
    texto = Column(String, nullable=False)
    questao_id = Column(Integer, ForeignKey("questoes.id"))
    questao = relationship("Questao", back_populates="alternativas")

# Conexão com o banco SQLite
engine = create_engine("sqlite:///questoes_enemnxc.db", connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)