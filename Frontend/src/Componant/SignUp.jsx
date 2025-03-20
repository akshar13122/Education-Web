import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "./SignUp.css";

const SignUp = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // New field for confirm password
  });

  // State to handle errors
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation with individual alerts
    if (!formData.name) {
      alert("Name is required!");
      return; // Prevent further submission
    }

    if (!formData.email) {
      alert("Email is required!");
      return; // Prevent further submission
    }

    // Enhanced email validation regex (more comprehensive)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email!");
      return; // Prevent further submission
    }

    if (!formData.password) {
      alert("Password is required!");
      return; // Prevent further submission
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return; // Prevent further submission
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return; // Prevent further submission
    }

    if (!formData.confirmPassword) {
      alert("Confirm Password is required!");
      return; // Prevent further submission
    }

    // If all validations pass, send a POST request to your backend
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!"); // Show alert on success
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "", // Reset confirm password field
        });
        setError("");
        navigate("/login"); // Navigate to login page after successful registration
      } else {
        alert("Registration failed! Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  };

  // Navigate to login page
  const handleLoginRedirect = () => {
    navigate("/login"); // Navigates to the login page
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>

      <div className="login-redirect">
        <p id="regp">Already have an account?</p>
        <button className="login-btn" onClick={handleLoginRedirect}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
