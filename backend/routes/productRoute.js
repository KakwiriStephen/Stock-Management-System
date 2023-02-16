const express = require("express");
const { createProduct } = require("../controllers/productController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createProduct);

module.exports = router;
