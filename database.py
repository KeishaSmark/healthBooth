from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from fastapi import HTTPException, status

import os

load_dotenv()


client = None
database = None


try:
    client = AsyncIOMotorClient(os.getenv("DB_CONNECTION_STRING"))
    database = client["health-booth"]
except Exception as e:
    print(e)
    raise HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Something went wrong"
    )
