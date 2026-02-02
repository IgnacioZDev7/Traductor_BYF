import os
from pathlib import Path

# directorio base del proyecto -- Backend
BASE_DIR =  Path(__file__).resolve().parent.parent.parent
DATA_DIR = BASE_DIR / "data"

# rutas de los archivos con los datos

# ruta de las frases y las traducciones
TRANSLATIONS_CSV = DATA_DIR / "traducciones.csv"
# ruta del prompt para el modelo de IA
PROMPT_TEMPLATE = DATA_DIR / "prompt.txt"
# ruta de la base de conocimiento
VECTOR_DB_PATH = DATA_DIR / "traducciones_db"
# ruta del documento
DOCUMENT_DB_PATH = DATA_DIR / "local_knowledge_db"


# Configuracion de modelos llm
OLLAMA_MODEL = "llama3.2"
RAG_TEMPERATURE = 0.3
