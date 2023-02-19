import nltk
from nltk.corpus import wordnet as wn
from langdetect import detect
import seaborn as sns
import re

SW_EN = nltk.corpus.stopwords.words('english')
SW_FR = nltk.corpus.stopwords.words('french')
SW_SP = nltk.corpus.stopwords.words('spanish')

# Expects a list of sentences and returns a list of all adjectives from those sentences
def get_adjectives(reviews: list) -> list:
    valid_tokens = []
    for review in reviews:
        try:
            if detect(review) == "en":
                tokens = re.findall('\w+', review)
                # Example: nltk.pos_tag("The grand jury")
                # Output: ('The', 'AT'), ('grand', 'JJ'), ('jury', 'NN')
                # JJ: adjective or numeral, ordinal, JJR: adjective, comparative, JJS: adjective, superlative
                # https://stackoverflow.com/questions/15388831/what-are-all-possible-pos-tags-of-nltk
                tokenTypes = nltk.pos_tag(tokens)
                for tokenType in tokenTypes:
                    is_stop_word = tokenType[0] in SW_EN or tokenType[0] in SW_FR or tokenType[0] in SW_SP
                    if tokenType[1][0].lower() == 'j' and not is_stop_word:
                        valid_tokens.append(tokenType[0])
        except:
            pass

    return valid_tokens

# Generates a graph based on frequency of words from input list
def get_top_words(tokens: list, num_words:int):
    word_frequencies = {}
    top_word_frequencies = {}
    for token in tokens:
        word_frequencies[token] = tokens.count(token)
    sorted_word_frequencies = sorted(word_frequencies.items(), key=lambda x:x[1], reverse=True)
    for word, frequency in sorted_word_frequencies[:num_words]:
        top_word_frequencies[word] = frequency
    return top_word_frequencies