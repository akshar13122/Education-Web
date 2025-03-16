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
  password: "akshar2409",  
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





// Add this route to handle feedback submission
app.post("/api/submit-feedback", (req, res) => {
  console.log(req.body);  // This will log the request body (feedback data)
  const { courseLike, query, suggestions, rating, id } = req.body;

  if (!courseLike || !query || !suggestions || !rating || !id) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Insert the feedback data into the database
  db.query(
    "INSERT INTO feedback_data (name, q1, q2, q3, q4) VALUES (?, ?, ?, ?, ?)",
    [id, courseLike, query, suggestions, rating],
    (err, result) => {
      if (err) {
        console.error("Error inserting feedback:", err.message);
        return res.status(500).json({ error: "Database Error" });
      }
      res.status(201).json({ message: "Feedback submitted successfully!" });
    }
  );
});




// Get all feedback
// Get all feedback with associated user name
app.get('/api/feedback-data', (req, res) => {
  db.query(`
    SELECT fd.id, u.name, fd.q1, fd.q2, fd.q3, fd.q4
    FROM feedback_data fd
    JOIN user_table u ON fd.name = u.id
  `, (err, results) => {
    if (err) {
      console.error("Error fetching feedback data:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }
    res.json({ feedback: results });
  });
});





// Delete feedback
app.delete('/api/feedback-data/:id', (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM feedback_data WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting feedback:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }
    res.status(200).json({ message: "Feedback deleted successfully!" });
  });
});

// title = 'HTML Tutor'
// Fetch HTML course content by ID
// app.get("/api/html-course", (req, res) => {
//   db.query("SELECT * FROM html_courses WHERE id='1'", (err, results) => {
//     if (err) {
//       console.error("Error fetching HTML course content:", err.message);
//       return res.status(500).json({ error: "Database Error" });
//     }
    
//     if (results.length > 0) {
//       res.json({ title: results[0].title, content: results[0].content });
//     } else {
//       res.status(404).json({ error: "HTML course not found" });
//     }
//   });
// });

//Css course
// app.get("/api/css-course", (req, res) => {
//   db.query("SELECT * FROM html_courses WHERE id='3'", (err, results) => {
//     if (err) {
//       console.error("Error fetching HTML course content:", err.message);
//       return res.status(500).json({ error: "Database Error" });
//     }
    
//     if (results.length > 0) {
//       res.json({ title: results[0].title, content: results[0].content });
//     } else {
//       res.status(404).json({ error: "HTML course not found" });
//     }
//   });
// });

//Java Course
// app.get("/api/java-course", (req, res) => {
//   db.query("SELECT * FROM html_courses WHERE id = 4", (err, results) => {
//     if (err) {
//       console.error("Error fetching HTML course content:", err.message);
//       return res.status(500).json({ error: "Database Error" });
//     }
//     if (results.length > 0) {
//       res.json({ title: results[0].title, content: results[0].content });
//     } else {
//       res.status(404).json({ error: "HTML course not found" });
//     }
//   });
// });

//Python Course
// app.get("/api/python-course", (req, res) => {
//   db.query("SELECT * FROM html_courses WHERE id = 5", (err, results) => {
//     if (err) {
//       console.error("Error fetching Python course content:", err.message);
//       return res.status(500).json({ error: "Database Error" });
//     }
    
//     if (results.length > 0) {
      
//       res.json({ title: results[0].title, content: results[0].content });
//     } else {
      
//       res.status(404).json({ error: "Python course not found" });
//     }
//   });
// });

// app.get("/api/reactjs-course", (req, res) => {
 
//   db.query("SELECT * FROM html_courses WHERE id = 6", (err, results) => { 
//     if (err) {
//       console.error("Error fetching ReactJS course content:", err.message);
//       return res.status(500).json({ error: "Database Error" });
//     }
    
//     if (results.length > 0) {
     
//       res.json({ title: results[0].title, content: results[0].content });
//     } else {
     
//       res.status(404).json({ error: "ReactJS course not found" });
//     }
//   });
// });


// app.get("/api/nodejs-course", (req, res) => {
  
//   db.query("SELECT * FROM html_courses WHERE id = 7", (err, results) => { 
//     if (err) {
//       console.error("Error fetching NodeJs course content:", err.message);
//       return res.status(500).json({ error: "Database Error" });
//     }

//     if (results.length > 0) {
    
//       res.json({ title: results[0].title, content: results[0].content });
//     } else {
//       res.status(404).json({ error: "Nodejs course not found" });
//     }
//   });
// });


