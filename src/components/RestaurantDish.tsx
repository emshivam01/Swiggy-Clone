import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface RestaurantDishProps {
  items: {
    card: {
      card: {
        title: string;
        itemCards: DishItem[];
      };
    };
  };
}

interface DishItem {
  card: {
    info: {
      name: string;
      itemAttribute: {
        vegClassifier: "VEG" | "NON_VEG";
      };
      description: string;
      imageId: string;
    };
  };
}

const RestaurantDish = ({ items }: RestaurantDishProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="border-2 mt-4 p-3 rounded-xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline border-none font-extrabold text-lg">
          {items?.card?.card?.title}
        </AccordionTrigger>

        <AccordionContent>
          <Dish item={items.card.card.itemCards} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RestaurantDish;

const Dish = ({ item }: { item: DishItem[] }) => {
  if (item)
    return (
      <>
        {item.map((dish, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 mb-4 border-b"
          >
            <div className="w-[60%] md:w-[75%]">
              <div>
                {dish?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <Image
                    src="/images/veg.png"
                    alt="category-icon"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/images/non_veg.png"
                    alt="category-icon"
                    width={20}
                    height={20}
                  />
                )}
                <h2 className="text-lg font-bold">{dish?.card?.info?.name}</h2>
                <p className="text-base font-semibold">Rs 70</p>
              </div>
              <p>4.0</p>
              <div>
                <p>{dish?.card?.info?.description}</p>
              </div>
            </div>

            <div className="relative">
              <Image
                className="rounded-lg w-28 h-28"
                src={
                  `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/` +
                  dish?.card?.info?.imageId
                }
                width={100}
                height={100}
                alt="dish-item"
              />
              <button className="px-4 py-1 rounded-md bg-white absolute bottom-1 left-[27px]">
                Add
              </button>
            </div>
          </div>
        ))}
      </>
    );
};
