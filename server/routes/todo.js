const express = require("express");
const router = express.Router();
const User = new (require("../model/User.js"))();
const { checkTodo } = require("../middlewares/middlewares.js");

router.use("/user-info", async (req, res) => {
  const userInfo = req.user;
  res.send(userInfo);
});

router.use("/:id", (req, res, next) => {
  const ownerId = req.params.id; // URL로 입력 받은 유저 아이디가 존재하지 않는지 체크해야 함
  const visiterId = req.user.USER_ID;
  const visiterGrade = req.user.USER_GRADE;
  // 아이디는 다르지만 읽기 권한이 있는지 체크해야 함
  if (visiterGrade === "admin" || ownerId === visiterId) {
    // 관리자 권한이거나 로그인한 유저 본인이면 todo 연결
    res.render("todo", { id: ownerId });
    return;
  }
  next();
});

module.exports = router;
