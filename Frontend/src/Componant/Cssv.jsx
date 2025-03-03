import React, { useEffect, useState } from 'react';
import './Htmlv.css';
import { NavLink } from 'react-router-dom';


export default function Cssv() {
  const [cssContent, setCssContent] = useState(null); // State to store CSS course content
  const [loading, setLoading] = useState(true); // State to show loading while fetching data

  // Fetch CSS content when the component mounts
  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/api/css-course') 
      .then((response) => response.json())
      .then((data) => {
        setCssContent(data); 
        setLoading(false);    
      })
      .catch((error) => {
        console.error('Error fetching CSS content:', error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the HTML content from the database */}
        {cssContent && (
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: cssContent.content }} // Render the HTML content
          />
        )}
      </div>
      
      {/* Video Section */}

      {/* Navigation Links */}
      <div className="notes-container">
        <NavLink to="/cssassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
