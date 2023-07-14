const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 6,
  },
});


const User = mongoose.model("user", userShema);


module.exports = User;