"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import RestaurantDish from "@/components/RestaurantDish";
import Image from "next/image";

interface RestaurantDetails {
  name: string;
  avgRatingString: string;
  totalRatingsString: string;
  cuisines?: string[];
  areaName: string;
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

interface DishCategory {
  card: {
    card: {
      title: string;
      itemCards: DishItem[];
    };
  };
}

const RestaurantPage = () => {
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantDetails | null>(null);
  const [dishItems, setDishItems] = useState<DishCategory[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDishes = async () => {
      if (!id) return; // Ensure id exists

      try {
        const response = await fetch(
          `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D26.9124336%26lng%3D75.7872709%26restaurantId%3D${id}`
        );
        const Resdata = await response.json();
        const ResDetails = Resdata?.data?.cards[2]?.card?.card?.info;
        console.log("Restaurant Details:", ResDetails);

        const dishCategories =
          Resdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
          [];

        setRestaurantDetails(ResDetails);
        setDishItems(dishCategories);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, [id]);

  return (
    <div className="md:mx-[200px] lg:mx-[400px] mt-5 lg:mt-10 p-3 lg:p-5">
      {restaurantDetails ? (
        <>
          <h2 className="text-xl font-extrabold mb-4">
            {restaurantDetails.name}
          </h2>

          <div className="border shadow-lg rounded-xl p-5 flex flex-col gap-3">
            <div>
              <p className="text-lg font-bold text-black mb-1 flex items-center gap-2">
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
            <p className="text-black pl-1 font-bold text-sm flex gap-3">
              Outlet{" "}
              <span className="text-[#ff5200] font-medium flex gap-1">
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
            <p className="pl-1 text-black font-semibold text-sm">30-35 Mins</p>
          </div>
        </>
      ) : (
        <p>Loading restaurant details...</p>
      )}

      {dishItems.length > 0 ? (
        dishItems.map((category, index) => (
          <RestaurantDish items={category} key={index} />
        ))
      ) : (
        <p>No dishes available</p>
      )}
    </div>
  );
};

export default RestaurantPage;
