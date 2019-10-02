const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const passport = require("passport");
const passportConfig = require("./passport");

const indexRouter = require("./routes/index.js");
const authRouter = require("./routes/auth.js");

const app = express();

// view engine setup
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/src")));
app.use(
  session({
    secret: "top secret",
    resave: false,
    saveUninitialized: true,
    store: new FileStore() // sessions 디렉토리 생성
  })
);

// set passport
app.use(passport.initialize()); // passport를 사용하겠다는 것을 req에 알림
app.use(passport.session()); // passport 내부에서 session을 사용할 것임
passportConfig();

app.use("/", indexRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
