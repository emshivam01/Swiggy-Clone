import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/restaurantData";
import { Link } from "react-router-dom";

const RestaurantContainer = ({ search }) => {
  const [restaurantList, setRestaurantList] = useState(resObj.restaurants);

  useEffect(() => {
    if (search === "") {
      setRestaurantList(resObj.restaurants);
    } else {
      const filteredRestaurants = resObj.restaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(search);
      });
      setRestaurantList(filteredRestaurants);
    }
  }, [search]);

  return (
    <div className="mt-14 grid lg:grid-cols-4 gap-y-4">
      {restaurantList.map((restaurant) => (
        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
          <RestaurantCard restaurant={restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
