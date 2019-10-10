const pool = require("./db.js");

class Todo {
  constructor() {}

  async getBoardsByUserId(userId, res) {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const [rows] = await connection.query(
        `select BOARD_ID, BOARD_NAME, BOARD_WRITE_PERMISSION, BOARD_READ_PERMISSION from BOARD where BOARD_OWNER=?`,
        [userId]
      );
      connection.release();
      if (rows.length) return res.json({ message: "success", data: rows });
      else res.json({ message: "failure" });
    } catch (err) {
      res.json({ message: "db not connected" });
    }
  }

  async getListsByBoardId(boardId, res) {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const [rows] = await connection.query(
        `select LIST_ID, LIST_NAME from LIST where LIST_BELONG_BOARD=?`,
        [boardId]
      );
      connection.release();
      if (rows.length) return res.json({ message: "success", data: rows });
      else res.json({ message: "failure" });
    } catch (err) {
      res.json({ message: "db not connected" });
    }
  }

  async getTodosByListId(listId, res) {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const [rows] = await connection.query(
        `select TODO_ID, TODO_ORDER, TODO_CONTENT, TODO_ADDED_BY from TODO where TODO_BELONG_LIST=? order by TODO_ORDER`,
        [listId]
      );
      connection.release();
      if (rows.length) return res.json({ message: "success", data: rows });
      else res.json({ message: "failure" });
    } catch (err) {
      res.json({ message: "db not connected" });
    }
  }

  async addTodo(order, content, addedBy, todoBelongList, res) {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const [rows] = await connection.query(
        `insert into TODO(TODO_ORDER, TODO_BELONG_LIST, TODO_CONTENT, TODO_ADDED_BY) values (?, ?, ?, ?)`,
        [+order, +todoBelongList, content, addedBy]
      );
      const [rows2] = await connection.query(
        `select TODO_ID from TODO order by TODO_ID`
      );
      connection.release();
      if (rows.affectedRows || rows2.length)
        return res.json({
          message: "success",
          data: rows2[rows2.length - 1].TODO_ID
        });
      else res.json({ message: "failure" });
    } catch (err) {
      res.json({ message: "db not connected" });
    }
  }

  async deleteTodo(todoId, res) {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const [rows] = await connection.query(
        `delete from TODO where TODO_ID=?`,
        [todoId]
      );
      connection.release();
      if (rows.affectedRows) return res.json({ message: "success" });
      else res.json({ message: "failure" });
    } catch (err) {
      res.json({ message: "db not connected" });
    }
  }

  // async addDefaultList(userId, res) {
  //   try {
  //   const connection = await pool.getConnection(async conn => conn);
  //   const [rows1] = await connection.query(
  //     `insert into BOARD(BOARD_NAME, BOARD_OWNER) values (?, ?)`,
  //     ["투두 타이틀", userId]
  //   );
  //   const [rows2] = await connection.query(`select BOARD_ID from BOARD`);
  //   const [rows3] = await connection.query(
  //     `insert into LIST(LIST_NAME, LIST_BELONG_BOARD) values (?, ?)`,
  //     ["todo", rows2.length]
  //   );
  //   const [rows4] = await connection.query(
  //     `insert into LIST(LIST_NAME, LIST_BELONG_BOARD) values (?, ?)`,
  //     ["doing", rows2.length]
  //   );
  //   const [rows5] = await connection.query(
  //     `insert into LIST(LIST_NAME, LIST_BELONG_BOARD) values (?, ?)`,
  //     ["done", rows2.length]
  //   );
  //     connection.release();
  //     if (rows.affectedRows) return res.json({ message: "success" });
  //     else res.json({ message: "failure" });
  //   } catch (err) {
  //     res.json({ message: "db not connected" });
  //   }
  // }
}

module.exports = Todo;
