import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditUser.css';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/indiusers/${id}`);
        const data = await response.json();

        if (data.user) {
          setUser(data.user);
          setConfirmPassword(data.user.password); // Pre-fill confirm password
        } else {
          setError("User not found");
        }
      } catch (error) {
        setError("Error fetching user data");
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (user.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    
    if (user.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("User updated successfully!");
        navigate("/admindashboard");
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="editUser">
      <div className="edit-user-container">
        <h2 className="edit-user-heading">Edit User</h2>

        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : (
          <form className="edit-user-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input2"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input2"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input2"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Update User</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditUser;
