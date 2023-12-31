const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userShema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please put in an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please put in a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please put in a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

// fire a function after doc saved to db
userShema.post("save", function (doc, next) {
  console.log("new user was created and saved", doc);
  next();
});

// fire a function before doc saved to db
userShema.pre("save", function (next) {
  console.log("user about to be created and saved", this);
  next();
});

const User = mongoose.model("user", userShema);

module.exports = User;
