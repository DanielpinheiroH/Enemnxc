from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.models import SessionLocal, Questao
from openai import OpenAI
import os
from dotenv import load_dotenv
from app.routers import historico, auth, questao, simulados

# Carregar variáveis de ambiente
load_dotenv()

# Inicializar o cliente OpenAI
client = OpenAI(api_key=os.getenv("API_ENEM"))

# Inicializar o app
app = FastAPI()

# Liberar o frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir os routers
app.include_router(historico.router)
app.include_router(auth.router, prefix="/auth")
app.include_router(questao.router, prefix="/questoes")
app.include_router(simulados.router)

# Rota para buscar todas as questões
@app.get("/questoes")
def get_questoes(assunto: str = Query(None)):
    db = SessionLocal()
    if assunto:
        questoes = db.query(Questao).filter(Questao.assunto == assunto).all()
    else:
        questoes = db.query(Questao).all()

    resultado = []
    for q in questoes:
        resultado.append({
            "id": q.id,
            "enunciado": q.enunciado,
            "gabarito": q.gabarito,
            "assunto": q.assunto,
            "alternativas": [
                {"letra": alt.letra, "texto": alt.texto}
                for alt in q.alternativas
            ]
        })

    return resultado

# Modelo para POST /explicar
class ExplicacaoRequest(BaseModel):
    id_questao: int
    resposta_usuario: str

@app.post("/explicar")
def explicar(dados: ExplicacaoRequest):
    db = SessionLocal()
    questao = db.query(Questao).filter_by(id=dados.id_questao).first()

    if not questao:
        return {"erro": "Questão não encontrada."}

    prompt = f"""
Explique de forma clara e didática a seguinte questão:

Enunciado:
{questao.enunciado}

Alternativas:
{chr(10).join(f"{a.letra}) {a.texto}" for a in questao.alternativas)}

Resposta do usuário: {dados.resposta_usuario.upper()}
Resposta correta: {questao.gabarito.upper()}
"""

    resposta = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=500
    )

    return {"explicacao": resposta.choices[0].message.content}
