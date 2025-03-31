import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('admin') !== null);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);

    // Check if the user is logged in by checking localStorage
    const storedUser = localStorage.getItem('user');  // Get the user string from localStorage
    let user = null;

    // Only parse if the storedUser exists
    if (storedUser) {
        try {
            user = JSON.parse(storedUser);  // Try parsing the stored user data
        } catch (e) {
            console.error('Error parsing user data:', e);  // Log any parsing error
        }
    }

    const userId = user ? user.id : null;  // If logged in, retrieve the user id

    // Handle the click on "Course Menu" button
    const handleCourseMenuClick = () => {
        if (userId) {
            // If logged in, navigate to the course menu with user ID
            navigate(`/CourseMenu/${userId}`);
        } else {
            // If not logged in, navigate to the course menu without user ID
            navigate('/CourseMenu');
        }
    };

    // Handle the click for admin login
    const handleAdminLoginClick = () => {
        if (isLoggedIn) {
            // If the user is logged in as a regular user, show an alert
            alert("You are not an Admin, you cannot login as Admin.");
        } else {
            // If the user is not logged in, navigate to admin login page
            navigate('/adminlogin');
        }
    };

    return (
        <>
            <div className="title">
                <h1>BE VERSATILE</h1>
            </div>
            <div className="btncc2">
                <div className="buttoncc">
                    {/* Button click will trigger the handleCourseMenuClick function */}
                    <button 
                        onClick={handleCourseMenuClick} 
                        className="btn" 
                        style={{ backgroundColor: 'transparent',borderRadius:"0.1px" }}
                        // style={{backgroundColor:'transparent'}}
                        >
                        COURSE MENU
                    </button>

                    {/* Conditionally render the ADMIN LOGIN based on login status */}
                    {!isLoggedIn ? (
                        <NavLink to="/adminlogin" className="btn">ADMIN LOGIN</NavLink>
                    ) : (
                        <NavLink 
                            onClick={handleAdminLoginClick} 
                            className="btn"
                            // style={{ backgroundColor: 'transparent', borderRadius: '10px' }}
                            
                            >
                            ADMIN LOGIN
                        </NavLink>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
