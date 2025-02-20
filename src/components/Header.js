import { Link } from "react-router-dom";
import { Logo_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useState } from "react";

const Header = () => {
  const [loginBtn, setLogInBtn] = useState("Log-In");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo_url} alt="not found"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>status:{onlineStatus === true ? "✅" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="last-nav-item">
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        <button
          className="log-in"
          onClick={() => {
            return loginBtn === "Log-In"
              ? setLogInBtn("Log-Out")
              : setLogInBtn("Log-In");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
