const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

//connecting to database
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server runnig on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
