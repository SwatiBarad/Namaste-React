import React, { useEffect } from "react";
import { useEffect } from "react";
import { GitHub_url } from "../utils/constants";

class Userclass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "blank",
      id: "000",
      img: "https://i.pinimg.com/736x/4f/4f/a9/4f4fa9c7786bbcdbbbfbf0a208f14cf1.jpg",
    };
  }

  render() {
    const GitHubData = async () => {
      const data = await fetch("https://api.github.com/users/SwatiBarad");
      const json = await data.json();
      console.log(json);
      this.setState({
        name: json.login,
        id: json.id,
        img: "https://avatars.githubusercontent.com/u/189943765?v=4",
      });
    };
    GitHubData();

    const imgStyle = {
      width: "200px",
      height: "200px",
    };
    return (
      <div>
        <div className="user-contaier">
          <div className="data-user">
            <h1>Get the App now!</h1>
            <p>For best offers and discounts curated specially for you.</p>
          </div>
          <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/app-now-pic-2.webp" />
        </div>
        <div className="user-info">
          <img style={imgStyle} src={this.state.img} />
          <h4>{this.state.name}</h4>
          <h5>{this.state.id}</h5>
          <h2>{this.state.hobby}</h2>
        </div>
      </div>
    );
  }
}

export default Userclass;
