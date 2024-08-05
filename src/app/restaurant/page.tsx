"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  

  const id = useParams();

  const fetchDishes = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=" +
        id
    );
    const DishItems = await data.json();
    console.log(
      DishItems.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
        .card.itemCards,
      233
    );
    setDishItems(DishItems?.data?.cards[2]?.card?.card?.info);
    setDishes(
      DishItems.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
        .card.itemCards
    );
    console.log(
      DishItems.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
        .card.itemCards
    );
  };

  useEffect(() => {
    fetchDishes();
  });

  return <div></div>;
};

export default page;
