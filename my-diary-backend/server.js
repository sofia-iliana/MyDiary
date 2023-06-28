const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/user/signup", async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
});

app.listen(1212, () => {
  console.log("Server is running on 1212");
});
