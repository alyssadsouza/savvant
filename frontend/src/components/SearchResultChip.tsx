import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

type Props = {
  item: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function SearchResultChip({ item, setQuery }: Props) {
  const navigate = useNavigate();

  return (
    <div className="p-1 mx-4 min-w-[12rem] bg-white/70 text-black inline-flex justify-between items-center gap-1 rounded-[100px]">
      <p className="pl-3">{item}</p>
      <button
        onClick={() => {
          if (item) {
            setQuery(item);
            navigate("search");
          }
        }}
        className="rounded-[100%] bg-[#0E3E61] p-2 hover:bg-[#6D5D82] transition-all"
      >
        <SearchIcon className="w-4 h-4 fill-white" />
      </button>
    </div>
  );
}

export default SearchResultChip;
