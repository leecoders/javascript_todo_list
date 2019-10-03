var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  // res.redirect("pages/signin");
  res.render("signin");
});

module.exports = router;
