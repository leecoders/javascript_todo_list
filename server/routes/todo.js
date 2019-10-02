const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/middlewares.js");

router.use("/user-info", (req, res) => {
  res.send("");
});

module.exports = router;
