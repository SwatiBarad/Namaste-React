import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (data) => {
  data = data?.data?.card?.card;
  const { title } = data;
  return (
    <div className="w-8/12 m-auto ">
      {/**HEADER ACCORDIAN */}
      <h2 className="my-6 cursor-pointer flex justify-between border-b-8 border-gray-300 text-lg font-semibold">
        <span>
          {title} ({data?.itemCards.length})
        </span>
        <span className="text-gray-500">
          <i className="fas fa-angle-down"></i>
        </span>
      </h2>
      {/**BODY ACCORDIAN */}
      {<ItemList items={data?.itemCards} />}
    </div>
  );
};
export default ResCategory;
