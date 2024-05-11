import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    console.log(name + "useEffect");
  }, []);

  console.log(name + "render");
  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
      {/* <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact : Shasan@gmail.com</h3>
    </div>
  );
};

export default User;
