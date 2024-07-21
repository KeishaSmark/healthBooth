from typing import Annotated, Optional
from pydantic import BaseModel, Field

class PatientInDB(BaseModel):
    id: str
    first_name: str
    last_name: str
    username: str
    password: str
    type: str
    lang: str
    
class DoctorInDB(PatientInDB):
    consult: bool