import userModel from "../models/userModel";

const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.id});
        const cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] = +1
        }
        await userModel.findByIdAndUpdate(req.body.id,{cartData })
        res.json({success:true , message:'Added to Cart'})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:'Error'})
    }
}

const removeFromCart = async (req,res) => {

}

const getCart = async (req,res) => {

}

export {addToCart , removeFromCart, getCart};