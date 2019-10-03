const express = require("express");
const router = express.Router();
const User = new (require("../model/User.js"))();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/middlewares.js");

router.use("/user-info", async (req, res) => {
  const userInfo = req.user;
  res.send(userInfo);
});

router.use("/", (req, res) => {
  res.render("todo");
});

module.exports = router;
