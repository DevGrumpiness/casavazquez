import json
import random
from fastapi import FastAPI, Depends
from enum import Enum
from pydantic import BaseModel, Field
from fastapi import HTTPException
from typing import List
from pathlib import Path
from pathlib import Path

app = FastAPI()

class WineType(Enum):
    rose = "Rosé"
    white = "Weißwein"
    red = "Rotwein"

class Vino(BaseModel):
    id: int = Field(random.randint(1,1000), gt=0)
    name: str
    preis: float
    type: WineType

class ResponseVino(BaseModel):
    name: str

# vinos: List[Vino] = [
#     Vino(id=1, name="Hauswein rot",  preis=6.6, type=WineType.red),
#     Vino(id=2, name="Hauswein weiß", preis=6.0, type=WineType.white),
#     Vino(id=3, name="Hauswein rosé", preis=6.6, type=WineType.rose)
# ]

BASE_DIR = Path(__file__).resolve().parent.parent   # backend/
DATA_DIR = BASE_DIR / "staticdata"                 # backend/staticdata
JSON_FILE = DATA_DIR / "tintos.json"               # backend/staticdata/tintos.json

vinos = json.loads(JSON_FILE.read_text(encoding="utf-8"))

#
# @app.post("/login")
# async def login(data: OAuth2PasswordRequestForm = Depends()):
#     if data.username == "test" and data.password == "test":
#         access_token = jwt.encode({"user": data.username}, key="secret")
#         return {"access_token": access_token, "token_type": "bearer"}
#     raise HTTPException(
#         status_code=status.HTTP_401_UNAUTHORIZED,
#         detail="Incorrect username or password",
#         headers={"WWW-Authenticate": "Bearer"}
#     )
#

@app.post("/vinos/", response_model=ResponseVino)
async def add_vino_to_db(vino: Vino):
    vinos.append(vino)
    return {"message": f"{vino}€"}

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/vinos")
async def get_vinos():
    return vinos

@app.get("/vinos/{id}")
async def get_vino_by_id(id: int):
    if id < 0 or id >= len(vinos):
        return vinos
    return {"message": f"{vinos[id]['name']} {vinos[id]['preis']}€"}

@app.put("/vinos/{id}")
async def update_vino_by_id(id: int, vino: Vino):
    for i, v in enumerate(vinos):
        if v["id"] == id:
            vinos[i] = vino.dict()          # 3) als dict zurückspeichern
            return vino
    raise HTTPException(status_code=404, detail="Vino nicht gefunden")
    return vino