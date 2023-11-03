/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { IMG_URL } from "../Utils/config";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className=" w-[350px]  m-auto hover:scale-95 transition-all duration-300  border-gray-500 shadow-md hover:shadow-lg">
      <img
        className="w-96 h-52 object-cover rounded-md shadow-md"
        src={IMG_URL + restaurant.info.cloudinaryImageId}
        alt="restaurant-poster"
      />
      <div className="p-3   ">
        <h2 className="text-xl font-semibold">{restaurant.info.name}</h2>
        <div className="text-base font-semibold flex items-center tracking-wide">
          <AiFillStar /> {restaurant.info.avgRating} •{" "}
          {restaurant.info.sla.deliveryTime} mins
        </div>
        <div className="text-base font-normal ">
          {restaurant.info.cuisines.slice(0, 4).join(", ")}
        </div>

        <div className="text-base font-normal">{restaurant.info.locality}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
