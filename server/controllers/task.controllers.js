import { pool } from "../db.js"; //connection pool definition

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY created_At asc"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: `Task not found: ${req.params.id}` });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?,?)",
      [title, description]
    );
    res.json({ id: result.insertId, title, description });
  } catch (error) {}
};

export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    console.log(result);

    if (result.affectedRows == 0) {
      return res
        .status(404)
        .json({ message: `Task not found: ${req.params.id}` });
    }
    return res.status(200).json({ message: `Task updated: ${req.params.id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    console.log(result);

    if (result.affectedRows == 0) {
      return res
        .status(404)
        .json({ message: `Task not found: ${req.params.id}` });
    }
    return res.status(200).json({ message: `Task deleted: ${req.params.id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
