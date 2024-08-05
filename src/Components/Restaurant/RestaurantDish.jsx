import { DISH_IMG_URL } from "../../Utils/config";

const RestauramtDish = ({ item }) => {
  const { name, price, description, imageId } = item.card.info;

  const expandDescription = () => {};

  return (
    <div className="mb-5 shadow-md p-3 border flex justify-between rounded-md relative">
      <div className="max-w-xl">
        <p className="text-lg  font-bold ">{name}</p>
        <span className="font-semibold ">&#8377;   {price / 100}</span>
        <div className="flex ">
          {description && (
            <p className="mt-4 max-w-md truncate text-[#282c3f73]">{description}</p>
          )}
          <button className="cursor-pointer mt-4">See more</button>
        </div>
      </div>
      <div className="">
        {imageId && (
          <img
            className="h-24 w-28 object-cover rounded-md"
            src={DISH_IMG_URL + imageId}
            alt="Dish's image"
          />
        )}
        <button className="absolute px-6 h-8 font-bold text-sm shadow-md  bottom-2 right-8 rounded-md bg-white">
          ADD
        </button>
      </div>
    </div>
  );
};

export default RestauramtDish;
