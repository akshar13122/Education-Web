import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Check if the user is logged in by checking localStorage
    const user = JSON.parse(localStorage.getItem('user'));  // Assuming you saved the user object during login
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
            <div className="buttoncc">
                {/* Button click will trigger the handleCourseMenuClick function */}
                {/* <button className="btn"  style={{ backgroundColor: 'transparent' }}>
                    COURSE MENU
                </button> */}
                <button onClick={handleCourseMenuClick} className="btn" style={{ backgroundColor: 'transparent', borderRadius: '0' }}>COURSE MENU</button>
                <NavLink to="/adminlogin" className="btn">ADMIN LOGIN</NavLink>
            </div>
        </>
    );
}

export default Home;
