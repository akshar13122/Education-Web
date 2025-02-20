// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import "./LogIn.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the login logic here, e.g., authenticate with an API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  // Navigate to the registration (SignUp) page
  const handleRegisterRedirect = () => {
    navigate('/register');  // Navigates to the register page
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>

      <div className="register-redirect">
        <p id='loginpp'>Don't have an account?</p>
        <button className="register-btn" onClick={handleRegisterRedirect}>Register</button>
      </div>
    </div>
  );
};

export default Login;
