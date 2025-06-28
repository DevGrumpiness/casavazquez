from fastapi import FastAPI  # https://fastapi.tiangolo.com/tutorial/first-steps/
from app.api import vinos

app = FastAPI(title="Casa Vazquez API")  # Titel erscheint in Swagger UI

app.include_router(vinos.router)  #  https://fastapi.tiangolo.com/tutorial/bigger-applications/#include-the-router
