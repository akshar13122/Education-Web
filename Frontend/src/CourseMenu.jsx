import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'; // Import useParams
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import htmlimg from './images/htmlimg.jpg';
import cssimg from './images/cssimg.png';
import react2 from './images/react2.png';
import nodejs2 from './images/nodejs2.png';
import ex from './images/ex.png';
import mongo3 from './images/mongo3.png';

const CourseMenu = () => {
    var user = JSON.parse(localStorage.getItem('user'));  // Parse the 'user' JSON string from localStorage

    if (user) {
        var id = user.id;  // Access the 'id' property from the parsed object
        console.log("User ID from localStorage:", id);  // Now you can log the 'id'
    } else {
        console.log("No user found in localStorage");
    }


    // Check if the user is logged in (this could be based on localStorage, sessionStorage, or context)
    const isLoggedIn = localStorage.getItem('user') !== null; // Example: Checking if a 'user' object exists in localStorage

    useEffect(() => {
        // Check if the page has already been reloaded (stored in localStorage)
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (!hasReloaded) {
            // If the page has not been reloaded before, reload it and set the flag in localStorage
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);

    const courses = [
        { name: 'HTML', link: '/Htmlv' },
        { name: 'CSS', link: '/Cssv' },
        { name: 'Java', link: '/Javav' },
        { name: 'Python', link: '/Pythonv' },
        { name: 'React Js', link: '/reactjsv' },
        { name: 'Node Js', link: '/nodejsv' },
        { name: 'Express Js', link: '/expressjsv' },
        { name: 'Mongo-Db', link: '/mongodbv' },
    ];

    const getImageForCourse = (courseName) => {
        switch (courseName) {
            case 'HTML':
                return htmlimg;
            case 'CSS':
                return cssimg;
            case 'Java':
                return img9;
            case 'Python':
                return img8;
            case 'React Js':
                return react2;
            case 'Node Js':
                return nodejs2;
            case 'Express Js':
                return ex;
            case 'Mongo-Db':
                return mongo3;
            default:
                return '';
        }
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const getFilteredCourses = () => {
        return courses.filter(course =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredCourses = getFilteredCourses();

    return (
        <div className="course-menu">
            {/* Conditionally render the profile button only if the user is logged in */}
            {/* {isLoggedIn && (
                <div className="profile-button-container">
                    <NavLink to={`/myprofile/${id}`} id="profile-btn-my">
                        My Profile
                    </NavLink>
                </div>
            )} */}
                {/* <div className="profile-button-container">
                    <NavLink to={`/myprofile/${id}`} id="profile-btn-my">
                        My Profile
                    </NavLink>
                </div> */}

            <div className="search-profile-container">
                <div className='searchbar-main'>
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-bar"
                    />
                </div>
            </div>

            <div className="course-grid">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <div key={index} className="course-card">
                            <img
                                src={getImageForCourse(course.name)}
                                alt={`${course.name} Course`}
                                className="course-image"
                            />
                            <h2>{course.name}</h2>
                            {/* Append the logged-in user ID to the course URL */}
                            <NavLink to={`${course.link}/${id}`} className="btn22" style={{marginRight:'3px'}}>
                                {course.name}
                            </NavLink>
                            <NavLink to='' className="btn22" style={{marginLeft:'3px'}}>
                                Enroll
                            </NavLink>
                        </div>
                    ))
                ) : (
                    <p>No courses found</p>
                )}
            </div>
        </div>
    );
};

export default CourseMenu;
