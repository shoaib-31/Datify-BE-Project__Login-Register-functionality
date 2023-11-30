const express = require("express");
const authController = require("../controllers/authController");
const registrationController = require("../controllers/registrationController");

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", registrationController.register);

module.exports = router;
