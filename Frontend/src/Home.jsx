import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Initialize the useNavigate hook

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
        if (!userId) {
            // If no user is logged in, show an alert and redirect to login page
            alert('Without login, you can\'t access the Course Menu. Please login first!');
            navigate('/login');  // Redirect to the login page
        } else {
            // Otherwise, navigate to Course Menu with the user id
            navigate(`/CourseMenu/${userId}`);
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
                <button onClick={handleCourseMenuClick} className="btn" style={{ backgroundColor: 'transparent', borderRadius: '0' }}>
                    COURSE MENU
                </button>
                <NavLink to="/adminlogin" className="btn">ADMIN LOGIN</NavLink>
            </div>
            </div>
        </>
    );
}

export default Home;
