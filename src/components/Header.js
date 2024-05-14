import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/hooks/userContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="flex  justify-between shadow-lg bg-pink-200  mb-2 ">
      <div className="logo-container">
        <img
          className="w-32 "
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4  ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-2">Cart</li>
          <li className="px-2">{loggedInUser} </li>
          <button
            className="login-btn"
            onClick={() =>
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
            }
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
