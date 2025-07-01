from fastapi import APIRouter, HTTPException
import os
import json

router = APIRouter(prefix="/simulados", tags=["Simulados"])

BASE_DIR = os.path.join(os.path.dirname(__file__), "..", "simulados")

@router.get("/{id}")
def get_simulado(id: int):
    file_path = os.path.join(BASE_DIR, f"simulado{id}.json")

    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="Simulado não encontrado.")

    with open(file_path, "r", encoding="utf-8") as f:
        dados = json.load(f)

    return dados
