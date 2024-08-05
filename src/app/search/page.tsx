"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PopularCuisines from "./PopularCuisines";

const Page = () => {
  const [search, setSearch] = useState("");
  const [searchedRestaurants, setSearchedRestaurants] = useState<Restaurant[]>(
    []
  );

  useEffect(() => {
    const fetchSearchedRestaurants = async () => {
      if (search.length > 0) {
        try {
          const response = await fetch(
            `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fsuggest%3Flat%3D19.07480%26lng%3D72.88560%26str%3D${search}%26trackingId%3Dundefined%26includeIMItem%3Dtrue`
          );
          const data = await response.json();
          setSearchedRestaurants(data?.data?.suggestions || []);
        } catch (error) {
          console.error("Error fetching searched restaurants:", error);
        }
      } else {
        setSearchedRestaurants([]);
      }
    };

    fetchSearchedRestaurants();
  }, [search]);

  return (
    <div className="px-3 lg:px-96 my-10">
      <div className="border-[2px] border-[#bebfc5] flex items-center m-auto rounded-md overflow-hidden pr-5">
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="px-5 py-3 w-full outline-none placeholder:font-medium placeholder:text-black"
          type="text"
          placeholder="Search for restaurants and food"
          value={search}
        />
        {search.length > 0 ? (
          <button onClick={() => setSearch("")}>
            <Image
              src="/images/cross.svg"
              alt="clear-search"
              width={24}
              height={24}
            />
          </button>
        ) : (
          <button>
            <Image
              src="/images/search.svg"
              alt="search"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {search.length === 0 ? (
        <PopularCuisines />
      ) : (
        <SearchedRestaurant restaurants={searchedRestaurants} />
      )}
    </div>
  );
};

export default Page;

interface Restaurant {
  imageId: string;
  text: string;
  type: string;
  cloudinaryId: string;
}

interface SearchedRestaurantsProps {
  restaurants: Restaurant[];
}

const SearchedRestaurant = ({ restaurants }: SearchedRestaurantsProps) => {
  return (
    <div className=" mt-2">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.imageId}
          className="flex gap-4 items-center p-2 hover:bg-[#f2f6fc] rounded-md"
        >
          <Image
            className="rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${restaurant.cloudinaryId}`}
            width={60}
            height={60}
            alt="Restaurant Thumbnail"
          />
          <div>
            <p className="text-base font-medium">{restaurant.text}</p>
            <p className="text-xs text-[#686b78]">{restaurant.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
