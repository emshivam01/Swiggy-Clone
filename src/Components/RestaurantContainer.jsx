import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../Utils/config";
import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URL);

    const json = await data?.json();

    const resDataList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(resDataList);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    console.log(restaurantList[2]?.info, 18);
  }, []);

  return (
    <div className="mt-10 flex flex-wrap gap-8">
      <RestaurantCard info={restaurantList} />
    </div>
  );
};

export default RestaurantContainer;
