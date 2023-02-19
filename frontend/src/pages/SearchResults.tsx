import { ReactComponent as ToolTip } from "../assets/tooltip.svg";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

type Props = {
  query: string;
};

type Results = {
  rating: number;
  top_words: object;
  positive_review_count: number;
  negative_review_count: number;
  best_review: string;
  worst_review: string;
  confidence: number;
  search_query: string;
  img: string;
};

const SearchResults = ({ query }: Props) => {
  const [results, setResults] = useState<Results | null>(null);
  useEffect(() => {
    const getSearchResults = async () => {
      const response: AxiosResponse<any> = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/search?query=${query}`
      );
      setResults(response.data.message);
    };
    getSearchResults();
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r overflow-y-hidden overflow-x-hidden from-[#0D324D] to-[#7F5A83] text-white px-12">
      {results && (
        <div className="h-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-row h-[10vh] items-end">
            <a href="/" className="text-sm hover:underline text-[#6F98B6]">
              ← Back to Search
            </a>
          </div>
          <div className="h-[90vh]">
            <div className="w-full h-[15%] flex flex-row justify-between">
              <h2 className="text-[#6F98B6] text-3xl py-4 w-6/12">
                I'm interested in...
                <span className="block text-white py-2 text-4xl">
                  {results.search_query}
                </span>
              </h2>
              <div className="w-full flex flex-col items-end justify-center my-4">
                <p className="text-2xl">{results.rating}/5</p>
                <div className="inline-flex items-center my-2">
                  <ToolTip className="mx-2" />
                  <p className="text-xl">Overall Rating</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[85%] flex flex-row gap-8">
              <div className="flex flex-col w-8/12 h-full">
                <div className="flex flex-col bg-white/10 p-6 rounded-xl w-full mb-4 h-1/4">
                  <div className="inline-flex items-center pb-4">
                    <p>Top Word Results</p>
                    <ToolTip className="mx-2" />
                  </div>
                  <p className="text-2xl pt-2">
                    {Object.keys(results.top_words).at(0)},{" "}
                    {Object.keys(results.top_words).at(1)},{" "}
                    {Object.keys(results.top_words).at(2)}
                  </p>
                </div>
                <div className="flex flex-col bg-white/10 rounded-xl p-6 h-[calc(75%_-_2rem)]">
                  <p className="mb-3">Reviews</p>
                  <div className="mb-8">
                    <p className="text-[#DCBCD9] text-lg font-medium my-1">
                      Most Positive Review
                    </p>
                    <p>{results.best_review}</p>
                  </div>
                  <div>
                    <p className="text-[#DCBCD9] text-lg font-medium my-1">
                      Most Negative Review
                    </p>
                    <p>{results.worst_review}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-4/12">
                <div className="flex flex-row w-fit h-1/4">
                  <div className="flex flex-col bg-white/10 p-4 rounded-xl w-fit text-center">
                    <p className="mb-3 text-sm">Positive Reviews</p>
                    <p className="mb-2 text-lg text-[#1EE29C]">
                      {results.positive_review_count}
                    </p>
                    <p className="text-sm">
                      of{" "}
                      {results.positive_review_count +
                        results.negative_review_count}
                    </p>
                    <p className="text-sm">reviews</p>
                  </div>
                  <div className="flex flex-col bg-white/10 p-4 rounded-xl w-fit ml-6 text-center">
                    <p className="mb-3 text-sm">Negative Reviews</p>
                    <p className="mb-2 text-lg text-[#E78080]">
                      {results.negative_review_count}
                    </p>
                    <p className="text-sm">
                      of{" "}
                      {results.positive_review_count +
                        results.negative_review_count}
                    </p>
                    <p className="text-sm">reviews</p>
                  </div>
                  <div className="flex flex-col bg-white/10 justify-center p-4 rounded-xl w-fit ml-6 text-left text-white">
                    <p className="text-4xl">{results.confidence}%</p>
                    <p>Confidence</p>
                    <p>in metrics</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl w-full h-[calc(75%_-_2rem)] mt-4">
                  <div className="h-full w-full p-8">
                    <img
                      src={results.img}
                      className="object-contain w-full h-full"
                      alt={results.search_query}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
