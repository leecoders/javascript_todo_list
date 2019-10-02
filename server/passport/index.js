const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const authData = {
  userId: "123",
  userPassword: "123"
};

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize", user);
    done(null, user.userId);
  });
  passport.deserializeUser((userId, done) => {
    //findById(id, function (err, user) {
    console.log("deserialize", userId);
    done(null, authData);
    //});
  });
  passport.use(
    new LocalStrategy(
      { usernameField: "userId", passwordField: "userPassword" },
      (userId, userPassword, done) => {
        if (
          userId === authData.userId &&
          userPassword === authData.userPassword
        ) {
          console.log("correct");
          return done(null, authData);
        } else {
          console.log("incorrect");
          return done(null, false, {
            message: "Incorrect info."
          });
        }
      }
    )
  );
};
