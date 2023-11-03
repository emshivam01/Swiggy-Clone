import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/restaurantData";

const RestaurantContainer = ({ search }) => {
  const [restaurantList, setRestaurantList] = useState(resObj.restaurants);

  useEffect(() => {
    if (search === "") {
      setRestaurantList(resObj.restaurants);
    } else {
      const filteredRestaurants = resObj.restaurants.filter((restaurant) => {
        return restaurant.info.name === search;
      });
      setRestaurantList(filteredRestaurants);
    }
  }, [search]);

  return (
    <div className="mt-10 grid lg:grid-cols-4 gap-y-4">
      {restaurantList.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
      ))}
      {console.log(restaurantList)}
    </div>
  );
};

export default RestaurantContainer;
