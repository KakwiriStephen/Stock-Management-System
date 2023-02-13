const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401);
      throw new Error("NOt authorized , please login");
    }

    //Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    //Get user Id from token
    user = await User.findById(verified.id).select("-password");
  } catch (error) {}
});

module.exports = protect;
