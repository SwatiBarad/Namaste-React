import { useEffect, useState } from "react";
import React from "react";
import { Veg_img } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { recommended_img } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (menu === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatings,
    avgRating,
    areaName,
  } = menu?.cards[2]?.card?.card?.info;

  const { slaString } = menu?.cards[2]?.card?.card?.info?.sla;

  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div>
      <div className="text-start my-6 w-8/12 m-auto">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="border rounded-3xl border-gray-300 shadow-xl  my-10 px-8 py-4">
          <div className=" font-bold text-lg">
            {" "}
            <span>
              ⭐{avgRating}({totalRatings / 1000}k+ ratings)
            </span>
            <span> ▪{costForTwoMessage}</span>
          </div>
          <p className="text-lg text-green-800 font-bold">
            {cuisines.join(", ")}
          </p>
          <p> {areaName}</p>
          <p>{slaString.toLowerCase()}</p>
        </div>
      </div>
      {/* category accordions*/}
      {categories.map((category, index) => (
        <ResCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
