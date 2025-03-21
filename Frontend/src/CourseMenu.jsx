import React, { useState,useEffect } from 'react';
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
    // Access the id parameter from the URL (assuming the logged-in user has an id)
    
    const { id } = useParams(); 

    console.log(id);  // You can see the logged-in user ID in the console
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
    // useEffect(() => {
    //     window.location.reload();
    // }, []); 
    return (
        <div className="course-menu">
            <div className="center">
                  <div className="profile-button-container">
                <NavLink to={`/myprofile/${id}`} id="profile-btn-my">My Profile</NavLink>
            </div>
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
                            <NavLink to={`${course.link}/${id}`} className="btn22">
                                {course.name}
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
