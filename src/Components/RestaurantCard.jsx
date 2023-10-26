import { AiFillStar } from "react-icons/ai";
import { IMG_URL } from "../Utils/config";

const RestaurantCard = ({ info }) => {
  console.log(info);

  return (
    <div className=" w-72 hover:scale-95 transition-all duration-300  border-gray-500 shadow-md hover:shadow-lg">
      <div className="p-3  flex flex-col gap-1 ">
        <h2 className="text-2xl font-semibold">Burger King</h2>
        <div className="text-lg font-medium flex items-center tracking-wide">
          <AiFillStar /> 4.6 • 30 mins
        </div>
        <div className="text-lg font-normal">Burgers, American</div>
        <div className="text-lg font-normal">Civil Lines</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
