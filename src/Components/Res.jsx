import { AiFillStar } from "react-icons/ai";
import { BiSolidCaretDownCircle, BiTime } from "react-icons/bi";
import {
  BsCaretDown,
  BsCaretUp,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";

import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RestauramtDish from "./Restaurant/RestaurantDish.jsx";
import Coupon from "./Restaurant/Coupon.jsx";
import { useEffect, useState } from "react";
import { DISH_IMG_URL, RESTAURANT_URL } from "../Utils/config";
import { useParams } from "react-router-dom";
import RestauramtShimmer from "./Restaurant/RestaurantShimmer.jsx";

const Res = () => {
  const [dishItems, setDishItems] = useState([]); // Restaurant Info
  const [dish, setDish] = useState([]); // Top Level Cards (Data.cards)
  const [x, setX] = useState([]); // GroupedCard (DishList Array)

  const id = "45602";

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    const data = await fetch(RESTAURANT_URL + id);
    const DishItems = await data.json();

    setDishItems(DishItems?.data?.cards[0]?.card?.card?.info);

    setDish(DishItems.data);
    setX(DishItems.data.cards[2]);
  };

  return (
    <div className="px-[560px] mt-10">
      <div className="flex flex-col p-2">
        <div className="w-full flex justify-between">
          <div>
            <h2 className="font-semibold text-xl mb-2">{dishItems.name}</h2>
            <div className="text-sm text-[#7e808c]">
              <p className="mb-1">{dishItems.cuisines?.join(", ")}</p>
              <p>{dishItems.locality}, 2km</p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-between items-center rounded-md  border border-[#e9e9eb]">
            <p className="text-lg font-bold  text-[#7e808c] flex items-center gap-2 border-b px-2 pb-1">
              <AiFillStar /> {dishItems.avgRatingString}
            </p>
            <p>{dishItems.totalRatingsString}</p>
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
            <p>{dishItems.costForTwoMessage}</p>
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

        <Accordion cards={x?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
      </div>
    </div>
  );
};

export default Res;

const Accordion = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!cards || cards.length === 0) return <div>Loading</div>;
  return (
    <div className=" mt-7">
      {cards.map((card) => {
        if (card?.card?.card?.title) {
          return (
            <div
              key={card.card.card.title}
              className="mb-5 shadow p-3 border-2 flex flex-col  justify-between rounded-md "
            >
              <AccordionHeader
                title={card.card.card.title}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              <AccordionContext
                itemCards={card?.card?.card?.itemCards}
                isOpen={isOpen}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

const AccordionHeader = ({ title, isOpen, setIsOpen }) => {
  const handleToggle = () => {
    setIsOpen(isOpen === true ? false : true);
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold"> {title}</h2>

      <button onClick={handleToggle}>
        {isOpen ? (
          <PiCaretUpBold fontSize={20} />
        ) : (
          <PiCaretDownBold fontSize={20} />
        )}
      </button>
    </div>
  );
};

const AccordionContext = ({ itemCards, isOpen }) => {
  return isOpen ? (
    <div className="p-2 mt-6">
      {itemCards?.map((itemCard) => (
        <div
          key={itemCard.card.info.name}
          className="mb-5  py-2 border-b flex justify-between"
        >
          <div className="max-w-xl">
            <p className="text-lg font-bold">{itemCard.card.info.name}</p>
            <span className="font-semibold">
              &#8377;{itemCard.card.info.price / 100}
            </span>
            <p className="mt-4 text-[#282c3f73]">
              {itemCard.card.info.description}
            </p>
          </div>
          <div>
            <img
              className="h-24 w-28 object-cover rounded-md"
              src={DISH_IMG_URL + itemCard.card.info.imageId}
              alt="Dish's image"
            />
          </div>
        </div>
      ))}
    </div>
  ) : null;
};
