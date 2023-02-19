from models import SearchResults
from amzn_scraper import AmznCrawler
from cohere_api import get_cohere_results
from nltk_methods import get_adjectives, get_top_words

def generate_search_results(search):
  inputs = AmznCrawler(search)
  inputs.get_all_reviews()

  all_reviews = [i for i in inputs.all_reviews if len(i) > 0]

  cohere_results = get_cohere_results(all_reviews)

  adjectives = get_adjectives(all_reviews)
  print(adjectives)
  top_words = get_top_words(adjectives, 10)
  print(top_words)

  return SearchResults(
    rating=inputs.rating,
    top_words=top_words,
    positive_review_count=cohere_results["positive_review_count"],
    negative_review_count=cohere_results["negative_review_count"],
    best_review=cohere_results["best_review"],
    worst_review=cohere_results["worst_review"],
    confidence=cohere_results["confidence"],
    search_query=search,
    img=inputs.img,
  )