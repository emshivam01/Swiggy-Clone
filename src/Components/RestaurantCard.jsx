import { AiFillStar } from "react-icons/ai";

const RestaurantCard = () => {
  return (
    <div className=" w-72 hover:scale-105 transition-all duration-300  border-gray-500 shadow-md hover:shadow-lg">
      <img
        className="w-72 h-52 object-cover"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suz4we5x7dgznrquxvu9"
        alt="restaurant-poster"
      />
      <div className="p-3  flex flex-col ">
        <h2 className="text-2xl font-semibold">Burger King</h2>
        <div className="text-xl font-medium flex items-center tracking-wide">
          <AiFillStar /> 4.6 • 30 mins
        </div>
        <div className="text-lg font-normal">Burgers, American</div>
        <div className="text-lg font-normal">Civil Lines</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
