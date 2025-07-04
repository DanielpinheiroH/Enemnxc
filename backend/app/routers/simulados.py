from fastapi import APIRouter, HTTPException
import os
import json

router = APIRouter()

# Caminho base dos arquivos de simulado
SIMULADOS_DIR = os.path.join(os.path.dirname(__file__), "..", "simulados")

@router.get("/simulados/{simulado_id}")
def get_simulado(simulado_id: int):
    filename = f"simulado{simulado_id}.json"
    filepath = os.path.join(SIMULADOS_DIR, filename)

    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="Simulado não encontrado")

    with open(filepath, "r", encoding="utf-8") as file:
        dados = json.load(file)
    
    return dados
