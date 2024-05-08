import React, { useState } from 'react'
import './Add.css'
import { adminAssets } from '../../assets/admin_assets/assets'
import axios from 'axios'

const Add = () => {

    const url = 'http://localhost:4000'
    const [image , setImage] = useState(false)
    const [data , setData] = useState({
        name:'' , 
        description:'' ,
        price:'' ,
        category:'Salad',
    });
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) =>({...data,[name]:value}));
        console.log(data.name);
    console.log(data.description);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name' , data.name)
        formData.append('description' , data.description)
        formData.append('price' , Number(data.price))
        formData.append('category' , data.category)
        formData.append('image' , image)
        const response = await axios.post(`${url}/api/food/add` , formData);
        if (response.data.success) {
            setData({
                name:'',
                description:'',
                price:'',
                category:'',
            })
            setImage(false);
        }
    }
    
  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler} >
            <div className='add-image-upload flex-col'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?(URL.createObjectURL(image)): (adminAssets.upload_area)} alt="" />
                </label>
                <input onChange={(e) =>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>
            <div className='add-product-name flex-col'>
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Name' />
            </div>
            <div className='add-product-description flex-col'>
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} name='description' rows='6' placeholder='Description' />
            </div>
            <div className='add-product-category-price'>
                <div className='add-category flex-col'>
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} value={data.category} name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='add-price flex-col'>
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='' />
                </div>
            </div>
            <button type='submit' className='add-button'>Add Item</button>
        </form>
    </div>
  )
}

export default Add