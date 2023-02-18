from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
async def root(search: str):
    return {"message": search}

@app.get("/popular-searches")
async def root():
    return {"message": ["iPhone 14", "iPhone 13", "Banana"]}