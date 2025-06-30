from fastapi import APIRouter, HTTPException, Depends, Request
from pydantic import BaseModel, EmailStr
from app.utils.auth import *
from app.fake_db import users_db

router = APIRouter()

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class Login(BaseModel):
    email: EmailStr
    password: str

@router.post("/register")
def register(user: UserCreate):
    if user.email in users_db:
        raise HTTPException(status_code=400, detail="E-mail já cadastrado.")
    users_db[user.email] = {
        "name": user.name,
        "email": user.email,
        "hashed_password": hash_password(user.password)
    }
    return {"msg": "Usuário registrado com sucesso."}

@router.post("/login")
def login(data: Login):
    user = users_db.get(data.email)
    if not user or not verify_password(data.password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Credenciais inválidas.")
    token = create_access_token({"sub": user["email"]})
    return {"access_token": token, "token_type": "bearer"}

def get_current_user(request: Request):
    token = request.headers.get("Authorization", "").replace("Bearer ", "")
    if not token:
        raise HTTPException(status_code=401, detail="Token ausente")
    try:
        payload = decode_token(token)
        email = payload.get("sub")
        user = users_db.get(email)
        if not user:
            raise HTTPException(status_code=404, detail="Usuário não encontrado")
        return user
    except JWTError:
        raise HTTPException(status_code=403, detail="Token inválido")

@router.get("/me")
def me(user=Depends(get_current_user)):
    return {"name": user["name"], "email": user["email"]}