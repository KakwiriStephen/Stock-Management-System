const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async (req, res) => {
  res.send("On to the products!");
});

module.exports = { createProduct };
