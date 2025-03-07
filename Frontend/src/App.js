import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CourseMenu from './CourseMenu';
import Htmlv from './Componant/Htmlv';
import Cssv from './Componant/Cssv';
import Javav from './Componant/Javav';
import Pythonv from './Componant/Pythonv';
import './Style.css';
import { ToastContainer } from 'react-toastify';
import SignUp from './Componant/SignUp';
import LogIn from './Componant/LogIn';
import AdminDashBoard from './Componant/AdminDashBoard';
import AdminLogIn from "./Componant/AdminLogin";
import LogoutButton from './Componant/LogoutButton'; // Importing LogoutButton
import EditUser from './Componant/EditUser'; // Import the EditUser component
import FeedBackForm from "./Componant/FeedBackForm";
import FeedbackData from './Componant/FeedBackData';
import HtmlAssignment from './Assignment/HtmlAssignment';
import CssAssignment from './Assignment/CssAssignment';
import JavaAssignment from './Assignment/javaAssignment';
import PythonAssignment from './Assignment/PythonAssignment';
import ReactJsAssignment from './Assignment/ReactJsAssignment';
import NodejsAssignment from './Assignment/NodejsAssignment';
import ExpressJsAssignment from './Assignment/ExpressJsAssignment';
import NodeJsv from './Assignment/NodeJsv';
import ReactJsv from './Componant/ReactJsv';
import Expressjsv from './Componant/Expressjsv';
import MongoDbv from './Componant/MongoDbv';
import MongoDbAssignment from './Assignment/MongoDbAssignment';
import UserProfile from './Componant/UserProfile';
import { useParams } from 'react-router-dom';
// Protected Route for Admin Dashboard
const AdminDashboardWithAuth = () => {
  const admin = localStorage.getItem("admin"); // Check if admin is logged in
  const navigate = useNavigate();

  if (!admin) {
    const confirmed = window.confirm("Please login through Admin Login to access the Admin Dashboard.");
    if (confirmed) {
      return <Navigate to="/adminlogin" />;  // Redirect to admin login page if the user clicks OK
    } else {
      return null;  // Do nothing or redirect to another route
    }
  }

  return <AdminDashBoard />;  // Show Admin Dashboard if logged in
};

// Protected Route for CourseMenu
const CourseMenuWithAuth = () => {
  const { id } = useParams();  // Get the ID from the URL
  console.log(id);  // Debugging: check if you get the correct ID

  const user = localStorage.getItem("user");  // Check if user is logged in
  const navigate = useNavigate();

  if (!user) {
    alert("Please login first to access Course Menu.");
    return <Navigate to="/login" />;  // Redirect to login page if not logged in
  }

  return <CourseMenu />;  // Show CourseMenu if logged in
};

const App = () => {
  return (
    <Router>
      <header>
        <nav className="nav-container">
          <div className="left-nav22">
            {/* Register and Login buttons */}
            <Link to="/register" className="nav-btn22">Register</Link>
            <Link to="/login" id="nnbtn">Login</Link>
            {/* Use the LogoutButton component */}
            <LogoutButton />
          </div>
          <div className="right-nav">
            {/* Existing navigation links */}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admindahsboard">Admindashboard</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Protected Admin Dashboard route */}
          <Route path="/admindahsboard" element={<AdminDashboardWithAuth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Conditional rendering for /CourseMenu with an alert if not logged in */}
          <Route path="/CourseMenu/:id" element={<CourseMenuWithAuth />}  />
          <Route path="/Htmlv" element={<Htmlv />} />
          <Route path="/Cssv" element={<Cssv />} />
          <Route path="/Javav" element={<Javav />} />
          <Route path="/Pythonv" element={<Pythonv />} />
          <Route path="/nodejsv" element={<NodeJsv />} />
          <Route path="/reactjsv" element={<ReactJsv />} />
          <Route path="/expressjsv" element={<Expressjsv />} />
          <Route path="/mongodbv" element={<MongoDbv />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/FeedBackForm" element={<FeedBackForm />} />
          <Route path="/feedbackdata" element={<FeedbackData />} />
          <Route path="/htmlassignment" element={<HtmlAssignment />} />
          <Route path="/cssassignment" element={<CssAssignment />} />
          <Route path="/javaassignment" element={<JavaAssignment />} />
          <Route path="/pythonassignment" element={<PythonAssignment />} />
          <Route path="/reactjsassignment" element={<ReactJsAssignment />} />
          <Route path="/nodejsassignment" element={<NodejsAssignment />} />
          <Route path="/expressjsassignment" element={<ExpressJsAssignment />} />
          <Route path="/mongodbassignment" element={<MongoDbAssignment />} />
          <Route path="/myprofile/:id" element={<UserProfile />} />
          {/* <Route path="/htmlv/:id" element={<Htmlv/>} /> */}
          {/* Add the new route for the EditUser page */}
          <Route path="/edituser/:id" element={<EditUser />} />  {/* :id is the user ID */}
        </Routes>
        <ToastContainer />
      </header>
    </Router>
  );
}

export default App;
