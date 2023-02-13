const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//Midlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routesMiddleware
app.use("/api/users", userRoute);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

//Error  Handler
app.use(errorHandler);

//connecting to database
const PORT = process.env.PORT || 5500;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server runnig on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
