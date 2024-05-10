import { Component, useState } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About us page - updated</h1>
        <UserClass name={"Shahid222"} location={"Bengaluru111"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <UserClass name={"Shahid222"} location={"Bengaluru111"} />
//     </div>
//   );
// };

export default About;
