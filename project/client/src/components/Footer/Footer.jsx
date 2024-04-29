import React from "react";
import "./Footer.css";
import { adminAssets } from "../../assets/admin_assets/assets.js";
import { frontendAssets } from "../../assets/frontend_assets/assets.js";

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <hr />
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={adminAssets.logo} alt="" className="logo"/>
          <p>
            Explore the world of gourmet meals delivered right to your doorstep
            with Fancy. We are committed to bringing you the best flavors from
            around the globe.
          </p>
          <div className="footer-social-icons">
            <img src={frontendAssets.linkedin_icon} alt="" />
            <img src={frontendAssets.twitter_icon} alt="" />
            <img src={frontendAssets.facebook_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-234-567-8900</li>
                <li>contact@fancy.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2024 © Fancy.com -All Right Reserved.</p>
    </div>
  );
};

export default Footer;
