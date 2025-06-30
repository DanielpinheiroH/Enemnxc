from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# ⚙️ MODELOS
class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# ⚙️ MOCK DATABASE (substitua pelo banco real depois)
fake_users_db = {}

# 🔒 Funções auxiliares
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# 📥 REGISTRO
@router.post("/register")
def register(user: UserCreate):
    if user.email in fake_users_db:
        raise HTTPException(status_code=400, detail="E-mail já registrado.")

    hashed_pwd = hash_password(user.password)
    fake_users_db[user.email] = {"email": user.email, "hashed_password": hashed_pwd}

    return {"msg": "Usuário registrado com sucesso!"}

# 🔐 LOGIN
@router.post("/login")
def login(user: UserLogin):
    db_user = fake_users_db.get(user.email)
    if not db_user:
        raise HTTPException(status_code=400, detail="E-mail não encontrado.")

    if not verify_password(user.password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Senha incorreta.")

    return {"msg": "Login realizado com sucesso!"}
