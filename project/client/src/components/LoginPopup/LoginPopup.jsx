import React, { useState } from "react";
import "./LoginPopup.css";
import { frontendAssets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={frontendAssets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Log In" ? (
            <></>
          ) : (
            <input type="text" placeholder=" Kullanıcı Adı" required />
          )}
          <input type="email" placeholder="Mail" required />
          <input type="password" placeholder="Şifre" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Devam Ederek, Kullanım Koşullarını ve Gizlilik Politikasını Kabul Ediyorum</p>
        </div>
        {currentState === "Log In" ? (
          <p>
            Hesap Oluştur?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Tıkla</span>
          </p>
        ) : (
          <p>
            Zaten Bir Hesabın Mı Var?{" "}
            <span onClick={() => setCurrentState("Log In")}>Giriş Yap</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
