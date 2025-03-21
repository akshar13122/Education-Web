import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate, useParams } from 'react-router-dom';
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
import AdminLogIn from './Componant/AdminLogin';
import LogoutButton from './Componant/LogoutButton';
import EditUser from './Componant/EditUser';
import FeedBackForm from './Componant/FeedBackForm';
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
import EditCourse from './Componant/EditCourse';
import HtmlEdit from './CourseEdit/HtmlEdit';
import MongodbEdit from './CourseEdit/MongodbEdit';
import NodejsEdit from './CourseEdit/NodeJsEdit';
import ReactjsEdit from './CourseEdit/ReactJsEdit';
import PythonEdit from './CourseEdit/PythonEdit';
import JavaEdit from './CourseEdit/JavEdit';
import CssEdit from './CourseEdit/CssEdit';
import UserEditByUser from './Componant/UserEditByUser';
import { NavLink } from 'react-router-dom';
// Protected Route for Admin Dashboard
const AdminDashboardWithAuth = () => {
  const admin = localStorage.getItem('admin'); // Check if admin is logged in
  const navigate = useNavigate();

  if (!admin) {
    const confirmed = window.confirm('Please login through Admin Login to access the Admin Dashboard.');
    if (confirmed) {
      return <Navigate to="/adminlogin" />;
    } else {
      return null;
    }
  }

  return <AdminDashBoard />;
};

const logOutHandler = () => {
  const user = localStorage.getItem('user');
  const admin = localStorage.getItem('admin');

  if (user) { // If user is logged in, logout user
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      localStorage.removeItem('user');
      localStorage.clear();
      window.location.href = '/';
    }
  } else if (admin) {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      localStorage.removeItem('admin');
      localStorage.clear();
      window.location.href = '/';
    }
  } else {
    alert('No user or admin is logged in.'); // If no one is logged in
  }
}

const App = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('admin') !== null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('user') !== null || localStorage.getItem('admin') !== null
  );

  // Listen for changes in localStorage and update the state
  useEffect(() => {
    // Check if 'user' exists in localStorage before parsing
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userObj = JSON.parse(user); // Parse the user object safely
        setUserId(userObj.id); // Set the user ID state
      } catch (e) {
        console.error('Failed to parse user data:', e);  // Handle any JSON parsing errors
      }
    }

    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('user') !== null || localStorage.getItem('admin') !== null);
      setIsAdmin(localStorage.getItem('admin') !== null); // Update isAdmin state
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
          <div className="right-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {!isAdmin && isLoggedIn && (
                <li><Link to={`/myprofile/${userId}`}>My Profile</Link></li>
              )}
            </ul>
          </div>
          <div className="left-nav22">
            <ul>
              <li><Link className='linkk' to="/register" style={{ visibility: isLoggedIn ? 'hidden' : 'visible' }}>
                Register
              </Link></li>
              <li><Link className='linkk' to="/login" style={{ visibility: isLoggedIn ? 'hidden' : 'visible' }}>
                Login
              </Link></li>

              <li><button
                id='nnbtn'
                onClick={logOutHandler}
                style={{ visibility: isLoggedIn ? 'visible' : 'hidden' }} // Show logout button when logged in
              >
                Logout
              </button></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admindahsboard" element={<AdminDashboardWithAuth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CourseMenu" element={<CourseMenu />} />
          <Route path="/CourseMenu/:id" element={<CourseMenu />} />
          <Route path="/Htmlv/1/:id" element={<Htmlv />} />
          <Route path="/Cssv/3/:id" element={<Cssv />} />
          <Route path="/Javav/4/:id" element={<Javav />} />
          <Route path="/Pythonv/5/:id" element={<Pythonv />} />
          <Route path="/nodejsv/7/:id" element={<NodeJsv />} />
          <Route path="/reactjsv/6/:id" element={<ReactJsv />} />
          <Route path="/expressjsv/8/:id" element={<Expressjsv />} />
          <Route path="/mongodbv/9/:id" element={<MongoDbv />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/FeedBackForm/:staticId/:id" element={<FeedBackForm />} />
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
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/editcourse" element={<EditCourse />} />
          <Route path="/htmledit/1" element={<HtmlEdit />} />
          <Route path="mongodbedit/9" element={<MongodbEdit />} />
          <Route path="/nodejsedit/7" element={<NodejsEdit />} />
          <Route path="/reactjsedit/6" element={<ReactjsEdit />} />
          <Route path="/pythonedit/5" element={<PythonEdit />} />
          <Route path="/javaedit/4" element={<JavaEdit />} />
          <Route path="/cssedit/3" element={<CssEdit />} />
          <Route path="/edit-user/:id" element={<UserEditByUser />} />
        </Routes>
        <ToastContainer />
      </header>
    </Router>
  );
}

export default App;
