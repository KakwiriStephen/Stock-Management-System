const multer = require("multer");

//Define file Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString.replace(/:/g, +"-") + "-" + file.originalname
    ); //Add date to file
  },
});
