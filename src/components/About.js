import Userclass from "./Userclass";
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>ABOUT US</h1>
      <p>
        Swiggy is a new-age consumer-first organization offering an easy-to-use
        convenience platform, accessible through a unified app.
      </p>
      <div className="image-container">
        <img src="https://swiggy.com/corporate/wp-content/uploads/2024/10/instamart-1-282x300.webp" />
        <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/food.webp" />
        <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout-282x300.webp" />
        <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/genie-1-283x300.webp" />
        <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/minis-1-283x300.webp" />
      </div>
      <Userclass />
    </div>
  );
};
export default About;
