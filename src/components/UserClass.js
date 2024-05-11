import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
    const data = await fetch("https://api.github.com/users/shahid-sa99");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "child rendrer");
    return (
      <div  className="m-4 p-4 bg-gray-50 rounded-lg">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact : shahid@gmail.com</h3>
        <h3>{avatar_url}</h3>
      </div>
    );
  }
}

export default UserClass;
