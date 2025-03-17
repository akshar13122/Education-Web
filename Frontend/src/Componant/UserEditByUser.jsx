import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
      navigate(`/myprofile/${id}`); // Navigate back to UserProfile
    } catch (err) {
      console.error('Error updating user data:', err);
      alert('Error updating user data.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-user">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Update</button>
        <button type="button" onClick={() => navigate(`/user-profile/${id}`)}>Cancel</button>
      </form>
    </div>
  );
};

export default UserEditByUser;
