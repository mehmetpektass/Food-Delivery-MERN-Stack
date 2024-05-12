import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>En Sevdiğiniz Yemeği Seçin</h2>
        <p>
          "Lezzetli bir şey ister misin? Doğru yerdesin!
          <span> Fancy</span> size doğru bir lezzet dünyası getiriyor
          kapı eşiğinde. Çeşitli restoranlarımıza göz atın, favorilerinizi bulun veya deneyin
          yeni bir şey.
        </p>
        <button>Menüyü Görüntüle</button>
      </div>
    </div>
  );
};

export default Header;
