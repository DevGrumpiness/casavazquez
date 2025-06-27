from pydantic import BaseModel
from typing import Optional, Dict

class Vino(BaseModel):
    id: str
    name: str
    prices: Dict[str, str]
    color: str
    grape: str
    origin: str
    shortDescription: str
    longDescription: str
    image: Optional[str] = None