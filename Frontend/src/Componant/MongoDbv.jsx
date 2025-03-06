import React, { useEffect, useState } from 'react';
import './Htmlv.css'; // Assuming styles are handled in this CSS file
import { NavLink } from 'react-router-dom';

export default function ReactJsv() {
  const [courseContent, setCourseContent] = useState(null);  // State to store course data
  const [loading, setLoading] = useState(true);  // Loading state for fetching data

  useEffect(() => {
    // Fetch course data when the component mounts
    fetch('http://localhost:5000/api/mongodb-course')
      .then((response) => response.json())
      .then((data) => {
        setCourseContent(data);  // Store the fetched data in state
        setLoading(false);       // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching course content:', error);
        setLoading(false);
      });
  }, []);  // Empty dependency array means this will run once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the course title and content fetched from the database */}
        {courseContent && (
          <div className="course-content">
            <h1>Mongodb</h1>
            {/* <h1>{courseContent.title}</h1> */}
            <div
              className="course-body"
              dangerouslySetInnerHTML={{ __html: courseContent.content }} // Display the HTML content
            />
          </div>
        )}
      </div>

      <div className="notes-container">
        <NavLink to="/mongodbassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
