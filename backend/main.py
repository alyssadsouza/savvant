import json
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
async def root(query: str):
    return {
        "message": {
            "rating": 1,
            "top_words": {
                "Rubbish": 1,
                "Trash": 2
            },
            "positive_review_count": 5,
            "negative_review_count": 65,
            "best_review": "I have seen worse",
            "worst_review": "I'd rather throw my money in a fire",
            "confidence": 12,
            "search_query": "iPhone 14",
            "img": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Raj_Chouhan_%28cropped%29.jpg"
        }
    }


@app.get("/popular-searches")
async def root():
    return {"message": ["iPhone 14", "iPhone 13", "Banana"]}