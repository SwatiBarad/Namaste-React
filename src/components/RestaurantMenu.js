import { useEffect, useState } from "react";
import React from "react";
import { Veg_img } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { recommended_img } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

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
    isVeg,
    type,
    veg,
  } = menu?.cards[2]?.card?.card?.info;

  const { minDeliveryTime, maxDeliveryTime } =
    menu?.cards[2]?.card?.card?.info?.sla;

  const { offers } = menu?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("item", itemCards);

  const myFun = () => {
    if (isVeg === 0) {
      const img = document.querySelector(".vegimg");
      return (img.style.filter = "hue-rotate(245deg)");
    }
  };
  myFun();

  return (
    <div className="resmenu-container">
      <div className="head">
        <h1>{name}</h1>
        <img className="vegimg" src={Veg_img} />
      </div>
      <div className="menudata-container">
        <h3>
          ⭐{avgRating}
          <span>
            {" "}
            ({totalRatings > 1000 ? totalRatings / 1000 + "k" : totalRatings}
            {" ratings"})
          </span>
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
        <div className="offer-head">
          <h1>Deal For You</h1>
          {/* <div>
            <button className="arrow left-arrow" onClick={() => {}}>
              ⬅
            </button>
            <button className="arrow right-arrow" onClick={() => {}}>
              ➡
            </button>
          </div> */}
        </div>
        <div className="offerData">
          {offers.map((offer) => {
            return (
              <div key={offers?.info?.restId} className="mini-container">
                <p>{offer?.info?.header}</p>
                <p>{offer?.info?.couponCode}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button
        onClick={() => {
          const filterListdata = itemCards.filter((res) => {
            return res?.card?.info?.isVeg === 1;
          });

          // console.log("set", filterListdata);
        }}
      >
        veg
      </button> */}
      <div className="newlyLaunched-container">
        <h1>
          Newly Launched <span> ({itemCards.length}) </span>
        </h1>
        {itemCards.map((res) => {
          return (
            <div className="data-container">
              <div key={res?.card?.info?.id}>
                <h2>{res?.card?.info?.name}</h2>
                <p>
                  ₹{" "}
                  {res?.card?.info?.defaultPrice / 100 ||
                    res?.card?.info?.price / 100}
                </p>
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
