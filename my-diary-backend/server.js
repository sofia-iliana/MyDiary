const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const diaryEntry = require("./routers/diaryEntryRouter");
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/user", userRouter);
app.use("/diary", diaryEntry);

app.listen(1212, () => {
  console.log("Server is running on 1212");
});
