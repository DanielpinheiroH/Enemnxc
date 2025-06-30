from fastapi import APIRouter

router = APIRouter()

@router.get("/questoes")
def listar_questoes():
    return {"msg": "Rota de questões funcionando!"}
