import { useEffect, useState } from "react";
import { Api_url } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    const data = await fetch(
      Api_url + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setMenu(json?.data);
    console.log("menu", menu);
  };
  return <div className="useresmenu"></div>;
};
export default useRestaurantMenu;
