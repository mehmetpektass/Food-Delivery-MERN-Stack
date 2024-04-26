import React, { useState } from "react";
import "./FoodItem.css";
import { frontendAssets } from "../../assets/frontend_assets/assets.js";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-iitem-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={frontendAssets.add_icon_white}
          ></img>
        ) : (
          <div className="food-item-counter">
            <img onClick={() => setItemCount(prev=>prev-1)} src={frontendAssets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img onClick={() => setItemCount(prev=>prev+1)} src={frontendAssets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
