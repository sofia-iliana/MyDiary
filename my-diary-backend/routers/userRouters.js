const router = require("express").Router();
const userController = require("../controllers/userControllers");

router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);
router.post("/user/verify", userController.userVerify);

module.exports = router;
