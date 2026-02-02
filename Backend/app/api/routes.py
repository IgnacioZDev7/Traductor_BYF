from fastapi import APIRouter, HTTPException
from app.schemas.translate import TranslationRequest, TranslationResponse
from app.services.translator import translate_text

router = APIRouter()

@router.post("/translate", response_model=TranslationResponse)
async def translate(request: TranslationRequest):
    try:
        result = await translate_text(request.text, request.direction, request.lang)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

