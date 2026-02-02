from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import routes

app = FastAPI(title="RAG Traductor BYF API")

#Configuracion de los CORS para permitir la comunicacion con REACT
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#Incluir las rutas de la API
app.include_router(routes.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"status": "online", "message": "Backend RAG Traductor Operativo"}

if __name__ == "__main__":
    import uvicorn
    #ejecutar desde la raiz del proyecto en BACKEND
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
