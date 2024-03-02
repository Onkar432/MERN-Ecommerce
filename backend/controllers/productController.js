
const { response } = require('express')
const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const asyncErrorHandler = require('../middleware/catchAsyncError');
//get all products
exports.getAllProducts = asyncErrorHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
});

//create product
exports.createProduct = asyncErrorHandler(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    })
});
exports.updateProduct = asyncErrorHandler(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
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
);
exports.deleteProduct = asyncErrorHandler(async (req, res, next) => {

    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({ success: true, message: 'Product deleted successfully' });

});

exports.getSingleProduct = asyncErrorHandler(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    res.json({ success: true, product })
});