from pydantic import BaseModel
from typing import Optional, List

class TranslationRequest(BaseModel):
    text: str
    direction: str #"español a nativo" - "nativo a español"
    lang: str #"aymara" - "quechua"


class TranslationResponse(BaseModel):
    original_text: str
    translated_text: str
    source_lang: str
    target_lang: str
    found_id: Optional[str] = None
    context_used: bool = False

    