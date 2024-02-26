import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        ></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/ ">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li > 
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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
