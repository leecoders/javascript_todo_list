const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = new (require("../model/User.js"))();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/middlewares.js");

router.use("/", (req, res) => {
  res.render("signin");
});

router.use(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/signin/signin-success",
    failureRedirect: "/signin/signin-failure"
  })
);

router.use("/find-user", async (req, res) => {
  const { id, password } = req.body;
  const result = await User.findUser(id, password);
  res.json(result);
});

router.use("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.use("/signin-success", (req, res) => {
  res.render("todo");
  // res.send({ message: "success" }); // form이 아닌 fetch로 요청이 왔기 때문에
});

router.use("/signin-failure", (req, res) => {
  res.render("signin");
});

module.exports = router;
