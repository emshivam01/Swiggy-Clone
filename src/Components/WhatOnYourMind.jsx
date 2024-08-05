import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import WhatsOnYouMindShimmer from "./WhatsOnYouMindShimmer";
import { WhatsOnYouMind } from "../Utils/Data";

const WhatOnYourMind = () => {
  const [gridImage, setGridImage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGridImage(WhatsOnYouMind);
      setLoading(false);
    }, 1000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <WhatsOnYouMindShimmer />
  ) : (
    <div className="px-8 lg:px-18 xl:px-48 pt-8">
      <p className="text-2xl font-bold">What's on your mind?</p>

      <Carousel className="mt-3">
        <CarouselContent>
          {gridImage.map((gridCardImage) => {
            return (
              <CarouselItem className="basis-1/7" key={gridCardImage.imageId}>
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
