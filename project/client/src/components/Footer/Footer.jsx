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
          <img src={adminAssets.logo} alt="" className="logo" />
          <p>
            Kapınıza kadar teslim edilen gurme yemeklerin dünyasını keşfedin
            fantezi ile. Size en iyi lezzetleri sunmayı taahhüt ediyoruz dünya
            çapında.
          </p>
          <div className="footer-social-icons">
            <img src={frontendAssets.linkedin_icon} alt="" />
            <img src={frontendAssets.twitter_icon} alt="" />
            <img src={frontendAssets.facebook_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>ŞİRKET</h2>
          <ul>
            <li>ANA SAYFA</li>
            <li>HAKKIMIZDA</li>
            <li>SİPARİŞ</li>
            <li>GİZLİLİK POLİTİKASI</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>İLETİŞİM</h2>
          <ul>
            <li>+90-213-566-89-00</li>
            <li>iletisim@fancy.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
      Telif Hakkı 2024 © Fancy.com -Tüm Hakları Saklıdır.
      </p>
    </div>
  );
};

export default Footer;
