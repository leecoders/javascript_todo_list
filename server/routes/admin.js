const express = require("express");
const router = express.Router();
const User = new (require("../model/User.js"))();

router.use("/", (req, res, next) => {
  res.render("admin");
});

router.use("/all-users", (req, res, next) => {
  User.allUsers(res);
});

router.use("/change-grade", (req, res, next) => {
  const { userId, targetGrade } = req.body;
  User.changeGrade(userId, targetGrade, res);
});

module.exports = router;
