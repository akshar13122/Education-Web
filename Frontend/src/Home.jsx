import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="title">
                <h1>BE VERSATILE</h1>
            </div>
            <div className="buttoncc">
                <NavLink to="/CourseMenu" className="btn">COURSE MENU</NavLink>
                <NavLink to="/adminlogin" className="btn">ADMIN LOGIN</NavLink>
            </div>
        </>
    );
}

export default Home;
