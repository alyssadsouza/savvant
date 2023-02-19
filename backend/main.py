import json
from fastapi import FastAPI
from search_results import generate_search_results

app = FastAPI()

@app.get("/search")
async def root(query: str):
    result = generate_search_results(query)
    print(result.toJSON())
    return {"message": json.dumps(result.toJSON())}

@app.get("/popular-searches")
async def root():
    return {"message": ["iPhone 14, iPhone 13, Banana"]}