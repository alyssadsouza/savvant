import { ReactComponent as ToolTip } from "../assets/tooltip.svg";

const SearchResults = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#0D324D] to-[#7F5A83] text-white px-12">
      <div className="h-full flex flex-col items-start justify-start">
        <div className="w-full flex flex-row">
          <a href="#" className="underline text-s text-[#6F98B6] py-8">
            ← Back to Search
          </a>
        </div>
        <div className="w-full flex flex-row justify-between mb-8">
          <h2 className="text-[#6F98B6] text-3xl py-4 w-6/12">
            I'm interested in...
            <span className="block text-white py-2 text-4xl">"iPhone 14"</span>
          </h2>
          <div className="w-full flex flex-col items-end my-4">
            <p className="text-2xl">4.2/5</p>
            <div className="inline-flex items-center my-2">
              <ToolTip className="mx-2" />
              <p className="text-xl">Overall Rating</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row gap-8 py-4">
          <div className="flex flex-col w-8/12">
            <div className="flex flex-col bg-white/10 p-6 rounded-xl w-full mb-4 min-h-[20vh]">
              <div className="inline-flex items-center pb-4">
                <p>Top Word Results</p>
                <ToolTip className="mx-2" />
              </div>
              <p className="text-2xl">Stupid, Broken, Expensive</p>
            </div>
            <div className="flex flex-col bg-white/10 rounded-xl p-6 h-full">
              <p className="mb-3">Reviews</p>
              <div className="mb-8">
                <p className="text-[#DCBCD9] text-lg font-medium my-1">
                  Most Positive Review
                </p>
                <p>I absolutely love this product oh my god</p>
              </div>
              <div>
                <p className="text-[#DCBCD9] text-lg font-medium my-1">
                  Most Negative Review
                </p>
                <p>I absolutely hate this product oh my god</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-4/12">
            <div className="flex flex-row w-fit h-[20vh]">
              <div className="flex flex-col bg-white/10 p-4 rounded-xl w-fit text-center">
                <p className="mb-3 text-sm">Positive Reviews</p>
                <p className="mb-2 text-lg text-[#1EE29C]">185,000</p>
                <p className="text-sm">of 1,235,000</p>
                <p className="text-sm">reviews</p>
              </div>
              <div className="flex flex-col bg-white/10 p-4 rounded-xl w-fit ml-6 text-center">
                <p className="mb-3 text-sm">Positive Reviews</p>
                <p className="mb-2 text-lg text-[#E78080]">185,000</p>
                <p className="text-sm">of 1,235,000</p>
                <p className="text-sm">reviews</p>
              </div>
              <div className="flex flex-col bg-white/10 justify-center p-4 rounded-xl w-fit ml-6 text-left text-white">
                <p className="text-4xl">96%</p>
                <p>Confidence</p>
                <p>in metrics</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl w-full h-full mt-4">
              <div className="h-[75%]">
                <img src=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
