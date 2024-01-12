import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantContainer = ({ search }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const resData = await data.json();
    console.log(
      resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurantData(
      resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  useEffect(() => {
    if (search === "") {
      setRestaurantList(restaurantData);
    } else {
      const filteredRestaurant = restaurantData.filter((restaurant) => {
        return restaurant.info.name
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setRestaurantList(filteredRestaurant);
    }
  }, [search, restaurantData]);

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
