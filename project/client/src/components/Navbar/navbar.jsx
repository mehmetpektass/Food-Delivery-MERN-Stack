import React, { useContext, useState } from "react";
import "./navbar.css";
import { adminAssets } from "../../assets/admin_assets/assets.js";
import { frontendAssets } from "../../assets/frontend_assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState('home');
    const {getTotalCartAmount , token , setToken} = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to={'/'}><img src={adminAssets.logo} alt="" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu('home')} className={menu=== 'home' ? 'active' : ''}>ANA SAYFA</Link>
        <a href="#explore-menu" onClick={() => setMenu('menu')} className={menu=== 'menu' ? 'active' : ''}>MENÜ</a>
        <a href="#app-download" onClick={() => setMenu('mobileApp')} className={menu=== 'mobileApp' ? 'active' : ''}>MOBILE</a>
        <a href="#footer" onClick={() => setMenu('contactUs')} className={menu=== 'contactUs' ? 'active' : ''}>İLETİŞİM</a>
      </ul>
      <div className="navbar-right">
        <img src={frontendAssets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to={'/cart'}><img src={frontendAssets.basket_icon} alt="" /></Link> 
          <div className={getTotalCartAmount() === 0? '' : 'dot'}></div> 
        </div>
        {!token? ( <button onClick={() => setShowLogin(true)}>Üye Ol</button>)
        :(
          <div className="navbar-profile">
            <img src={frontendAssets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li><img src={frontendAssets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li><img src={frontendAssets.bag_icon} alt="" /><p>Logout</p></li>

            </ul>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default Navbar;
