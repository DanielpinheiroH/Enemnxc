from fastapi import APIRouter
from pydantic import BaseModel
from datetime import date
import json
import os

router = APIRouter()  # ✅ Essa variável TEM que existir nesse escopo

HISTORICO_PATH = "app/data/historico.json"

class RespostaHistorico(BaseModel):
    email: str
    materia: str
    bloco: int
    acertou: bool

@router.post("/api/historico")
def registrar_resposta(resposta: RespostaHistorico):
    if not os.path.exists(HISTORICO_PATH):
        with open(HISTORICO_PATH, "w") as f:
            json.dump([], f)

    with open(HISTORICO_PATH, "r") as f:
        historico = json.load(f)

    nova_entrada = resposta.dict()
    nova_entrada["data"] = date.today().isoformat()
    historico.append(nova_entrada)

    with open(HISTORICO_PATH, "w") as f:
        json.dump(historico, f, indent=2)

    return {"mensagem": "Resposta registrada com sucesso"}
