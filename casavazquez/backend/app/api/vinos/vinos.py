from fastapi import APIRouter  # https://fastapi.tiangolo.com/tutorial/bigger-applications/#apirouter
from app.models.vino import Vino  # unser eigenes Datenmodell
from pathlib import Path  # https://docs.python.org/3/library/pathlib.html
import json  # https://docs.python.org/3/library/json.html

router = APIRouter(prefix="/vinos", tags=["vinos"])  # https://fastapi.tiangolo.com/tutorial/bigger-applications/#apirouter
print("✅ vinos.py wurde geladen")
def load_wines(filename: str) -> list[Vino]:
    print("📞 Endpoint /vinos wurde aufgerufen")
    path = Path(f"backend/staticdata/{filename}.json")  # nutzt pathlib für robusten Pfad
    data = json.loads(path.read_text(encoding="utf-8"))  # liest die Datei als Text und parsed JSON
    return [Vino(**item) for item in data]  # erstellt für jedes Dict ein Vino-Modell (https://docs.pydantic.dev/latest/usage/models/#creating-models)
@router.get("/")
def get_all_vinos():
    try:
        print("📦 Versuche JSON-Dateien zu laden …")
        blancos = load_wines("blancos")
        print("✅ Blancos:", blancos)
        rosados = load_wines("rosados")
        print("✅ Rosados:", rosados)
        tintos = load_wines("tintos")
        print("✅ Tintos:", tintos)
        return blancos + rosados + tintos
    except Exception as e:
        import traceback
        print("❌ FEHLER:", e)
        traceback.print_exc()
        raise e
