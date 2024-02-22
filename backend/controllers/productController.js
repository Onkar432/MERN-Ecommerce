
const { response } = require('express')
const Product = require('../models/productModel')

//get all products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
}

//create product
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    })
}
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    });
    res.status(200).json({
        success: true,
        product
    })


}

exports.deleteProduct = async (req, res, next) => {

    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    res.status(200).json({ success: true, message: 'Product deleted successfully' });

};

exports.getSingleProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        response.json({
            success: 'false',
            message: 'Product not found'

        })
    }
    res.json({ success: true,product })
}