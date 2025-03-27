import React from 'react';
import './EditCourse.css';
import { NavLink } from 'react-router-dom';

const EditCourse = () => {
  return (
    <div className="coursesDiv">
      <div className="courses-dashboard">
        <h2 style={{color:"white"}}>Course Management</h2>
        {/* Course Table */}
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "HTML", link: "/htmledit/1" },
              { name: "CSS", link: "/cssedit/3" },
              { name: "Java", link: "/javaedit/4" },
              { name: "Python", link: "/pythonedit/5" },
              { name: "React-js", link: "/reactjsedit/6" },
              { name: "Node-js", link: "/nodejsedit/7" },
              { name: "Express-js", link: "#" },
              { name: "Mongo-Db", link: "/mongodbedit/9" },
            ].map((course, index) => (
              <tr key={index} >
                <td style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}
                >{course.name}</td>
                <td>
                  {course.link !== "#" ? (
                    <NavLink to={course.link} className="editbtn">Edit</NavLink>
                  ) : (
                    <button className="editbtn">Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditCourse;
