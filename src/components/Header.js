import { Link } from "react-router-dom";
import { Logo_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useState } from "react";

const Header = () => {
  const [loginBtn, setLogInBtn] = useState("Log-In");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="w-[100%] font-sans flex justify-between bg-green-500 shadow-xl rounded-b-3xl ">
      <div className="m-0 p-0s">
        <img
          src={Logo_url}
          alt="not found"
          className="w-24 drop-shadow-xl mix-blend-color-burn rounded-bl-3xl"
        ></img>
      </div>
      <div className="nav-items">
        <ul className="flex h-[100%] items-center text-white">
          <li className="px-5 font-bold ">
            status:{onlineStatus === true ? " ✅" : " 🔴"}
          </li>
          <li className="px-5 font-bold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-5 font-bold">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-5 font-bold">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-5 font-bold">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button
            className="px-5 font-bold border-2 rounded-xl py-1 mx-4 hover:cursor-pointer"
            onClick={() => {
              return loginBtn === "Log-In"
                ? setLogInBtn("Log-Out")
                : setLogInBtn("Log-In");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
