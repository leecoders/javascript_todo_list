const pool = require("./db.js");

class User {
  constructor() {}

  async findUser(id, password) {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const [rows] = await connection.query(
        `select USER_ID from USER where USER_ID=? and USER_PASSWORD=?`,
        [id, password]
      );
      connection.release();
      if (rows.length) return "success";
      else return "failure";
    } catch (err) {
      return "db not connected";
    }
  }
}

const user = new User();
(async () => {
  console.log(await user.findUser("admin", "admin"));
})();

module.exports = User;
