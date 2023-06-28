const mongoose = require("mongoose");
const db = require("./connection");

const DiaryEntry = mongoose.model("diary", {
  entry: String,
  userId: String,
  date: Object,
});

module.exports = DiaryEntry;
