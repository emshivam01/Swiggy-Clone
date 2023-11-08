import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RestauramtDish from "./Restaurant/RestaurantDish";
import Coupon from "./Restaurant/Coupon.jsx";
import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../Utils/config";
import { useParams } from "react-router-dom";
import RestauramtShimmer from "./Restaurant/RestaurantShimmer.jsx";

const Testing = () => {
  const [dishItems, setDishItems] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [dish, setDish] = useState([]);
  const [x, setX] = useState([]);
  const id = "45602";

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    const data = await fetch(RESTAURANT_URL + id);
    const DishItems = await data.json();

    setDishItems(DishItems?.data?.cards[0]?.card?.card?.info);
    setDishes(
      DishItems.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards
    );
    setDish(DishItems.data);
    setX(DishItems.data.cards[2]);
  };

  //   console.log(dish.cards);

  return (
    <div className="px-[560px] mt-10">
      <div className="flex flex-col p-2">
        {/** Dishes List */}
        <div className="mt-10">
          {dishes?.map((item) => {
            return <RestauramtDish item={item} key={item?.card?.info?.id} />;
          })}
        </div>

        {console.log(x?.groupedCard?.cardGroupMap?.REGULAR?.cards)}

        <Accordion cards={x?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
      </div>
    </div>
  );
};

export default Testing;

const Accordion = ({ cards }) => {
  return (
    <div>
      <h1>{console.log(cards.length, 60)}</h1>
    </div>
  );
};
