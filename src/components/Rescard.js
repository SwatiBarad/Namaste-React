import { useContext, useEffect, useState } from "react";
import { Res_img } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Rescard = (props) => {
  const { resData } = props;
  const { name, avgRating, areaName, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;

  const data = useContext(UserContext);
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="w-3xs h-86 border-1 rounded-xl border-green-200 text-center p-1 mx-1.5 my-2.5 text-wrap bg-green-100">
      <img
        className="h-46 w-50 m-auto rounded-xl "
        src={Res_img + cloudinaryImageId}
      />
      <h2 className="font-bold">{name}</h2>
      <h2>
        ⭐{avgRating}
        <span>-{deliveryTime} Mins</span>
      </h2>
      <h2>{costForTwo}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>{areaName}</h3>
      <h3>{data.loggedInUser}</h3>
    </div>
  );
};

/**HIGHER ORDER COPONENTS (which takes a rescard and return open Restaurant rescard) */

export const withOpenLabel = (Rescard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute ml-2 bg-green-800 text-white px-4 py-0.5 rounded-2xl ">
          open
        </label>
        <Rescard {...props} />
      </div>
    );
  };
};

export default Rescard;
