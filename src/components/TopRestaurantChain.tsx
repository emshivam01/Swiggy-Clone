"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TopRestaurantChainsShimmer from "./shimmer/TopRestaurantChainsSHimmer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the type for grid image data
interface GridImage {
  id: string;
  description: string; // Update this to match the actual data structure
  imageId: string; // Adjust based on your actual data
}

const TopRestaurantChains = () => {
  const [topRestaurantData, setTopRestaurantData] = useState<GridImage[]>([]); // Use the type here
  const [resTitle, setResTitle] = useState("");

  const fetchGridImage = async () => {
    try {
      const response = await fetch(
        "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.07480%26lng%3D72.88560%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const gridData = await response.json();

      // Safely access the data
      const images =
        gridData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setTopRestaurantData(images);
      setResTitle(gridData?.data?.cards[1]?.card?.card?.header?.title);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchGridImage();
  }, []);

  return (
    <div className="px-5 py-2 lg:px-48">
      <p className="text-base md:text-xl py-3 px-2 font-bold">{resTitle}</p>

      <Carousel
        className="py-2"
        opts={{
          align: "start",
          dragFree: true,
          slidesToScroll: 4,
        }}
      >
        <CarouselContent>
          {topRestaurantData.map((restaurant) => (
            <CarouselItem
              key={restaurant.info.id}
              className="flex flex-col items-center justify-center md:basis-1/3 lg:basis-1/4 hover:scale-95 transition-transform duration-300 "
            >
              <Image
                className="w-[350px] lg:w-[600px] h-40 object-cover rounded-md shadow-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restaurant.info.cloudinaryImageId}`}
                alt={restaurant.description || "Image"}
                width={288}
                height={360}
              />

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
                  {restaurant.info.avgRating} •{" "}
                  {restaurant.info.sla.deliveryTime} mins
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default TopRestaurantChains;
