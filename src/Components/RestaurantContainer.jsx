import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const RestaurantContainer = ({ search }) => {
  const [restaurantData, setRestaurantData] = useState(null); // Set initial value to null
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const resData = await data.json();
      setRestaurantData(
        resData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {}
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

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
