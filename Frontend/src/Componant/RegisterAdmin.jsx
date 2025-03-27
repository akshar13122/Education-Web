import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterAdmin.css';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if any field is empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
      alert('All fields are required!');
      return;
    }

    // Validation: Password must be at least 8 characters
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }

    // Validation: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const response = await fetch('http://localhost:5000/register-admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password }) // Excluding confirmPassword
    });

    const result = await response.json();

    if (response.ok) {
      alert('Admin inserted successfully');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      navigate('/admindashboard');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register Admin</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Name: <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Email: <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Password: <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Confirm Password: <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterAdmin;
