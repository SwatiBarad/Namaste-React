import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  function handleClick() {
    setShowIndex();
  }
  const { title } = data;
  return (
    <div className="w-8/12 m-auto">
      {/**HEADER ACCORDIAN */}

      <div
        className="my-6 cursor-pointer flex justify-between border-b-8 border-gray-300 text-lg font-bold"
        onClick={handleClick}
      >
        <span>
          {title} ({data?.itemCards.length})
        </span>
        <span className="text-gray-500">
          <i className="fas fa-angle-down"></i>
        </span>
      </div>
      {/**BODY ACCORDIAN */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};
export default ResCategory;
