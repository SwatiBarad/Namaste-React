import { NonVeg_img, Veg_img } from "../utils/constants";

const ItemList = (items) => {
  return (
    <div>
      {items?.items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex items-center my-4 p-4  border-b border-gray-300"
        >
          <div className="w-10/12 ">
            <img
              className="w-6 mb-2"
              src={
                item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? Veg_img
                  : NonVeg_img
              }
            />
            <h2 className="text-xl font-bold text-gray-600">
              {item?.card?.info?.name}
            </h2>
            <p className="font-bold">
              <span className="text-green-800">
                ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
              </span>
              <span>
                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </p>
            <p>₹ {item?.card?.info?.price / 100}</p>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="relative flex flex-col items-center">
            <img
              className="w-42 p-4 rounded-4xl h-44"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item?.card?.info?.imageId
              }
            />
            <button className="absolute w-28 p-2  bottom-4 text-white font-bold rounded-2xl bg-gray-600 cursor-pointer">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
