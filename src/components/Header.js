import { Logo_url } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLogInBtn] = useState("Log-In");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo_url} alt="not found"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/about">About</link>
          </li>
          <li>
            <link to="/contact">Contact Us</link>
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
