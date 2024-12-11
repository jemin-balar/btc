const express = require('express');
const userRegistration = require('../controller/registration.controller'); 
const userLogin = require('../controller/login.controller');
const router = express.Router();

router.post("/user_registration", userRegistration);
router.post("/user_login", userLogin);
router.get("/test", (req, res) => {
    res.send("Hello World");
});

module.exports = router;