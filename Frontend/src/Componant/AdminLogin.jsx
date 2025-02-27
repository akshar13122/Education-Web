import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the CSS file

const AdminLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials for admin login
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('admin', JSON.stringify({ email }));  // Store admin info in localStorage
      navigate('/admindahsboard');  // Redirect to Admin Dashboard
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogIn;
