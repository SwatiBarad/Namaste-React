import { useEffect, useState } from "react";
import { Api_url } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menu, setmenu] = useState(null);

  useEffect(() => {
    menudata();
  }, []);

  const menudata = async () => {
    const data = await fetch(
      Api_url + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setmenu(json?.data);
  };
  return menu;
};
export default useRestaurantMenu;
