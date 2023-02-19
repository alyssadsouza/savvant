
class SearchResults():
  def __init__(self, rating, top_words, positive_review_count, negative_review_count, best_review, worst_review, confidence, search_query, img) -> None:
    self.rating = rating,
    self.top_words = top_words,
    self.positive_review_count = positive_review_count,
    self.negative_review_count = negative_review_count,
    self.best_review = best_review,
    self.worst_review = worst_review,
    self.confidence = confidence,
    self.search_query = search_query,
    self.img = img
