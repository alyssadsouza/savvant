from amzn_scraper import AmznCrawler
from nltk_methods import get_adjectives, get_graph

example_scraper = AmznCrawler("")
example_scraper.get_all_reviews()
get_graph(get_adjectives(example_scraper.all_reviews), 10)
