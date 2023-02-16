const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  //Validation

  if (!name || !category || !sku || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }
});

module.exports = { createProduct };
