import React from 'react';
import './EditCourse.css';
import { NavLink } from 'react-router-dom';

const EditCourse = () => {
  return (
    <div className="coursesDiv">
      <div className="courses-dashboard">
        <h1>Course Management</h1>
        <h2>Manage your courses easily</h2>

        {/* Course List */}
        <div className="courses-list">
          <div className="course-item">
            <h3 className="course-title">HTML</h3>
            <NavLink to="/htmledit/1" className="editbtn">Edit</NavLink>
          </div>
          <div className="course-item">
            <h3 className="course-title">CSS</h3>
            <button className="editbtn">Edit</button>
          </div>
          <div className="course-item">
            <h3 className="course-title">Java</h3>
            <button className="editbtn">Edit</button>
          </div>
          <div className="course-item">
            <h3 className="course-title">Python</h3>
            <button className="editbtn">Edit</button>
          </div>
          <div className="course-item">
            <h3 className="course-title">React-js</h3>
            <button className="editbtn">Edit</button>
          </div>
          <div className="course-item">
            <h3 className="course-title">Node-js</h3>
            <button className="editbtn">Edit</button>
          </div>
          <div className="course-item">
            <h3 className="course-title">Express-js</h3>
            <button className="editbtn">Edit</button>
          </div>
          <div className="course-item">
            <h3 className="course-title">Mongo-Db</h3>
            <NavLink to="/mongodbedit/9" className="editbtn">Edit</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
