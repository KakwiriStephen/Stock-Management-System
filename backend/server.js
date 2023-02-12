const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

//connecting to database
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server runnig on port ${PORT}`);
    });
  })
  .catch((err) => comsole.log(err));
