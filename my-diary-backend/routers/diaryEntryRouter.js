const router = require("express").Router();
const diaryEntryController = require("../controllers/diaryEntryControllers");

router.post("/new", diaryEntryController.newEntry);
router.get("/:userId", diaryEntryController.getDiary);
router.get("/byDate/:userId/:date", diaryEntryController.getEntryByDate);
router.delete("/delete/:id", diaryEntryController.deleteEntry);
router.put("/edit/:id", diaryEntryController.editEntry);

module.exports = router;
