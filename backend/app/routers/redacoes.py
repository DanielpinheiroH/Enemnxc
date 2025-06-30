from fastapi import APIRouter, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
from utils.token_control import verificar_limite
from PIL import Image
import pytesseract
import openai
import os
import io

router = APIRouter()
openai.api_key = os.getenv("API_ENEM")

@router.post("/redacao/imagem")
async def corrigir_redacao_imagem(email: str = Form(...), imagem: UploadFile = Form(...)):
    verificar_limite(email, "redacoes")

    try:
        conteudo = await imagem.read()
        imagem_pil = Image.open(io.BytesIO(conteudo))
        texto = pytesseract.image_to_string(imagem_pil, lang="por")

        if not texto.strip():
            raise ValueError("Texto não reconhecido. A imagem pode estar ilegível.")

        prompt = f"""
Você é um corretor do ENEM. Avalie esta redação segundo as 5 competências do ENEM e dê uma nota final com justificativa clara, técnica e objetiva.

Texto:
{texto}
"""

        resposta = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Você é um corretor do ENEM."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1000,
            temperature=0.5
        )

        return JSONResponse(content={"correcao": resposta.choices[0].message.content.strip()})

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar imagem: {str(e)}")
