import requests
from bs4 import BeautifulSoup
from constants import HEADERS


class AmznCrawler:

    def __init__(self, product):
        self.product = product
        self.headers = HEADERS
        self.product_request = f"https://www.amazon.ca/s?k={self.product}"
        self.page_num = 0

    def get_asin(self):
        self.product_page = requests.get(self.product_request,
                                         headers=self.headers)
        self.product_soup = BeautifulSoup(self.product_page.content,
                                          "html.parser")
        # Retrieves first result from search
        self.product_div = self.product_soup.find(
            "div", {"data-component-type": "s-search-result"})
        self.asin = self.product_div['data-asin']

    def get_page(self, page_num=None):
        self.url = f'https://www.amazon.ca/product-reviews/{self.asin}/ref=cm_cr_arp_d_paging_btm_next_2?pageNumber='
        self.page_num += 1 if page_num is None else page_num
        self.review_request = self.url + str(self.page_num)

    def get_page_reviews(self):
        self.review_page = requests.get(self.review_request,
                                        headers=self.headers)
        self.soup = BeautifulSoup(self.review_page.content, "html.parser")
        self.page_reviews = self.soup.find_all(
            "span", {"class": "review-text-content"})

    def get_all_reviews(self):
        self.all_reviews = []
        self.get_asin()
        while True:
            self.get_page()
            self.get_page_reviews()
            print(self.review_request)
            if self.page_reviews:
                for review in self.page_reviews:
                    self.all_reviews.append(review.text.lower().strip())
            else:
                break

# example_scraper = AmznCrawler("Iphone 13")
# example_scraper.get_all_reviews()
# print(example_scraper.all_reviews)