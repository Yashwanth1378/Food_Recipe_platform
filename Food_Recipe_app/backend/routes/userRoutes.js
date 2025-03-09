const express = require('express');
const router = express.Router();
const { userSignUp, userLogin, getUser } = require("../controller/userController")

router.post("/signUp", userSignUp)
router.post("/login", userLogin)
router.get("/user/:id", getUser)

module.exports = router;