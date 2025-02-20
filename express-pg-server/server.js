const express = require("express");
const cors = require("cors");
const pool = require("./db");
const port = 5000;

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend to fetch data

// Routes
app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM schools");
    res.status(200).json(data.rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, address } = req.body;
  try {
    await pool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [
      name,
      address,
    ]);
    res.status(200).json({ message: "Successfully added entry" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS schools( id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, address VARCHAR(100) NOT NULL)"
    );
    res.status(200).json({ message: "Successfully created table" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`🚀 Server running on port: ${port}`));
