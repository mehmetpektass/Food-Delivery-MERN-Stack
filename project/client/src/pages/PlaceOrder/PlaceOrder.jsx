import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Sipariş Bilgileri</p>
        <div className="multi-fields">
          <input type="text" placeholder="Ad" />
          <input type="text" placeholder="Soyad" />
        </div>
        <input type="email" placeholder="Mail" />
        <input type="text" placeholder="Tam Adres" />
        <div className="multi-fields">
          <input type="text" placeholder="Kart Üzerindeki İsim" />
          <input type="number" placeholder="Kart Numarası" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Son Kullanma Tarihi" />
          <input type="number" placeholder="Güvenlik Kodu" />
        </div>
        <input type="tel" placeholder="Telefon" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Sipariş Toplamı</h2>
          <div className="cart-total-details">
            <p>Alt Toplam</p>
            <p>{getTotalCartAmount()} TL</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Getirme Ücreti</p>
            <p>{getTotalCartAmount() * 0.1} TL</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Toplam</b>
            <b>{getTotalCartAmount() * 1.1} TL</b>
          </div>
          <button onClick={() => navigate("/order")}>Öde</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
