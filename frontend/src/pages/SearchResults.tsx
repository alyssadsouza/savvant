import ToolTip from "../components/ToolTip";
import { useEffect, useState, useMemo } from "react";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Spinner } from "../assets/spinner.svg";
import { ReactComponent as OpenIcon } from "../assets/open.svg";
import StarRating from "../components/StarRating";
import Modal from "../components/Modal";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale);

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
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    const getSearchResults = async () => {
      const response: AxiosResponse<any> = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/search?query=${query}`
      );
      setResults(response.data.message);
    };
    setTimeout(getSearchResults, 750);
  }, []);

  const data = useMemo(
    () => ({
      labels: Object.keys(results?.top_words ?? {}),
      datasets: [
        {
          label: "Top 10 Words",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: Object.values(results?.top_words ?? {}),
        },
      ],
    }),
    [results]
  );

  return (
    <div className="w-screen h-screen bg-gradient-to-r overflow-y-hidden overflow-x-hidden from-[#0D324D] to-[#7F5A83] text-white px-12">
      {!results && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Spinner className="w-24 h-24 animate-spin" />
        </div>
      )}
      {results && (
        <div className="h-full flex flex-col items-start justify-start animate-fadeIn">
          {showModal && (
            <Modal setShowModal={setShowModal}>
              <>
                <h1 className="text-xl font-medium">Top Word Results</h1>
                <p className="text-sm my-4">
                  These were the top ten words that appeared most in the reviews
                  we analyzed.
                </p>
                <Bar data={data} />
              </>
            </Modal>
          )}
          <div className="w-full flex flex-row h-[10vh] items-end">
            <a href="/" className="text-sm hover:underline text-[#6F98B6]">
              ← Back to Search
            </a>
          </div>
          <div className="h-[90vh]">
            <div className="w-full h-[15%] my-4 flex flex-row justify-between">
              <h2 className="text-[#476F8B] text-3xl py-4 w-6/12">
                I'm interested in...
                <span className="block text-white py-2 text-4xl">
                  {results.search_query}
                </span>
              </h2>
              <div className="w-full flex flex-col items-end justify-center my-4">
                <p className="text-2xl">{results.rating}/5</p>
                <StarRating rating={results.rating} />
                <div className="inline-flex items-center my-2">
                  <ToolTip
                    text={"kello this is a tooltip"}
                    classes="mx-2 w-4 h-4"
                  />
                  <p className="text-xl">Overall Rating</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[calc(85%_-_2rem)] flex flex-row gap-8">
              <div className="flex flex-col w-8/12 h-full">
                <div className="flex flex-col bg-white/10 p-6 rounded-xl w-full mb-4 h-1/4">
                  <div className="inline-flex items-center justify-between pb-4">
                    <div className="inline-flex items-center">
                      <p>Top Word Results</p>
                      <ToolTip
                        text={"kello this is a tooltip"}
                        classes="mx-2 w-4 h-4"
                      />
                    </div>
                    <OpenIcon
                      onClick={() => setShowModal(true)}
                      className="w-4 h-4 text-white/50 cursor-pointer hover:text-white/80"
                    />
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
                    <p className="text-[#6F98B6] font-medium my-1">
                      Most Positive Review
                    </p>
                    <p className="text-sm">"{results.best_review}"</p>
                  </div>
                  <div>
                    <p className="text-[#6F98B6] font-medium my-1">
                      Most Negative Review
                    </p>
                    <p className="text-sm">"{results.worst_review}"</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-4/12">
                <div className="flex flex-row w-fit h-1/4">
                  <div className="flex flex-col justify-center bg-white/10 p-4 rounded-xl w-fit text-center">
                    <p className="mb-3 text-sm">Positive Reviews</p>
                    <p className="mb-2 text-3xl text-[#49d188]">
                      {results.positive_review_count}
                    </p>
                    <p className="text-sm">
                      of{" "}
                      {results.positive_review_count +
                        results.negative_review_count}{" "}
                      reviews
                    </p>
                  </div>
                  <div className="flex flex-col justify-center bg-white/10 p-4 rounded-xl w-fit ml-6 text-center">
                    <p className="mb-3 text-sm">Negative Reviews</p>
                    <p className="mb-2 text-3xl text-[#f15252]">
                      {results.negative_review_count}
                    </p>
                    <p className="text-sm">
                      of{" "}
                      {results.positive_review_count +
                        results.negative_review_count}{" "}
                      reviews
                    </p>
                  </div>
                  <div className="flex flex-col bg-white/10 justify-center p-4 rounded-xl w-fit ml-6 text-left text-white">
                    <p className="text-4xl">{results.confidence}%</p>
                    <p>Confidence</p>
                    <p>in metrics</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl w-full h-[calc(75%_-_2rem)] mt-4">
                  <div className="h-full w-full p-8 text-center">
                    <img
                      src={results.img}
                      className="object-contain w-full h-full"
                      alt={results.search_query}
                    />
                    <a
                      href={results.img}
                      target="_blank"
                      rel="noreferrer"
                      className="my-1 text-xs text-white/50 hover:text-white/70 truncate block w-full"
                    >
                      Source: <span className="underline">{results.img}</span>
                    </a>
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
