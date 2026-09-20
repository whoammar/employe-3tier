from pydantic import BaseModel, EmailStr
from datetime import datetime

class EmployeeCreate(BaseModel):
    name:       str
    email:      EmailStr
    role:       str
    department: str

class EmployeeOut(EmployeeCreate):
    id:         int
    created_at: datetime

    model_config = {"from_attributes": True}
