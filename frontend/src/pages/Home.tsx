import { useState } from 'react';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home = () => {

  const [popularSearches, setPopularSearches] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#0D324D] to-[#7F5A83] text-white">
      <div className="h-full flex flex-col items-center justify-between">
        <Header popularSearches={popularSearches} setPopularSearches={setPopularSearches} />
        <div className=" flex flex-col py-4 h-full items-center justify-center">
          <h1 className="text-4xl">I'm interested in...</h1>
          <p className="max-w-[32rem] text-gray-400 text-sm my-4">Savvant scours the internet for reviews on any product, providing you with the info you need to make up your mind on this potential purchase!</p>
          <SearchBar />
        </div>
        {popularSearches && (
          <div className='fixed bottom-0 w-full bg-white/20'>Popular searches</div>
        )}
      </div>
    </div>
  );
};

export default Home;
