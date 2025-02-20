import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <header>
                    <nav className="nav-container">
                        <div className="left-nav22">
                            {/* Register and Login buttons */}
                            <Link to="/register" className="nav-btn22">Register</Link>
                            <Link to="/login" id='nnbtn' >Login</Link>
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
                        <Route path="/CourseMenu" element={<CourseMenu />} />
                        <Route path="/Htmlv" element={<Htmlv />} />
                        <Route path="/Cssv" element={<Cssv />} />
                        <Route path="/Javav" element={<Javav />} />
                        <Route path="/Pythonv" element={<Pythonv />} />
                        <Route path="/FeedBackForm" element={<FeedBackForm />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/login" element={<LogIn/>} />
                    </Routes>
                    <ToastContainer />
                </header>
            </Router>
        );
    }
}

export default App;
