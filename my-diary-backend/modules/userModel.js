const mongoose = require("mongoose");
const db = require("./connection");

const User = mongoose.model("user", {
  username: String,
  email: String,
  password: String,
  userId: String,
});

app.post("/user/signup", async (req, res) => {
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.send({ msg: "You already have an account" });
  }
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  await User.create(user);
  res.send({ msg: "account created successfully" });
});

app.post("/user/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (req.body.password === user.password) {
      res.send({ msg: "logged in" });
    } else {
      res.send({ msg: "wrong password" });
    }
  } else {
    res.send({ msg: "wrong email" });
  }
});

module.exports = User;
