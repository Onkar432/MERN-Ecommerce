exports.getAllProducts=(req,res)=>{
    res.status(200).json({message:'route is working fine'})
}
const Product=require('../models/productModel')

exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
}