import Image from "next/image";

const RestaurantCard = ({}) => {
  return (
    <div className="border-2 border-black">
      <Image className="w-full" src="" width={30} height={30} alt="img" />
      <div className="p-3 w-full">
        <h2
          className="text-xl font-semibold truncate"
          title={restaurant.info.name}
        >
          {restaurant.info.name}
        </h2>
        <div className=" text-base font-semibold flex items-center tracking-wide ">
          <Image
            className="w-5 mr-1"
            src="./images/rating.svg"
            alt="rating-logo"
            width={30}
            height={30}
          />
          {restaurant.info.avgRating} • {restaurant.info.sla.deliveryTime} mins
        </div>
        <div
          className="text-base font-normal mt-1 truncate "
          title={restaurant.info.cuisines.slice(0, 4).join(", ")}
        >
          {restaurant.info.cuisines.slice(0, 2).join(", ")}
        </div>

        <div
          className="text-base truncate font-normal"
          title={restaurant.info.locality}
        >
          {restaurant.info.locality}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
