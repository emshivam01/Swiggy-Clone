/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { IMG_URL } from "../Utils/config";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className=" w-full bg-[#FAF9F8]  m-auto hover:scale-95 transition-all duration-300  border-gray-500 shadow-md hover:shadow-xl">
      <img
        className="w-full h-44 object-cover rounded-t-md shadow-md "
        src={IMG_URL + restaurant.info.cloudinaryImageId}
        alt="restaurant-poster"
      />
      <div className="p-3 bg-[#FAF9F8]">
        <h2
          className="text-xl font-semibold truncate"
          title={restaurant.info.name}
        >
          {restaurant.info.name}
        </h2>
        <div className="text-base font-semibold flex items-center tracking-wide ">
          <AiFillStar /> {restaurant.info.avgRating} •{" "}
          {restaurant.info.sla.deliveryTime} mins
        </div>
        <div
          className="text-base font-normal mt-1 truncate"
          title={restaurant.info.cuisines.slice(0, 4).join(", ")}
        >
          {restaurant.info.cuisines.slice(0, 4).join(", ")}
        </div>

        <div className="text-base font-normal">{restaurant.info.locality}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
