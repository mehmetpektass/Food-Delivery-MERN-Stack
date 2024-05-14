import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import validator from "validator";

const createToken = (id) => {
    jwt.sign({id} , process.env.JWT_SECRET)
}

const loginUser = async (req,res) => {
  
}

const registerUser = async (req,res) => {
    const {name , password , email} = req.body;
    try {
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false, message:'User Already Exists'})
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:'Please Enter a Valid Email'})
        }
        if (password.length < 8) {
            return res.json({success:false, message:'Please Enter a Strong Password'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}
export {registerUser , loginUser}