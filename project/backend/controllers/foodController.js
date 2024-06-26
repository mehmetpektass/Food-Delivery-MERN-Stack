import { foodModel } from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.file.filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Ürün Başarıyla Eklendi" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Hata" });
  }
};

const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Hata" });
  }
};

const removeFood = async (req, res) => {
  try {
    const selectedFood = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${selectedFood.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Ürün Silindi" });
  } catch (error) {
    console.log(error);
    res.json({success:false , message:'Hata'})
  }
};

export { addFood, listFood, removeFood};
