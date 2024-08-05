"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the type for a single cuisine item
interface CuisineItem {
  imageId: string;
  description?: string; // Optional if the description may not be present
}

const PopularCuisines = () => {
  const [popularCuisines, setPopularCuisines] = useState<CuisineItem[]>([]);

  const fetchPopularCuisines = async () => {
    const response = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Flanding%2FPRE_SEARCH%3Flat%3D19.07480%26lng%3D72.88560"
    );
    const fetchedData = await response.json();

    // Ensure to check and set data correctly
    const cuisines =
      fetchedData?.data?.cards[1]?.card?.card?.imageGridCards?.info || [];
    setPopularCuisines(cuisines);
  };

  useEffect(() => {
    fetchPopularCuisines();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        slidesToScroll: 4,
      }}
      className="mt-5"
    >
      <CarouselContent>
        {popularCuisines.map((item, index) => (
          <CarouselItem key={index} className="basis-1/9 cursor-pointer">
            <Image
              className="w-20 lg:w-20"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              alt={item.description || "Image"}
              width={288}
              height={360}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default PopularCuisines;
