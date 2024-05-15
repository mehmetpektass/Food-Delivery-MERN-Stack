import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { frontendAssets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {

  const { url } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Log In");
  const [data , setData]  = useState({
    name:"",
    email:"",
    password:"",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({...data,[name]:value}))
  }
    

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if(currentState=== ' Log In'){
      newUrl += '/api/user/login'
    }
    else{
      newUrl += '/api/user/register'
    }
    const response = await axios.post(newUrl,data)
  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
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
          <input type="email" name="email"  onChange={onChangeHandler} value={data.email} placeholder="Mail" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Şifre" required />
        </div>
        <button type="submit">
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
