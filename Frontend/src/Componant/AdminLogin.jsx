import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LogIn.css";

const AdminLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("admin", JSON.stringify({ id: data.admin.id, email: data.admin.email }));
        console.log("Navigating to Admin Dashboard");
        navigate("/admindashboard"); // Redirect to Admin Dashboard
      } else {
        alert(data.error || "Invalid login credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your admin email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogIn;
