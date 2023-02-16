const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controllers/productController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);

module.exports = router;
