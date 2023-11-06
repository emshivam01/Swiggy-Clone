import { DISH_IMG_URL } from "../../Utils/config";

const RestauramtDish = ({ item }) => {
  console.log(item);

  const { name, price, description, imageId } = item.card?.info;

  return (
    <div className="mb-5 shadow-md p-3 border-b flex justify-between rounded-md">
      <div className="max-w-xl">
        <p className="text-lg  font-bold">{name}</p>
        <span className="font-semibold ">&#8377;{price / 100}</span>
        <p className="mt-4  text-[#282c3f73]">{description}</p>
      </div>
      <div>
        <img
          className="h-24 w-28 object-cover rounded-md"
          src={DISH_IMG_URL + imageId}
          alt="Dish's image"
        />
      </div>
    </div>
  );
};

export default RestauramtDish;
