const mongoose = require("mongoose");
const db = require("./connection");

const User = mongoose.model("user", {
  username: String,
  email: String,
  password: String,
});

module.exports = User;
