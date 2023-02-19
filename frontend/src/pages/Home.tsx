import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResultChip from "../components/SearchResultChip";
import axios, { AxiosResponse } from "axios";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ setQuery }: Props) => {
  const [popularSearches, setPopularSearches] = useState<boolean>(false);
  const [popularSearchResults, setPopularSearchResults] = useState<
    Array<string>
  >([]);

  useEffect(() => {
    const getPopularSearches = async () => {
      const response: AxiosResponse<any> = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/popular-searches`
      );
      setPopularSearchResults(response.data.message);
    };
    getPopularSearches();
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#0D324D] to-[#7F5A83] text-white">
      <div className="h-full flex flex-col animate-fadeIn items-center justify-between">
        <Header
          popularSearches={popularSearches}
          setPopularSearches={setPopularSearches}
        />
        <div className=" flex flex-col py-4 h-full items-center justify-center">
          <h1 className="text-4xl">I'm interested in...</h1>
          <p className="max-w-[32rem] text-gray-400 text-sm my-4">
            Savvant scours the internet for reviews on any product, providing
            you with the info you need to make up your mind on this potential
            purchase!
          </p>
          <SearchBar setQuery={setQuery} />
        </div>
        <div
          className={`${
            popularSearches ? "max-h-[800px] p-8 opacity-100" : "max-h-0 p-0 opacity-0"
          } transition-all duration-500 overflow-hidden fixed bottom-0 w-full flex flex-col items-center justify-center bg-white/20`}
        >
          <h2 className="text-xl">Other people have searched for...</h2>
          <div className="flex m-8">
            {popularSearchResults?.map((item) => (
              <SearchResultChip item={item} setQuery={setQuery} key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
