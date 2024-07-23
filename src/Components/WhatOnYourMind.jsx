import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import WhatsOnYouMindShimmer from "./WhatsOnYouMindShimmer";

const WhatOnYourMind = () => {
  const [gridImage, setGridImage] = useState([]);

  const fetchGridImage = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resData = await data.json();
      const imageGridCardsInfo =
        resData.data.cards[0]?.card?.card?.imageGridCards?.info;
      if (imageGridCardsInfo) {
        setGridImage(imageGridCardsInfo);
      } else {
        console.error("Image grid data not found in response");
      }
    } catch (error) {
      console.error("Failed to fetch grid image:", error);
    }
  };

  useEffect(() => {
    fetchGridImage();
  }, []);

  return gridImage.length < 1 ? (
    <WhatsOnYouMindShimmer />
  ) : (
    <div className="px-8 lg:px-18 xl:px-48 pt-8">
      <p className="text-2xl font-bold">What's on your mind?</p>

      <Carousel className="mt-3">
        <CarouselContent>
          {gridImage.map((gridCardImage) => {
            return (
              <CarouselItem className="basis-1/7">
                <img
                  className="w-24 lg:w-36"
                  src={
                    " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    gridCardImage.imageId
                  }
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default WhatOnYourMind;
