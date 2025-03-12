import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // For navigation and accessing params
import './EditUser.css';

const EditUser = () => {
  const { id } = useParams(); // Get user ID from the URL params
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch the user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await response.json();
        if (data.user) {
          setUser(data.user); // Set user data to state
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("User updated successfully!");
        navigate("/admindahsboard"); // Navigate back to Admin Dashboard
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle input changes
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
