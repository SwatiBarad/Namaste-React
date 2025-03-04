import { useContext, useEffect, useState } from "react";
import Rescard, { withOpenLabel } from "./Rescard";
import Shimmer from "./Shimmer";
import { Link, Links } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "../components/Offline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const onlineStatus = useOnlineStatus();

  const OpenRescard = withOpenLabel(Rescard);
  const { loggedInUser, setUserName } = useContext(UserContext);

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

    console.log("resdata", resList);
  };
  if (onlineStatus === false) {
    return <Offline />;
  }
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between h-56  items-center bg-[url(https://i.pinimg.com/736x/47/05/6b/47056b2d61778a7338be317f4782623c.jpg)] bg-center bg-no-repeat bg-cover ">
        <div className="text-[3.5vw]/14 line-he text-white w-[50%] px-32">
          Discover <span className="text-yellow-500"> restaurants </span>that
          deliver near you.
        </div>
        <div className="mr-52 text-white">
          <input
            className="border-2 w-80 border-gray-500 rounded-xl  h-8 p-2.5"
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="w-14  h-8  border-2 rounded-xl border-gray-500"
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
          <button
            className="border-2 w-56 mt-5  border-gray-500 rounded-xl bg-transparent  h-12 p-2.5"
            onClick={() => {
              const topresFilterList = resList.filter((restaurant) => {
                return restaurant?.info?.avgRating > 4.4;
              });
              setFilterList(topresFilterList);
            }}
          >
            Top Rated Restaurants
          </button>
          <input
            className="w-10vw border-2 ml-2 py-0.5 px-1.5 rounded-2xl"
            value={loggedInUser}
            onChange={(e) => {
              e.target.value;
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filterList &&
          filterList.map &&
          filterList.map((restaurant) => {
            return (
              <div key={restaurant?.info?.id}>
                <Link to={"/restaurants/" + restaurant?.info?.id}>
                  {restaurant?.info?.availability?.opened ? (
                    <OpenRescard
                      key={restaurant?.info?.id}
                      resData={restaurant}
                    />
                  ) : (
                    <Rescard key={restaurant?.info?.id} resData={restaurant} />
                  )}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Body;
