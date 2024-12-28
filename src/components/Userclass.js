//CLASS BASED COMPONENTS;

import React, { useEffect } from "react";
import { useEffect } from "react";
// class Userclass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       timer: setInterval(() => {
//         console.log("Swati");
//       }, 1000),
//     };
//     // console.log(this.props.name + "child Constructor");
//     // }
//     // async componentDidMount() {
//     //   const data = await fetch(" https://api.github.com/users/SwatiBarad");
//     //   const json = await data.json();
//     //   console.log("json", json);

//     //   this.setState({
//     //     userInfo: json,
//     //   });

//     // console.log(this.props.name + "child did mount");
//   }
//   componentDidMount() {
//     this.state.timer;
//   }
//   componentWillUnmount() {
//     clearInterval(this.state.timer);
//   }
//   render() {
//     // console.log(this.props.name + "child Render");

//     return (
//       <div>
//         {/* <img src={this.state.userInfo.avatar_url} />
//         <h1>Name : {this.state.userInfo.login}</h1>
//         <h1>Location : {this.state.userInfo.location}</h1> */}
//         {/* <h1>MobileNo. : {mobileNo}</h1> */}
//         <div>this is class based component</div>
//       </div>
//     );
//   }
// }

const Userclass = () => {
  useEffect(() => {
    timer;

    return () => {
      clearInterval(timer);
    };
  });

  // const mount = () => {
  //   setInterval(() => {
  //     console.log("json");
  //   }, 1000);
  // };
  const timer = setInterval(() => {
    console.log("json");
  }, 1000);
  return <div>this is class based component</div>;
};
export default Userclass;
