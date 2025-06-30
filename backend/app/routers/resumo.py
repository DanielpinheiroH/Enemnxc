from fastapi import APIRouter, Query, HTTPException
from datetime import datetime, timedelta
import json
import os

router = APIRouter()

@router.get("/resumo")
def gerar_resumo(email: str = Query(...)):
    caminho = "app/data/historico.json"
    if not os.path.exists(caminho):
        raise HTTPException(status_code=404, detail="Histórico não encontrado.")

    with open(caminho, "r", encoding="utf-8") as f:
        historico = json.load(f)

    hoje = datetime.today()
    inicio_semana = hoje - timedelta(days=6)
    resumo = {
        "total": 0,
        "acertos": 0,
        "erros": 0,
        "por_materia": {},
        "por_bloco": {},
        "sugestoes": []
    }

    for entry in historico:
        if entry["email"] != email:
            continue

        data_questao = datetime.strptime(entry["data"], "%Y-%m-%d")
        if data_questao < inicio_semana:
            continue

        resumo["total"] += 1
        acertou = entry["acertou"]
        if acertou:
            resumo["acertos"] += 1
        else:
            resumo["erros"] += 1

        materia = entry["materia"]
        bloco = str(entry["bloco"])

        if materia not in resumo["por_materia"]:
            resumo["por_materia"][materia] = {"acertos": 0, "erros": 0}
        if bloco not in resumo["por_bloco"]:
            resumo["por_bloco"][bloco] = {"acertos": 0, "erros": 0}

        if acertou:
            resumo["por_materia"][materia]["acertos"] += 1
            resumo["por_bloco"][bloco]["acertos"] += 1
        else:
            resumo["por_materia"][materia]["erros"] += 1
            resumo["por_bloco"][bloco]["erros"] += 1

    # Gera sugestões
    for materia, dados in resumo["por_materia"].items():
        if dados["erros"] > dados["acertos"]:
            resumo["sugestoes"].append(f"Revisar matéria: {materia}")

    for bloco, dados in resumo["por_bloco"].items():
        if dados["erros"] > dados["acertos"]:
            resumo["sugestoes"].append(f"Revisar Bloco {bloco}")

    return resumo