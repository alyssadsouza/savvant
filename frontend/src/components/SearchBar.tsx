import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import Typewriter from "./Typewriter";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setQuery }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  /* for the typing placeholder animation */
  const placeholders = ["iPhone 14", "LG Monitor", "Beats Headphones"];
  const [placeholder, setPlaceholder] = useState<string>("");
  Typewriter(setPlaceholder, placeholders);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (search) {
          setQuery(search);
          setSearch("");
          navigate("search");
        }
      }}
    >
      <div className="bg-white px-2 py-1 rounded-[100px] my-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 w-[32rem] text-3xl text-black rounded-[100px] focus:outline-0"
        />
        <button
          onClick={() => {
            if (search) {
              setQuery(search);
              setSearch("");
              navigate("search");
            }
          }}
          className="rounded-[100%] bg-[#0E3E61] p-3 hover:bg-[#6D5D82] transition-all"
        >
          <SearchIcon className="w-6 h-6 fill-white" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
