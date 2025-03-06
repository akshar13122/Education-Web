import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Htmlv.css';  

export default function ReactJsv() {
  const [reactContent, setReactContent] = useState(null);  
  const [loading, setLoading] = useState(true);            
  const [error, setError] = useState(null);                

  
  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/api/reactjs-course')  
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);  
        } else {
          setReactContent(data); 
          setLoading(false);      
        }
      })
      .catch((error) => {
        console.error('Error fetching ReactJS content:', error);
        setError('Error fetching course data: ' + error.message);
        setLoading(false);
      });
  }, []);  

 
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
