import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from search_results import generate_search_results

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
async def root(query: str):
    result = generate_search_results(query)
    print(result.toJSON())
    return {"message": json.dumps(result.toJSON())}

@app.get("/popular-searches")
async def root():
    return {"message": ["iphone 13", "echo dot 5th gen", "anker portable charger"]}