import os
import csv
import re
from typing import Optional, Dict
# LangChain Imports
from langchain_ollama import ChatOllama
from langchain_chroma import Chroma
from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
from langchain_core.prompts import PromptTemplate
from langchain_core.documents import Document
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from app.core.config import TRANSLATIONS_CSV, PROMPT_TEMPLATE, VECTOR_DB_PATH, OLLAMA_MODEL, RAG_TEMPERATURE
# Variable global para cachear traducciones en memoria (como st.session_state)
TRANSLATIONS_CACHE: Dict[str, dict] = {}
def load_translations_cache():
    """Carga el CSV en memoria para búsqueda rápida por ID"""
    global TRANSLATIONS_CACHE
    if TRANSLATIONS_CACHE:
        return
    
    if not os.path.exists(TRANSLATIONS_CSV):
        print(f"Advertencia: No se encontró {TRANSLATIONS_CSV}")
        return
    try:
        with open(TRANSLATIONS_CSV, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f, delimiter=';')
            for row in reader:
                id_frase = row.get('id', row.get('\ufeffid', '')).strip()
                if id_frase:
                    TRANSLATIONS_CACHE[id_frase] = row
        print(f"Cache cargado: {len(TRANSLATIONS_CACHE)} frases")
    except Exception as e:
        print(f"Error cargando cache CSV: {e}")
def get_rag_chain():
    """Crea y retorna la cadena RAG"""
    llm = ChatOllama(model=OLLAMA_MODEL, temperature=RAG_TEMPERATURE)
    
    # Cargar Prompt
    prompt_text = ""
    if os.path.exists(PROMPT_TEMPLATE):
        with open(PROMPT_TEMPLATE, 'r', encoding='utf-8') as f:
            prompt_text = f.read()
    else:
        # Fallback simple si no hay archivo
        prompt_text = "Contexto: {context} \n Input: {input}. Traduce o responde ID:NONE"
    
    # Adaptar prompt para LangChain (query -> input)
    prompt_text = prompt_text.replace('{query}', '{input}')
    prompt = PromptTemplate.from_template(prompt_text)
    
    # Vector Store
    embedding = FastEmbedEmbeddings()
    vector_store = Chroma(
        persist_directory=str(VECTOR_DB_PATH),
        embedding_function=embedding
    )
    
    retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 5})
    
    document_chain = create_stuff_documents_chain(llm, prompt)
    rag_chain = create_retrieval_chain(retriever, document_chain)
    
    return rag_chain
def extract_id(response_text: str) -> Optional[str]:
    """Extrae ID:123 de la respuesta"""
    match = re.search(r'ID\s*:\s*(\d+|NONE)', response_text, re.IGNORECASE)
    if match:
        id_str = match.group(1).strip()
        return None if id_str.upper() == 'NONE' else id_str
    return None
async def translate_text(text: str, direction: str, lang: str) -> dict:
    # Asegurar que el cache esté cargado
    load_translations_cache()
    
    rag_chain = get_rag_chain()
    
    # Invocar RAG
    result = rag_chain.invoke({"input": text})
    answer = result.get('answer', '')
    
    found_id = extract_id(answer)
    
    translation_result = {
        "original_text": text,
        "translated_text": "No se encontró traducción exacta.",
        "source_lang": "espanol" if direction == "espanol_a_indigena" else lang,
        "target_lang": lang if direction == "espanol_a_indigena" else "espanol",
        "found_id": found_id,
        "context_used": True
    }
    if found_id and found_id in TRANSLATIONS_CACHE:
        item = TRANSLATIONS_CACHE[found_id]
        # Determinar traducción exacta desde el CSV
        if direction == "espanol_a_indigena":
            target_text = item.get(lang.lower(), "")
        else:
            target_text = item.get("español", "")
            
        if target_text:
            translation_result["translated_text"] = target_text
    
    return translation_result