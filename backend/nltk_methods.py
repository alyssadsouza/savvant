import nltk
from nltk.corpus import wordnet as wn
import seaborn as sns
import re

SW_EN = nltk.corpus.stopwords.words('english')
SW_FR = nltk.corpus.stopwords.words('french')

# Expects a list of sentences and returns a list of all adjectives from those sentences
def get_adjectives(reviews: list) -> list:
    valid_tokens = []
    for review in reviews:
        tokens = re.findall('\w+', review)
        # Example: nltk.pos_tag("The grand jury")
        # Output: ('The', 'AT'), ('grand', 'JJ'), ('jury', 'NN')
        # JJ: adjective or numeral, ordinal, JJR: adjective, comparative, JJS: adjective, superlative
        # https://stackoverflow.com/questions/15388831/what-are-all-possible-pos-tags-of-nltk
        tokenTypes = nltk.pos_tag(tokens)
        for tokenType in tokenTypes:
            is_stop_word = tokenType[0] in SW_EN or tokenType[0] in SW_FR
            if tokenType[1][0].lower() == 'j' and not is_stop_word:
                valid_tokens.append(tokenType[0])

    return valid_tokens

# Generates a graph based on frequency of words from input list
def get_graph(tokens: list, num_words:int):
    sns.set_style('darkgrid')
    nlp_words=nltk.FreqDist(tokens)
    nlp_words.plot(num_words)