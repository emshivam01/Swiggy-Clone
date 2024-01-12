import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RestaurantDish from "./Restaurant/RestaurantDish";
import Coupon from "./Restaurant/Coupon.jsx";
import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../Utils/config";
import { useParams } from "react-router-dom";
import RestauramtShimmer from "./Restaurant/RestaurantShimmer.jsx";
const Restaurant = () => {
  const [dishItems, setDishItems] = useState([]);
  const [dishes, setDishes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    const data = await fetch(RESTAURANT_URL + id);
    const DishItems = await data.json();
    console.log(DishItems);
    console.log(DishItems?.data?.cards[0]?.card?.card?.info);
    setDishItems(DishItems?.data?.cards[0]?.card?.card?.info);
    setDishes(
      DishItems.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards
    );
  };

  const {
    name,
    cuisines,
    locality,
    totalRatingsString,
    avgRatingString,
    costForTwoMessage,
  } = dishItems;

  console.log(dishes, 41);

  return dishItems.length === 0 ? (
    <RestauramtShimmer />
  ) : (
    <div className="px-[560px] mt-10">
      <div className="flex flex-col p-2">
        <div className="w-full flex justify-between">
          <div>
            <h2 className="font-semibold text-xl mb-2">{name}</h2>
            <div className="text-sm text-[#7e808c]">
              <p className="mb-1">{cuisines?.join(", ")}</p>
              <p>{locality}, 2km</p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-between items-center rounded-md  border border-[#e9e9eb]">
            <p className="text-lg font-bold  text-[#7e808c] flex items-center gap-2 border-b px-2 pb-1">
              <AiFillStar /> {avgRatingString}
            </p>
            <p>{totalRatingsString}</p>
          </div>
        </div>

        <div className="border-t border-dashed border-[#d3d3d3] w-full h-0 mt-7"></div>

        {/**Offer*/}
        <div className="text-base font-extrabold flex gap-8 mt-7">
          <div className="flex  gap-2">
            <BiTime size={25} />
            <p>25 mins</p>
          </div>
          <div className="flex gap-2">
            <HiOutlineCurrencyRupee size={25} />
            <p>{costForTwoMessage}</p>
          </div>
        </div>

        {/** Coupon card */}

        <div className="flex gap-2 overflow-x-auto ">
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
        </div>
        {/** Dishes List */}

        <div className="mt-10">
          {dishes?.map((item) => {
            return <RestaurantDish item={item} key={item?.card?.info?.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
