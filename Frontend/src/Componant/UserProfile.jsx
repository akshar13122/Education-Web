import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams(); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user-profile/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="user-profile">
      {userData ? (
        <div className="user-profile-content">
          <h2 className="profile-title">My Profile</h2>
          <p><strong className="profile-label">Name:</strong> {userData.name}</p>
          <p><strong className="profile-label">Email:</strong> {userData.email}</p>
          
          {/* Buttons */}
          <div className="button-container">
            <button className="go-back-btn" onClick={() => navigate(`/CourseMenu/${id}`)}>Go Back</button>
            <button className="edit-btnn" onClick={() => navigate(`/edit-user/${id}`)}>Edit Profile</button>
            <button className="edit-btnn" onClick={() => navigate(`/mycourse/${id}`)}>My Course</button>
          </div>
        </div>
      ) : (
        <p className="no-data-text">No user data available.</p>
      )}
    </div>
  );
};

export default UserProfile;
