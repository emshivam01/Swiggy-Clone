import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <div className="w-[800px] border-2 border-gray-400 flex items-center m-auto rounded-md overflow-hidden pr-5">
        <input
          className="px-5 py-3 w-full  outline-none placeholder:font-medium placeholder:text-black  "
          type="text"
          placeholder="Search for restaurants and food"
        />
        <BsSearch size={25} />
      </div>
    </div>
  );
};

export default Search;
