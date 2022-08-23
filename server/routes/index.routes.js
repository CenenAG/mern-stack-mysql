import { Router } from "express";
import { pool } from "../db.js"; //connection pool definition

const router = Router();

router.get("/ping", async (req, res) => {
  const [rows] = await pool.query("SELECT 1+1 as result");
  console.log(JSON.stringify(rows)); // shows in console
  res.json(rows);                   // shows in browser
});

export default router;
