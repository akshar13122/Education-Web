import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import "./LogIn.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both email and password are required!");
      return;
    }

    // Send login request
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Set user data to localStorage after successful login
        localStorage.setItem('user', JSON.stringify(data.user));  // Store user object
        console.log(data.user);
        
        navigate(`/CourseMenu/${data.user.id}`);  
      } else {
        const data = await response.json();
        setError(data.error);  // Show error message
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Login</button>
      </form>

      <div className="register-redirect">
        <p id="loginpp">Don't have an account?</p>
        <button className="register-btn" onClick={handleRegisterRedirect}>Register</button>
      </div>
    </div>
  );
};

export default Login;
