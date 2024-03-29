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
import RestauramtDish from "./Restaurant/RestaurantDish";
import Coupon from "./Restaurant/Coupon.jsx";
import { useEffect, useState } from "react";
import { DISH_IMG_URL, RESTAURANT_URL } from "../Utils/config";
import { useParams } from "react-router-dom";
import RestauramtShimmer from "./Restaurant/RestaurantShimmer.jsx";

const Testing = () => {
  const [dishItems, setDishItems] = useState([]);
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

    setDish(DishItems.data);
    setX(DishItems.data.cards[2]);
  };

  return (
    <div className="px-[560px] mt-10">
      <div className="flex flex-col p-2">
        {/** Dishes List */}

        <Accordion cards={x?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
        {console.log(dishItems)}
      </div>
    </div>
  );
};

export default Testing;

const Accordion = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!cards || cards.length === 0) return <div>Loading</div>;
  return (
    <div>
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
      <h2 className="text-xl font-bold"> {title} </h2>

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
