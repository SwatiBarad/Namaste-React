import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }
  componentDidMount() {
    // console.log("parent did mount");
  }
  render() {
    // console.log("parent Render");
    return (
      <div>
        this is About us page
        <Userclass />
      </div>
    );
  }
}
export default About;
