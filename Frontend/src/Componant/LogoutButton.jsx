import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const user = localStorage.getItem("user");
    const admin = localStorage.getItem("admin");

    if (user) { // If user is logged in, logout user
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("user"); // Remove user data from localStorage
        navigate("/"); // Navigate to the home page after logging out
      }
    } else if (admin) { // If admin is logged in, logout admin
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("admin"); // Remove admin data from localStorage
        navigate("/"); // Navigate to the home page after logging out
      }
    } else {
      alert("No user or admin is logged in."); // If no one is logged in
    }
  };

  return (
    <button className="logot" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
