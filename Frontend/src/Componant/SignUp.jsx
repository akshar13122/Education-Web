// src/Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation
import "./SignUp.css";

const SignUp = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State to handle errors
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Hook for navigation

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email!');
      return;
    }

    // If validation passes, you can process the form data
    console.log('Form submitted:', formData);
    setError('');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  // Navigate to login page
  const handleLoginRedirect = () => {
    navigate('/login');  // Navigates to the login page
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
        <button type="submit" className="submit-btn">Register</button>
      </form>

      <div className="login-redirect">
        <p id='regp'>Already have an account?</p>
        <button className="login-btn" onClick={handleLoginRedirect}>Login</button>
      </div>
    </div>
  );
};

export default SignUp;
