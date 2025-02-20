import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import img8 from './images/8.jpg'; 
import img9 from './images/9.jpg';
import htmlimg from './images/htmlimg.jpg';
import cssimg from './images/cssimg.png';
import react2 from './images/react2.png';
import nodejs2 from './images/nodejs2.png';
import ex from './images/ex.png';
import mongo3 from './images/mongo3.png';

class CourseMenu extends Component {
    courses = [
        { name: 'HTML', link: '/Htmlv' },
        { name: 'CSS', link: '/Cssv' },
        { name: 'Java', link: '/Javav' },
        { name: 'Python', link: '/Pythonv' },
        { name: 'React Js', link: '/Htmlv' },
        { name: 'Node Js', link: '/Htmlv' },
        { name: 'Express Js', link: '/Htmlv' },
        { name: 'Mongo-Db', link: '/Htmlv' },
        { name: 'JavaScript', link: '/Htmlv' },
        { name: 'My-SQL', link: '/Htmlv' },
        { name: 'PHP', link: '/Htmlv' },
        { name: 'Postgre-SQL', link: '/Htmlv' },
    ];

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
    }

    getImageForCourse(courseName) {
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
            case 'JavaScript':
                return mongo3;
            case 'My-SQL':
                return mongo3;
            case 'PHP':
                return mongo3;
            case 'Postgre-SQL':
                return mongo3;
            default:
                return ''; 
        }
    }

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    getFilteredCourses() {
        const { searchTerm } = this.state;
        return this.courses.filter(course => 
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    render() {
        // Destructure the necessary properties and methods
        const { searchTerm } = this.state;
        const filteredCourses = this.getFilteredCourses();
        const getImageForCourse = this.getImageForCourse;

        return (
            <div className="course-menu">
                {/* Search bar */}
                <div className='searchbar-main' >
                <input type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                    className="search-bar"
                />
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
                                <NavLink to={course.link} className="btn22">{course.name}</NavLink>
                            </div>
                        ))
                    ) : (
                        <p>No courses found</p>
                    )}
                </div>
            </div>
        );
    }
}

export default CourseMenu;
