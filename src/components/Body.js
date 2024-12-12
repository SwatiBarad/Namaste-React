import { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8744775&lng=75.37036619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("resdata", resList[0]?.info);
  };
  if (resList.length === 0) {
    return <Shimmer />;
  } else
    return (
      <div className="body">
        <div className="top">
          <div className="title">
            Discover<span> restaurants </span>that deliver near you.
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Here"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const searchFilterList = resList.filter((restaurant) => {
                  return restaurant?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilterList(searchFilterList);
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <button
          className="res-btn"
          onClick={() => {
            const topresFilterList = resList.filter((restaurant) => {
              return restaurant?.info?.avgRating > 4.4;
            });
            setFilterList(topresFilterList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="res-container">
          {filterList &&
            filterList.map &&
            filterList.map((restaurant) => {
              return (
                <Rescard key={restaurant?.info?.id} resData={restaurant} />
              );
            })}
        </div>
      </div>
    );
};
export default Body;