app.get("/api/expressjs-course", (req, res) => {
  // Change the id to match the Node.js course ID in the database
  db.query("SELECT * FROM html_courses WHERE id = 8", (err, results) => {
    if (err) {
      console.error("Error fetching NodeJs course content:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }

    if (results.length > 0) {
      // Send the Node.js course data as a response
      res.json({ title: results[0].title, content: results[0].content });
    } else {
      // If no data is found
      res.status(404).json({ error: "expressjs course not found" });
    }
  });
});

app.get("/api/mongodb-course", (req, res) => {
  // Change the id to match the MongoDB course ID in the database
  db.query("SELECT * FROM html_courses WHERE id = 9", (err, results) => {
    if (err) {
      console.error("Error fetching Express.js course content:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }

    if (results.length > 0) {
      // Send the Express.js course data as a response
      res.json({ title: results[0].title, content: results[0].content });
    } else {
      // If no data is found
      res.status(404).json({ error: "Express.js course not found" });
    }
  });
});

//Mongodb course edit
app.put('/update-course/:id', (req, res) => {
  const { title, content } = req.body;
  const courseId = req.params.id;

  const query = 'UPDATE html_courses SET title = ?, content = ? WHERE id = ?';
  db.query(query, [title, content, courseId], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error updating course' });
      return;
    }
    res.status(200).json({ message: 'Course updated successfully' });
  });
});


//new  Mongo-DB
app.get("/api/courses", (req, res) => {
  const sql = "SELECT id, heading, content, link FROM testing_tbl";
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results);
  });
});


// 🟢 Add a New Course
app.post("/api/courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO testing_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});

// 🟢 Update Course by ID
app.put("/api/courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE testing_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/courses/:id", (req, res) => {
  const sql = "DELETE FROM testing_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});


//Node js course
app.get("/api/nodejs-courses", (req, res) => {
  const sql = "SELECT id, heading, content, link FROM nodejs_tbl";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


app.post("/api/nodejs-courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO nodejs_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});


// 🟢 Update Course by ID
app.put("/api/nodejs-courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE nodejs_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/nodejs-courses/:id", (req, res) => {
  const sql = "DELETE FROM nodejs_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});





// 🟢 Fetch all React.js Courses
app.get("/api/reactjs-courses", (req, res) => {
  const sql = "SELECT id, heading, content, link FROM reactjs_tbl";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🟢 Add a New React.js Course
app.post("/api/reactjs-courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO reactjs_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});

// 🟢 Update Course by ID
app.put("/api/reactjs-courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE reactjs_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/reactjs-courses/:id", (req, res) => {
  const sql = "DELETE FROM reactjs_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});









// 🟢 Fetch all Python Courses
app.get("/api/python-courses", (req, res) => {
  const sql = "SELECT id, heading, content, link FROM python_tbl";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🟢 Add a New Python Course
app.post("/api/python-courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO python_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});

// 🟢 Update Course by ID
app.put("/api/python-courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE python_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/python-courses/:id", (req, res) => {
  const sql = "DELETE FROM python_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});





// 🟢 Fetch all Java Courses
app.get("/api/java-courses", (req, res) => {
  const sql = "SELECT * FROM java_tbl";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🟢 Add a New Java Course
app.post("/api/java-courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO java_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});

// 🟢 Update Course by ID
app.put("/api/java-courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE java_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/java-courses/:id", (req, res) => {
  const sql = "DELETE FROM java_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});



// app.get("/api/java-courses", (req, res) => {
//   const sql = "SELECT * FROM java_tbl";
//   db.query(sql, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.json(result);
//   });
// });

// 🟢 Fetch all CSS Courses
app.get("/api/css-courses", (req, res) => {
  const sql = "SELECT * FROM css_tbl";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🟢 Add a New CSS Course
app.post("/api/css-courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO css_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});

// 🟢 Update Course by ID
app.put("/api/css-courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE css_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/css-courses/:id", (req, res) => {
  const sql = "DELETE FROM css_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});



// 🟢 Fetch all HTML Courses
app.get("/api/html-courses", (req, res) => {
  const sql = "SELECT * FROM html_tbl";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🟢 Add a New HTML Course
app.post("/api/html-courses", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "INSERT INTO html_tbl (heading, content, link) VALUES (?, ?, ?)";
  db.query(sql, [heading, content, link], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course added successfully", id: result.insertId });
  });
});

// 🟢 Update Course by ID
app.put("/api/html-courses/:id", (req, res) => {
  const { heading, content, link } = req.body;
  const sql = "UPDATE html_tbl SET heading=?, content=?, link=? WHERE id=?";
  db.query(sql, [heading, content, link, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course updated successfully" });
  });
});

// 🟢 Delete Course by ID
app.delete("/api/html-courses/:id", (req, res) => {
  const sql = "DELETE FROM html_tbl WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Course deleted successfully" });
  });
});







//For UserProfile component For Fetching User Data for User
app.get("/api/user-profile/:id", (req, res) => {
  const { id } = req.params;

  // Check if the ID exists
  db.query("SELECT name, email FROM user_table WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching user profile:", err.message);
      return res.status(500).json({ error: "Database Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send the user profile data as the response
    res.json({
      name: results[0].name,
      email: results[0].email,
    });
  });
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
