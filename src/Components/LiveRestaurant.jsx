import { useEffect, useState } from "react";

const LiveRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING"
        );

        const restaurantData = await data.json();
        setRestaurantList(restaurantData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once during mount

  return <div>{console.log(restaurantList?.data?.cards[4])}</div>;
};

export default LiveRestaurant;
