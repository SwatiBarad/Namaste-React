import { useEffect, useState } from "react";
import React from "react";
import { Veg_img } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { recommended_img } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.8744775&lng=75.37036619999999&restaurantId=406932&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setMenu(json?.data);
    console.log("menu", menu);
  };
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
    id,
    veg,
  } = menu?.cards[2]?.card?.card?.info;

  const { minDeliveryTime, maxDeliveryTime } =
    menu?.cards[2]?.card?.card?.info?.sla;

  const { offers } = menu?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  const myFun = () => {
    const img = document.querySelector(".vegimg");
    if (veg === false) {
      return (img.style.filter = "hue-rotate(245deg)");
    }
  };
  return (
    <div className="resmenu-container">
      <div className="head">
        <h1>{name}</h1>
        <img className="vegimg" onProgress={myFun()} src={Veg_img} />
      </div>
      <div className="menudata-container">
        <h3>
          ⭐{avgRating}
          <span> ({totalRatings} ratings) </span>
          <span> ▪ {costForTwoMessage}</span>
        </h3>
        <h3 className="cuisines">
          <Link to={"/"}>{cuisines.join(", ")}</Link>
        </h3>
        <div className="small-container">
          <div className="small-first">
            <div className="dotOne"></div>
            <div className="line"></div>
            <div className="dotTwo"></div>
          </div>
          <div className="small-second">
            <h3>{areaName}</h3>
            <h3>
              {minDeliveryTime}-{maxDeliveryTime} Mins
            </h3>
          </div>
        </div>
      </div>
      <div className="offer-contaienr">
        <h1>Deal For You</h1>
        <div className="offerData">
          {offers.map((offer) => {
            return (
              <div className="mini-container">
                <p>{offer?.info?.header}</p>
                <p>{offer?.info?.couponCode}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommended-container">
        <h1>
          Recommended<span> ({itemCards.length}) </span>
        </h1>
        {itemCards.map((res) => {
          return (
            <div className="data-container">
              <div>
                <h2>{res?.card?.info?.name}</h2>
                <p>₹ {res?.card?.info?.price / 100}</p>
                <p>{res?.card?.info?.description}</p>
              </div>
              <img src={recommended_img + res?.card?.info?.imageId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
