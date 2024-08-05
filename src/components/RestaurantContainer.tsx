"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Define the types for the restaurant data
interface Facet {
  id: string;
  label: string;
  facetInfo: { label: string }[];
}

interface RestaurantInfo {
  id: string;
  cloudinaryImageId: string;
  name: string;
  description: string;
  avgRating: string;
  sla: {
    deliveryTime: string;
  };
  cuisines: string[];
  locality: string;
}

interface Restaurant {
  info: RestaurantInfo;
}

const RestaurantContainer = () => {
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>([]);
  const [sortData, setSortData] = useState<Facet[]>([]);
  const [title, setTitle] = useState("");

  const path = usePathname();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.07480%26lng%3D72.88560%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const resData = await response.json();

      // Safely access the data
      const labelData =
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setTitle(resData?.data?.cards[2]?.card?.card?.title);
      setSortData(resData?.data?.cards[3]?.card?.card?.facetList || []);
      setRestaurantData(
        resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      console.log(resData?.data?.cards[3]?.card?.card?.facetList, 27);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-5 py-3 lg:px-48 mb-10">
      <p className="text-base md:text-xl my-3 px-2 font-bold">{title}</p>

      <div className="flex flex-wrap gap-2">
        <Select>
          <SelectTrigger className="w-[165px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance(Default)</SelectItem>
            <SelectItem value="deliverytime">Delivery Time</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="lowtohigh">Cost:LowToHigh</SelectItem>
            <SelectItem value="hightolow">Cost:HighToLow</SelectItem>
          </SelectContent>
        </Select>

        {sortData.map((data) => (
          <Button
            className="bg-white text-black shadow-sm rounded-2xl border hover:bg-gray-100"
            key={data.id}
          >
            {data.facetInfo[0]?.label}
          </Button>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full">
          {restaurantData.map((restaurant) => (
            <Link
              href={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="md:hover:scale-95 transition-transform duration-300"
            >
              <Image
                className="w-full md:w-[280px] h-40 object-cover rounded-lg shadow-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restaurant.info.cloudinaryImageId}`}
                alt={restaurant.info.description || "Image"}
                width={288}
                height={360}
              />

              <div className="p-3">
                <h2
                  className="text-xl font-semibold truncate"
                  title={restaurant.info.name}
                >
                  {restaurant.info.name}
                </h2>
                <div className="text-base font-semibold flex items-center tracking-wide">
                  <Image
                    className="w-5 mr-1"
                    src="./images/rating.svg"
                    alt="rating-logo"
                    width={30}
                    height={30}
                  />
                  {restaurant.info.avgRating} •{" "}
                  {restaurant.info.sla.deliveryTime} mins
                </div>
                <div
                  className="text-base font-normal mt-1 truncate"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;
