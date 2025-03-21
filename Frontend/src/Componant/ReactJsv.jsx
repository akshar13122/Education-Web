import React, { useEffect, useState } from "react";
import "./Htmlv.css"; // Assuming styles are in this CSS file
import { NavLink, useParams } from "react-router-dom";

export default function ReactJsv() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const staticId = 6
  useEffect(() => {
    fetch("http://localhost:5000/api/reactjs-courses") // Fetch React.js courses
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course content:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        <h1>React.js</h1>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="course-content">
              <h2 className="contentH2">
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.heading}
                </a>
              </h2>
              <p className="contentP">{course.content}</p>
            </div>
          ))
        ) : (
          <p>No course data available</p>
        )}
      </div>

      <div className="notes-container">
        <NavLink to="/reactjsassignment" className="notes">Assignment</NavLink>
        <NavLink to={`/FeedBackForm/${staticId}/${id}`} className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
