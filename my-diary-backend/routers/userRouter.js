const router = require("express").Router();
const userController = require("../controllers/userControllers");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/verify", userController.userVerify);

module.exports = router;
