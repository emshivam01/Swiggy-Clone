"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import WhatsOnYourMindShimmer from "./shimmer/WhatsOnYourMindShimmer";
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

const WhatsOnYourMind = () => {
  const [gridImageData, setGridImageData] = useState<GridImage[]>([]); // Use the type here
  const [gridImgTitle, setGridImgTitle] = useState("");

  const fetchGridImage = async () => {
    try {
      const response = await fetch(
        "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.07480%26lng%3D72.88560%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const gridData = await response.json();

      // Safely access the data
      const images =
        gridData?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
      setGridImageData(images);
      setGridImgTitle(gridData?.data?.cards[0]?.card?.card?.header?.title);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchGridImage();
  }, []);

  return gridImageData.length < 1 ? (
    <WhatsOnYourMindShimmer />
  ) : (
    <div className="px-5 py-2 lg:px-48">
      <p className=" text-base md:text-xl py-2 px-2 font-bold ">
        {" "}
        {gridImgTitle}
      </p>

      <Carousel
        className="py-2"
        opts={{
          align: "start",
          dragFree: true,
          slidesToScroll: 5,
        }}
      >
        <CarouselContent>
          {gridImageData.map((gridImg) => (
            <CarouselItem
              key={gridImg.id}
              className="flex items-center justify-center basis-1/7"
            >
              <Image
                className="w-28 lg:w-32"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${gridImg.imageId}`}
                alt={gridImg.description || "Image"}
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
        {/* {<div className="flex gap-2">
          <button className=" p-1.5 rounded-full bg-[#e4e5e6]">
            <Image
              className="w-5"
              src="images/previous.svg"
              width={40}
              height={40}
              alt="next"
            />
          </button>
          <button className=" p-1.5 rounded-full bg-[#e4e5e6]">
            <Image
              className="w-5"
              src="images/next.svg"
              width={40}
              height={40}
              alt="next"
            />
          </button>
        </div>} */}
      </Carousel>
    </div>
  );
};

export default WhatsOnYourMind;
