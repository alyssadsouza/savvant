from amzn_scraper import AmznCrawler
from nltk_methods import get_adjectives, get_top_words

example_scraper = AmznCrawler("Gengar plush stuffed animal")
example_scraper.get_all_reviews()
print(get_top_words(get_adjectives(example_scraper.all_reviews), num_words=3))