import { useEffect, useState } from "react";
import { Res_img } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;
  const { name, avgRating, areaName, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img src={Res_img + cloudinaryImageId} />
      <h2>{name}</h2>
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
