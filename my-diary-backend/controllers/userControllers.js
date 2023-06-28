const User = require("../modules/userModel");
const bcrypt = require("bcrypt");

app.post("/user/signup", async (req, res) => {
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.send({ msg: "You already have an account" });
  }
  bcrypt.genSalt(7, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      };
      await User.create(user);
      res.send({ msg: "account created successfully" });
    });
  });
});

app.post("/user/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        res.send({
          username: user.username,
          email: user.email,
          userId: user.userId,
          _id: user._id,
        });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  }
});
