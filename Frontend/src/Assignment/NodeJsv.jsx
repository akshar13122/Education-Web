import React, { useEffect, useState } from "react";
import '../Componant/Htmlv.css'; 
import { NavLink, useParams } from "react-router-dom";

export default function NodeJsv() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/nodejs-courses") // Fetch Node.js courses
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
        <h1>Node.js</h1>
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
        <NavLink to="/nodejsassignment" className="notes">Assignment</NavLink>
        <NavLink to={`/FeedBackForm/${id}`} className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
