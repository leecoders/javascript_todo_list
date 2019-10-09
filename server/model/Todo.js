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
        `select TODO_ID, TODO_ORDER, TODO_CONTENT, TODO_ADDED_BY from TODO where TODO_BELONG_LIST=?`,
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
      connection.release();
      if (rows.affectedRows) return res.json({ message: "success" });
      else res.json({ message: "failure" });
    } catch (err) {
      res.json({ message: "db not connected" });
    }
  }
}

module.exports = Todo;
