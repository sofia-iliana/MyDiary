const DiaryEntry = require("../modules/diaryEntryModel");

const newEntry = async (req, res) => {
  await DiaryEntry.create(req.body);
  res.send({ msg: "saved successfully" });
};

const getDiary = async (req, res) => {
  const diary = await DiaryEntry.find({ userId: req.params.userId });
  res.send(diary);
};

const deleteEntry = async (req, res) => {
  await DiaryEntry.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted" });
};

const getEntryByDate = async (req, res) => {
  const entry = await DiaryEntry.findOne({
    userId: req.params.userId,
    date: req.params.date,
  });
  res.send(entry);
};

const editEntry = async (req, res) => {
  await DiaryEntry.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.send({ msg: "updated" });
};

module.exports = { newEntry, getDiary, deleteEntry, getEntryByDate, editEntry };
