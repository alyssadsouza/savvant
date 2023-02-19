import cohere
from cohere.classify import Example
from amzn_scraper import AmznCrawler
from models import SearchResult
co = cohere.Client('ZTY4iwGbLdVMXbOywgi4GeCcnztKertKS9yUHvCs')

examples=[
  Example("The order came 5 days early", "positive"),
  Example("The item exceeded my expectations", "positive"),
  Example("I ordered more for my friends", "positive"),
  Example("I would buy this again", "positive"),
  Example("I would recommend this to others", "positive"),
  Example("The package was damaged", "negative"),
  Example("The order is 5 days late", "negative"),
  Example("The order was incorrect", "negative"),
  Example("I want to return my item", "negative"),
  Example("The item\'s material feels low quality", "negative"),
  Example("The product was okay", "neutral"),
  Example("I received five items in total", "neutral"),
  Example("I bought it from the website", "neutral"),
  Example("I used the product this morning", "neutral"),
  Example("The product arrived yesterday", "neutral"),
]

# TEST INPUTS
# inputs=[
#   "This item was broken when it arrived",
#   "The product is amazing",
#   "The product was not too bad",
# ]

# inputs = AmznCrawler("Iphone 13")
# inputs.get_all_reviews()

# all_reviews = [i for i in inputs.all_reviews if len(i) > 0]

# response = co.classify(
#   model='large',
#   inputs=all_reviews,
#   examples=examples,
# )

#Pass response.classifications as parameter
def generate_pos_neg(res_classify):
    positive_reviews = []
    negative_reviews = []

    for i in res_classify:
      if i.prediction == "positive":
        positive_reviews.append(i)
      elif i.prediction == "negative":
        negative_reviews.append(i)

    def sortByConfidence(a):
      return a.confidence
      
    positive_reviews.sort(reverse=True, key=sortByConfidence)
    negative_reviews.sort(reverse=True, key=sortByConfidence)

    return (positive_reviews, negative_reviews)

def getSeachResults(search):
  inputs = AmznCrawler("Iphone 13")
  inputs.get_all_reviews()

  all_reviews = [i for i in inputs.all_reviews if len(i) > 0]

  response = co.classify(
    model='large',
    inputs=all_reviews,
    examples=examples,
  )
  pos_neg = generate_pos_neg(response)