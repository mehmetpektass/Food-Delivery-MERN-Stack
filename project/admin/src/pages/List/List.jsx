import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {

  const [list, seList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data.data);
    if (response.data.success) {
      seList(response.data.data);
    }
    else{
      toast.error('Error')
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast('Error')
    }
  }


  useEffect(() => {
    fetchList();
  },[])

  return (
    <div className="list-add flex-col">
      <p>Ürün Listesi</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Resim</b>
          <b>Ad</b>
          <b>Kategori</b>
          <b>Fİyat</b>
          <b>Sil</b>
        </div>
        {list.map((item,index) => {
          return(
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} TL</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default List;
