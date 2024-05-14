import React, { useState } from "react";
import "./LoginPopup.css";
import { frontendAssets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data , setData]  = useState({
    name:"",
    email:"",
    password:"",
  })

  const onChangeHandler = (event) => {
    const name = event.taget.name;
    const value = event.taget.value;

    setData((data) => ({...data,[name]:value}))
    console.log(data)
  }

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
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder=" Kullanıcı Adı" required />
          )}
          <input type="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Mail" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Şifre" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Hesap Oluştur" : "Giriş Yap"}
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
