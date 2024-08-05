import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { RESTAURANTS_URL } from "../Utils/config";
import { HOMEPAGE_RESTAURANT_LIST } from "../Utils/Data";

const RestaurantContainer = ({ search }) => {
  const [restaurantData, setRestaurantData] = useState(HOMEPAGE_RESTAURANT_LIST); // Set initial value to null
  const [restaurantList, setRestaurantList] = useState(
    HOMEPAGE_RESTAURANT_LIST
  );

  useEffect(() => {
    if (search === "") {
      setRestaurantList(restaurantData || []); // Set default value to empty array
    } else {
      const filteredRestaurant = (restaurantData || []).filter((restaurant) => {
        return restaurant.info.name
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setRestaurantList(filteredRestaurant);
    }
  }, [search, restaurantData]);

  return restaurantData === null ? ( // Check for null instead of existence
    <RestaurantCardShimmer />
  ) : restaurantList.length === 0 ? (
    <div className="mt-10 w-full flex items-center justify-center ">
      <p className="text-xl font-bold">No match found for "{search}"</p>
    </div>
  ) : (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {restaurantList.map((restaurant) => (
        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
          <RestaurantCard restaurant={restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
