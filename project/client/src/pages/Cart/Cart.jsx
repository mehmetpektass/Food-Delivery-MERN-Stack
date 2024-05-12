import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { frontendAssets } from "../../assets/frontend_assets/assets.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Ürün</p>
          <p>Adı</p>
          <p>Fiyat</p>
          <p>Miktar</p>
          <p>Toplam</p>
          <p>Sil</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} TL</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} TL</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Sepet Toplamı</h2>
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
          <button onClick={() => navigate('/order')}>Ödeme İşlemine Devam Et</button>
        </div>
        <div className="cart-promocode">
          <p>Bir Kodunuz Varsa Buraya Girin</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promosyon Kodu"/>
            <button>Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
