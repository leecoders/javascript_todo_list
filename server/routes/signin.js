const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/middlewares.js");

router.use(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/signin/signin-success",
    failureRedirect: "/signin/signin-failure"
  })
);

router.use("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.use("/signin-success", (req, res) => {
  res.send({ message: "success" }); // form이 아닌 fetch로 요청이 왔기 때문에
});

router.use("/signin-failure", (req, res) => {
  res.send({ message: "failure" });
});

module.exports = router;
