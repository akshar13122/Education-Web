const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  
  password: "root",  
  database: "edu_users",  
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed:", err.message);
    return;
  }
  console.log("Connected to MySQL Database");
});

// Register Route
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Check if the user already exists in the database
  db.query("SELECT * FROM user_table WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Registration Error:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }
    
    if (results.length > 0) {
      return res.status(400).json({ error: "User already exists with that email!" });
    }

    // Register the new user with plain-text password
    db.query(
      "INSERT INTO user_table (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
      (err, result) => {
        if (err) {
          console.error("Registration Error:", err.message);
          return res.status(500).json({ error: "Database Error" });
        }
        res.status(201).json({ message: "User registered successfully!" });
      }
    );
  });
});

// Admin Fetch all registered users
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM user_table", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }
    res.json({ users: results });
  });
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM user_table WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Delete Error:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }
    res.status(200).json({ message: "User deleted successfully!" });
  });
});


// Update user details
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  db.query(
    "UPDATE user_table SET name = ?, email = ?, password = ? WHERE id = ?",
    [name, email, password, id],
    (err, result) => {
      if (err) {
        console.error("Update Error:", err.message);
        return res.status(500).json({ error: "Database Error" });
      }
      res.status(200).json({ message: "User updated successfully!" });
    }
  );
});



// Login Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Both email and password are required!" });
  }

  // Check user credentials in the database
  db.query("SELECT * FROM user_table WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Login Error:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }

    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Simulate a "logged-in" status via a response
    res.json({
      message: "You are logged in!",
      user: results[0],
    });
  });
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
