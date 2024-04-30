import React, { useState } from "react";
import "./navbar.css";
import { adminAssets } from "../../assets/admin_assets/assets.js";
import { frontendAssets } from "../../assets/frontend_assets/assets.js";
import { Link } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState('home');
  return (
    <div className="navbar">
      <img src={adminAssets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu('home')} className={menu=== 'home' ? 'active' : ''}>HOME</Link>
        <a href="#explore-menu" onClick={() => setMenu('menu')} className={menu=== 'menu' ? 'active' : ''}>MENU</a>
        <a href="#app-download" onClick={() => setMenu('mobileApp')} className={menu=== 'mobileApp' ? 'active' : ''}>MOBILE-APP</a>
        <a href="#footer" onClick={() => setMenu('contactUs')} className={menu=== 'contactUs' ? 'active' : ''}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <img src={frontendAssets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={frontendAssets.basket_icon} alt="" />
          <div className="dot"></div> 
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
