import { useEffect, useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";

const Body = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-44 py-14">
      <Search search={search} setSearch={setSearch} />
      <RestaurantContainer search={search} />
    </div>
  );
};

export default Body;
