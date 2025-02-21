import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importing useNavigate for navigation
import "./SignUp.css";

const SignUp = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to handle errors
  const [error, setError] = useState("");

  const navigate = useNavigate();  // Hook for navigation

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

    // Basic form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email!");
      return;
    }

    // If validation passes, send a POST request to your backend
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");  // Show alert on success
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        setError("");
        navigate("/login");  // Navigate to login page after successful registration
      } else {
        setError("Registration failed! Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  // Navigate to login page
  const handleLoginRedirect = () => {
    navigate("/login");  // Navigates to the login page
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
        {error && <p className="error-message">{error}</p>}
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
