import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // For navigation and accessing params
import './EditUser.css';

const EditUser = () => {
  const { id } = useParams(); // Get user ID from the URL params
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors
  const navigate = useNavigate();

  // Fetch the user details on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/indiusers/${id}`);
        const data = await response.json();

        // Check if user exists in the response
        if (data.user) {
          setUser(data.user); // Set the user data to state
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
  }, [id]); // Dependency on 'id' ensures it re-runs when 'id' changes

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
        navigate("/admindashboard"); // Navigate back to Admin Dashboard
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value })); // Update state with user input
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
            <button type="submit" className="submit-button">Update User</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditUser;
