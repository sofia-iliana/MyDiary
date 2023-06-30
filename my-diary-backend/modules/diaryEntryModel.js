const mongoose = require("mongoose");
const db = require("./connection");

const DiaryEntry = mongoose.model("diary", {
  entry: String,
  userId: String,
  date: String,
});

module.exports = DiaryEntry;
