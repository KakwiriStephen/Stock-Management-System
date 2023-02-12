const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add your name"],
    },
    email: {
      type: String,
      required: [true, "please add your email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
      minlength: [6, "password must be more than 6 characters"],
    },
    photo: {
      type: String,
      required: [true, "please Enter a photo"],
      default: "https://i.ibb.co/4pDNDK1/avatar.png",
    },
    phone: {
      type: String,
      default: "+254",
    },
    bio: {
      type: String,
      default: "bio",
      maxLength: [250, "Bio must not be more than 250 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
