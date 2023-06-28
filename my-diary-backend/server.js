const express = require("express");
const app = express();
app.use(express.json());

app.listen(1212, () => {
  console.log("Server is running on 1212");
});
