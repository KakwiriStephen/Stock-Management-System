const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  //Validation

  if (!name || !category || !sku || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }
});

module.exports = { createProduct };
