import { Link } from "react-router-dom";
import { Logo_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLogInBtn] = useState("Log-In");
  const onlineStatus = useOnlineStatus();

  //subsribing to the store via selectors.
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-[100%] font-sans flex justify-between  bg-green-500 shadow-xl rounded-b-3xl ">
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

          <li className="px-5 font-bold relative">
            <Link to={"/cart"}>
              <i className="fa-solid fa-cart-shopping cursor-pointer"></i>

              <li className="absolute top-[-50%] right-[15%] bg-red-600 text-white h-5 flex justify-center items-center w-5 rounded-2xl">
                {cartItems.length}
              </li>
            </Link>
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
