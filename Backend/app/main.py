from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="Traductor BYF")

app.include_router(router)
