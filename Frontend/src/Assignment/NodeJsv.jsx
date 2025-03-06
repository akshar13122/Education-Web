import React, { useEffect, useState } from 'react';
import '../Componant/Htmlv.css';
import { NavLink } from 'react-router-dom';

export default function ReactJsv() {
  const [reactContent, setReactContent] = useState(null); // State to store React course content
  const [loading, setLoading] = useState(true); // State to show loading while fetching data

  // Fetch ReactJS course content when the component mounts
  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/api/nodejs-course') // Make sure the URL matches your backend route
      .then((response) => response.json())
      .then((data) => {
        setReactContent(data); // Store the fetched content in state
        setLoading(false);      // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching ReactJS content:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means the request will be triggered once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the ReactJS course content */}
        {reactContent && (
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: reactContent.content }} // Render HTML content
          />
        )}
      </div>

      <div className="notes-container">
        <NavLink to="/nodejsassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
