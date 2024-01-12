import { DISH_IMG_URL } from "../../Utils/config";

const RestauramtDish = ({ item }) => {
  const { name, price, description, imageId } = item.card.info;

  return (
    <div className="mb-5 shadow-md p-3 border-b flex justify-between rounded-md ">
      <div className="max-w-xl">
        <p className="text-lg  font-bold ">{name}</p>
        <span className="font-semibold ">&#8377;{price / 100}</span>
        {description && (
          <p className="mt-4  truncate text-[#282c3f73]">{description}</p>
        )}
      </div>
      <div className="relative">
        {imageId && (
          <img
            className="h-24 w-28 object-cover rounded-md"
            src={DISH_IMG_URL + imageId}
            alt="Dish's image"
          />
        )}
        <button className="absolute px-6 h-10 font-bold text-sm shadow-md border border-gray-500  bottom-2 left-4 rounded-md bg-white">
          ADD
        </button>
      </div>
    </div>
  );
};

export default RestauramtDish;
