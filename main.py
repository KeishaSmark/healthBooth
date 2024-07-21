from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import chat, user

app = FastAPI(
    title="Health Booth API",
    summary="API that implements all the Health Booth features",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router)
app.include_router(user.router)
