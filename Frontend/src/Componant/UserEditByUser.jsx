import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserEditByUser.css';

const UserEditByUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user-profile/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }
        const data = await response.json();
        setUserData({ name: data.name, email: data.email });
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/update-user/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data.');
      }

      alert('User updated successfully!');
      navigate(`/myprofile/${id}`);
    } catch (err) {
      console.error('Error updating user data:', err);
      alert('Error updating user data.');
    }
  };

  if (loading) return <p className="user-edit-loading">Loading...</p>;
  if (error) return <p className="user-edit-error">{error}</p>;

  return (
    <div className="user-edit-container">
      <h2 className="user-edit-title">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="user-edit-form">
        <label className="user-edit-label">
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            className="user-edit-input"
          />
        </label>
        <label className="user-edit-label">
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className="user-edit-input"
          />
        </label>
        <div className="user-edit-buttons">
          <button type="submit" className="user-edit-submit">Update</button>
          <button type="button" onClick={() => navigate(`/myprofile/${id}`)} className="user-edit-cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEditByUser;
