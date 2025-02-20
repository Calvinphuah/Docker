const express = require("express");
const pool = require("./db");
const port = 5000;

// Initialize Express
const app = express();

// Allow the server to receive json data
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  // Returns entire table
  // Assign to a variable and return
  // res.status(200).send({ message: "Hello World" });
  try {
    // Postgres methods
    const data = await pool.query("SELECT * FROM schools");
    res.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, location } = req.body;
  try {
    // Postgres methods
    await pool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [
      name,
      location,
    ]);
    res.status(200).send({ message: "Successfully added child" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    // Postgres methods
    await pool.query(
      "CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, address VARCHAR(100) NOT NULL)"
    );
    res.status(200).send({ message: "Successfully created table" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
