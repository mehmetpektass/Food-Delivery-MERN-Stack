import React from "react";
import "./navbar.css";
import { adminAssets } from "../../assets/admin_assets/assets.js";
import { frontendAssets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={adminAssets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>HOME</li>
        <li>MENU</li>
        <li>MOBILE-APP</li>
        <li>CONTACT US</li>
      </ul>
      <div className="navbar-right">
        <img src={frontendAssets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={frontendAssets.basket_icon} alt="" />
          <div className="dot"></div> 
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
