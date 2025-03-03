import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Htmlv.css';  // Assuming you want to use the same styles as Htmlv component

export default function ReactJsv() {
  const [reactContent, setReactContent] = useState(null);  // State to store ReactJS content
  const [loading, setLoading] = useState(true);            // State to show loading while fetching data
  const [error, setError] = useState(null);                // State to handle errors

  // Fetch ReactJS content when the component mounts
  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/api/reactjs-course')  // Update the API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);  // Handle any error in the response
        } else {
          setReactContent(data);  // Store the fetched ReactJS content in state
          setLoading(false);       // Set loading to false once data is fetched
        }
      })
      .catch((error) => {
        console.error('Error fetching ReactJS content:', error);
        setError('Error fetching course data: ' + error.message);
        setLoading(false);
      });
  }, []);  // Empty dependency array ensures the request triggers only once when the component mounts

  // Show loading state while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the ReactJS content from the database */}
        {reactContent ? (
          <div className="html-content" dangerouslySetInnerHTML={{ __html: reactContent.content }} />
        ) : (
          <div>No ReactJS content available</div>
        )}
      </div>

      {/* Error handling */}
      {error && <div className="error">{error}</div>}

      <div className="notes-container">
        <NavLink to="/reactjsassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
