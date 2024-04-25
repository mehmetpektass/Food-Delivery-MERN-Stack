import React, { useState } from "react";
import "./navbar.css";
import { adminAssets } from "../../assets/admin_assets/assets.js";
import { frontendAssets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
    const [menu , setMenu] = useState('home');
  return (
    <div className="navbar">
      <img src={adminAssets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu('home')} className={menu=== 'home' ? 'active' : ''}></li>
        <li onClick={() => setMenu('menu')} className={menu=== 'menu' ? 'active' : ''}>MENU</li>
        <li onClick={() => setMenu('mobileApp')} className={menu=== 'mobileApp' ? 'active' : ''}>MOBILE-APP</li>
        <li onClick={() => setMenu('contactUs')} className={menu=== 'contactUs' ? 'active' : ''}>CONTACT US</li>
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
