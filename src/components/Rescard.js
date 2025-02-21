import { useEffect, useState } from "react";
import { Res_img } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;
  const { name, avgRating, areaName, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;

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
    </div>
  );
};

export default Rescard;
