import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';
import CourseMenu from './CourseMenu';
import Htmlv from './Componant/Htmlv';
import Cssv from './Componant/Cssv';
import Javav from './Componant/Javav';
import Pythonv from './Componant/Pythonv';
import './Style.css';
import FeedBackForm from './Componant/FeedBackForm';
import { ToastContainer } from 'react-toastify';
import SignUp from "./Componant/SignUp";
import LogIn from "./Componant/LogIn";

// Separate the logout handler function into a functional component
const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const user = localStorage.getItem("user"); // Retrieve user data from localStorage

    if (user) { // If user data is found, confirm logout
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("user"); // Remove user data from localStorage
        navigate("/"); // Navigate to the home page after logging out
      }
    } else {
      alert("No user is logged in."); // Optionally, show a message if no user data found
    }
  };

  return (
    <button className='logot' onClick={handleLogout}>Logout</button>
  );
}

const CourseMenuWithAuth = () => {
  const user = localStorage.getItem("user"); // Check if user data exists in localStorage
  const navigate = useNavigate();

  // Custom redirect function with alert
  if (!user) {
    alert("Please login first to access Course Menu.");
    return <Navigate to="/login" />;
  }
  
  return <CourseMenu />;
};

const App = () => {
  return (
    <Router> {/* Ensure that this Router is wrapping your whole component tree */}
      <header>
        <nav className="nav-container">
          <div className="left-nav22">
            {/* Register and Login buttons */}
            <Link to="/register" className="nav-btn22">Register</Link>
            <Link to="/login" id='nnbtn'>Login</Link>
            {/* Use the LogoutButton component */}
            <LogoutButton />
          </div>
          <div className="right-nav">
            {/* Existing navigation links */}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Conditional rendering for /CourseMenu with an alert if not logged in */}
          <Route 
            path="/CourseMenu" 
            element={<CourseMenuWithAuth />}  // Using the new wrapper component for authentication
          />

          <Route path="/Htmlv" element={<Htmlv />} />
          <Route path="/Cssv" element={<Cssv />} />
          <Route path="/Javav" element={<Javav />} />
          <Route path="/Pythonv" element={<Pythonv />} />
          <Route path="/FeedBackForm" element={<FeedBackForm />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <ToastContainer />
      </header>
    </Router>
  );
}

export default App;
