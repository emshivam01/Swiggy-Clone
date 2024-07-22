import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Search = ({ search, setSearch }) => {
  return (
    <div  className="">
      <div className="border-[2px] max-w-lg border-[#bebfc5]  flex items-center m-auto rounded-md overflow-hidden pr-5 ">
        <input
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          className="px-5 py-3 w-full  outline-none placeholder:font-medium placeholder:text-black  "
          type="text"
          placeholder="Search for restaurants and food"
          value={search}
        />

        {search.length > 0 ? (
          <button
            onClick={() => {
              setSearch("");
            }}
          >
            <RxCross2 size={25} />
          </button>
        ) : (
          <button>
            <BsSearch size={22} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
