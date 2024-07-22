import { useEffect, useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";

const Body = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-8 lg:px-18 xl:px-32 py-8 lg:py-14">
      <Search search={search} setSearch={setSearch} />
      <RestaurantContainer search={search} />
    </div>
  );
};

export default Body;
