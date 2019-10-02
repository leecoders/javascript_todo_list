const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/middlewares.js");

router.use(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/auth/success",
    failureRedirect: "/"
  })
);

router.use("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.use("/success", (req, res) => {
  res.send({ message: "success" }); // form이 아닌 fetch로 요청이 왔기 때문에
});

module.exports = router;
