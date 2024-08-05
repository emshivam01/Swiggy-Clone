"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import RestaurantDish from "@/components/RestaurantDish"; // Adjust this import based on your project structure
import Image from "next/image";
import { Key } from "lucide-react";

const RestaurantPage = () => {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [dishItems, setDishItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(
          `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D26.9124336%26lng%3D75.7872709%26restaurantId%3D${id}`
        );
        const Resdata = await response.json();
        const ResDetails = Resdata?.data?.cards[2]?.card?.card?.info;
        console.log("Restaurant Details:", ResDetails);

        const dishItem =
          Resdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        setRestaurantDetails(ResDetails);
        setDishItems(dishItem.slice(1));
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    if (id) {
      fetchDishes();
    }
  }, [id]);

  return (
    <div className="md:mx-[200px] lg:mx-[400px]  mt-5 lg:mt-10 p-3 lg:p-5">
      <h2 className="text-xl font-extrabold mb-4">{restaurantDetails?.name}</h2>

      <div className="border shadow-lg  rounded-xl  p-5 flex flex-col gap-3">
        <div className="">
          <p className="text-lg font-bold text-black mb-1 flex items-center gap-2 ">
            <Image
              src="/images/rating-restaurant.svg"
              width={22}
              height={22}
              alt="rating"
            />
            {restaurantDetails.avgRatingString}
            <span>({restaurantDetails.totalRatingsString})</span>
          </p>
          <p className="text-sm font-bold pl-1 underline text-[#ff5200]">
            {restaurantDetails.cuisines?.join(", ")}
          </p>
        </div>
        <p className="text-black  pl-1 font-bold text-sm flex gap-3">
          Outlet{" "}
          <span className="text-[#ff5200]  font-medium flex gap-1">
            {restaurantDetails.areaName}
            <Image
              className="cursor-pointer"
              src="/images/arrow-down.svg"
              width={22}
              height={22}
              alt="arrow-down"
            />
          </span>
        </p>

        <p className=" pl-1 text-black font-semibold text-sm">30-35 Mins</p>
      </div>

      {dishItems.map((items, index) => (
        <RestaurantDish items={items} key={index} />
      ))}
    </div>
  );
};

export default RestaurantPage;
