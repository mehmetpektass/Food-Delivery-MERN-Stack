import React, { useState } from "react";
import "./Add.css";
import { adminAssets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data.name);
    console.log(data.description);
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Resim Yükle</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : adminAssets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Ürün Adı</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Ad"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Ürün Açıklaması</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Açıklama"
          />
        </div>
        <div className="add-product-category-price">
          <div className="add-category flex-col">
            <p>Ürün Kategorisi</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Salad">Salata</option>
              <option value="Rolls">Dürüm</option>
              <option value="Deserts">Tatlı</option>
              <option value="Sandwich">Sandviç</option>
              <option value="Cake">Kek</option>
              <option value="Pure Veg">Vejeteryan</option>
              <option value="Pasta">Makarna</option>
              <option value="Noodles">Erişte</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Ürün Fiyatı</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="TL"
            />
          </div>
        </div>
        <button type="submit" className="add-button">
          Ürün Ekle
        </button>
      </form>
    </div>
  );
};

export default Add;
