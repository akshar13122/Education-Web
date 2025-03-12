import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserProfile.css'; // Import the CSS file

const UserProfile = () => {
  const { id } = useParams(); // Get user ID from URL
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch the user profile from the server (adjust URL to include the correct port)
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

    fetchUserData(); // Call the async function inside useEffect
  }, [id]);

  // If data is still loading or if there's an error
  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="user-profile">
      {userData ? (
        <div className="user-profile-content">
          <h2 className="profile-title">My Profile</h2>
          <p><strong className="profile-label">Name:</strong> {userData.name}</p>
          <p><strong className="profile-label">Email:</strong> {userData.email}</p>
          {/* Go Back Button */}
          <button className="go-back-btn" onClick={() => navigate(-1)} >
            Go Back
          </button>
        </div>
      ) : (
        <p className="no-data-text">No user data available.</p>
      )}
    </div>
  );
};

export default UserProfile;
