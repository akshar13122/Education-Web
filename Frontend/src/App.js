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
import EditCourse from './Componant/EditCourse';
import HtmlEdit from './CourseEdit/HtmlEdit';
import MongodbEdit from './CourseEdit/MongodbEdit';
import { useState, useEffect } from 'react';
import NodejsEdit from './CourseEdit/NodeJsEdit';
import ReactjsEdit from './CourseEdit/ReactJsEdit';
import PythonEdit from './CourseEdit/PythonEdit';
import JavaEdit from './CourseEdit/JavEdit';
import CssEdit from './CourseEdit/CssEdit';
import UserEditByUser from './Componant/UserEditByUser';

// Protected Route for Admin Dashboard
const AdminDashboardWithAuth = () => {
  const admin = localStorage.getItem("admin"); // Check if admin is logged in
  const navigate = useNavigate();

  if (!admin) {
    const confirmed = window.confirm("Please login through Admin Login to access the Admin Dashboard.");
    if (confirmed) {
      return <Navigate to="/adminlogin" />;  
    } else {
      return null;  
    }
  }

  return <AdminDashBoard />;  
};

// Protected Route for CourseMenu
const CourseMenuWithAuth = () => {
  const { id } = useParams(); 
  console.log(id);  

  const user = localStorage.getItem("user");  // Check if user is logged in
  const navigate = useNavigate();

  if (!user) {
    alert("Please login first to access Course Menu.");
    return <Navigate to="/login" />;  
  }

  return <CourseMenu />;  // Show CourseMenu if logged in
};
const logOutHandler = () => {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");

  if (user) { // If user is logged in, logout user
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("user"); 
      localStorage.clear();
      window.location.href = "/" 
    }
  } else if (admin) { 
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("admin"); 
      localStorage.clear();
      window.location.href = "/"; 
    }
  } else {
    alert("No user or admin is logged in."); // If no one is logged in
  }
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('user') !== null || localStorage.getItem('admin') !== null
  );

  // Listen for changes in localStorage and update the state
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('user') !== null || localStorage.getItem('admin') !== null);
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <Router>
      <header>
        <nav className="nav-container">
          <div className="left-nav22">
            <Link classname='linkk'  to="/register" className="nav-btn22" style={{ visibility: isLoggedIn ? 'hidden' : 'visible' }}>
              Register
            </Link>
            <Link classname='linkk'    to="/login" id="nnbtn" style={{ visibility: isLoggedIn ? 'hidden' : 'visible' }}>
              Login
            </Link>

            <button
              id="nnbtn"
              onClick={logOutHandler}
              style={{ visibility: isLoggedIn ? 'visible' : 'hidden' }} // Show logout button when logged in, but still occupy space
            >
              Logout
            </button>


            {/* <LogoutButton /> */}
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
          <Route path="/CourseMenu/:id" element={<CourseMenuWithAuth />} />
          <Route path="//Htmlv/:id" element={<Htmlv />} />
          <Route path="/Cssv/:id" element={<Cssv />} />
          <Route path="/Javav/:id" element={<Javav />} />
          <Route path="/Pythonv/:id" element={<Pythonv />} />
          <Route path="/nodejsv/:id" element={<NodeJsv />} />
          <Route path="/reactjsv/:id" element={<ReactJsv />} />
          <Route path="/expressjsv/:id" element={<Expressjsv />} />
          <Route path="/mongodbv/:id" element={<MongoDbv />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/FeedBackForm/:id" element={<FeedBackForm />} />
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
          <Route path="/edituser/:id" element={<EditUser />} />  {/* :id is the user ID */}editcourse
          <Route path="/editcourse" element={<EditCourse />} />
          <Route path="/htmledit/1" element={<HtmlEdit />} />mongodbedit/9
          <Route path="mongodbedit/9" element={<MongodbEdit />} />/nodejsedit/7
          <Route path="/nodejsedit/7" element={<NodejsEdit />} />
          <Route path="/reactjsedit/6" element={<ReactjsEdit/>} />
          <Route path="/pythonedit/5" element={<PythonEdit/>} />/javaedit/4
          <Route path="/javaedit/4" element={<JavaEdit/>} />/cssedit/3
          <Route path="/cssedit/3" element={<CssEdit/>} />/edit-user/
          <Route path="/edit-user/:id" element={<UserEditByUser />} />
        </Routes>
        <ToastContainer />
      </header>
    </Router>
  );
}

export default App;
