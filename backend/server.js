const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");


const app=express()


const PORT=process.env.PORT || 5000