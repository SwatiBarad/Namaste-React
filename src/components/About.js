import Userclass from "./Userclass";
import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className="flex justify-center text-4xl p-10 font-bold text-green-800 drop-shadow-xl">
        ABOUT US
      </h1>
      <p className="flex justify-center text-xl">
        Our app is a new-age consumer-first organization offering an easy-to-use
        convenience platform, accessible through a unified app.
      </p>
      <div className="flex flex-wrap">
        <img
          className="w-3xs"
          src="https://swiggy.com/corporate/wp-content/uploads/2024/10/instamart-1-282x300.webp"
        />
        <img
          className="w-3xs"
          src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/food.webp"
        />
        <img
          className="w-3xs"
          src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout-282x300.webp"
        />
        <img
          className="w-3xs"
          src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/genie-1-283x300.webp"
        />
        <img
          className="w-3xs"
          src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/minis-1-283x300.webp"
        />
      </div>
      <Userclass />
    </div>
  );
};
export default About;
