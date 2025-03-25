import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

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

    if (!formData.name) {
      alert("Name is required!");
      return;
    }

    if (!formData.email) {
      alert("Email is required!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email!");
      return;
    }

    if (!formData.password) {
      alert("Password is required!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    if (!formData.confirmPassword) {
      alert("Confirm Password is required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      } else {
        alert("Registration failed! Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  };

  return (
    <div className="register-container" style={{backgroundColor:"#f9f9f963",position:"relative"}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name <span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password <span style={{ color: "red" }}>*</span></label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>

      <div className="login-redirect">
        <p id="regp">Already have an account?</p>
        <button className="login-bn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
