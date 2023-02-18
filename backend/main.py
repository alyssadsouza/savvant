from fastapi import FastAPI

app = FastAPI()

@app.get("/search")
async def root(search: str):
    return {"message": search}

@app.get("/popular-searches")
async def root():
    return {"message": ["iPhone 14, iPhone 13, Banana"]}