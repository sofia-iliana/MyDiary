const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("./routers/userRouters");

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", userRouter);

app.listen(1212, () => {
  console.log("Server is running on 1212");
});
