const express = require('express')
const errorHandler = require('./middleware/error')
const app = express();
app.use(express.json());

//Route imports

const products = require('./routes/productRoute')
app.use("/api/v1", products)


//middleware for error handling
app.use(errorHandler);
module.exports = app;