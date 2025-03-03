import React, { useEffect, useState } from 'react';
import './Htmlv.css';
import { NavLink } from 'react-router-dom';

export default function Pythonv() {
  const [pythonContent, setPythonContent] = useState(null); // State to store Python course content
  const [loading, setLoading] = useState(true); // State to show loading while fetching data

  // Fetch Python content when the component mounts
  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/api/python-course')
      .then((response) => response.json())
      .then((data) => {
        setPythonContent(data);  // Store the fetched content in state
        setLoading(false);        // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching Python content:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means the request will be triggered once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the Python content from the database */}
        {pythonContent && (
          <div className="html-content">
            {/* <h2 style={{ textAlign: 'center' }}>{pythonContent.title}</h2> */}
            <div
              className="course-content"
              style={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: pythonContent.content }} // Render the HTML content
            />
          </div>
        )}
      </div>

      {/* Navigation for Assignment and Feedback */}
      <div className="notes-container">
        <NavLink to="/pythonassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
