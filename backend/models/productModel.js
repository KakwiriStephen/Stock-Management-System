const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
