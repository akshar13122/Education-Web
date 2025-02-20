import React from 'react';
import { NavLink } from 'react-router-dom';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';

function Dashboard() {
    return (
        <>
            <h1 id='h1c'> Free videos we are providing:</h1>
            <div className="buttonh1">
                <img src={img8} alt="Course 1" />
            </div>
            <div className="buttonh2">
                <img src={img9} alt="Course 2" />
            </div>
            <div className="b1">
                <NavLink to="/python-course">HTML</NavLink>
            </div>
            <div className="b2">
                <NavLink to="/java-course">CSS</NavLink>
            </div>
        </>
    );
}

export default Dashboard;
