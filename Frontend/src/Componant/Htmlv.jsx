import React, { useEffect, useState } from 'react';
import './Htmlv.css';
import { NavLink } from 'react-router-dom';

export default function Htmlv() {
  const [htmlContent, setHtmlContent] = useState(null); // State to store HTML content
  const [loading, setLoading] = useState(true); // State to show loading while fetching data

  // Fetch HTML content when the component mounts
  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/api/html-course')
      .then((response) => response.json())
      .then((data) => {
        setHtmlContent(data);  // Store the fetched content in state
        setLoading(false);      // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching HTML content:', error);
        setLoading(false);
      });
  }, []);  // Empty dependency array means the request will be triggered once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the HTML content from the database */}
        {htmlContent && (
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: htmlContent.content }} // Render the HTML content
          />
        )}
      </div>
      <div className="notes-container">
        <NavLink to="/htmlassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
