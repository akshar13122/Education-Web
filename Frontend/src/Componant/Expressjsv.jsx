import React, { useEffect, useState } from 'react';
import './Htmlv.css'; // Assuming you want to style your page similarly
import { NavLink,useParams } from 'react-router-dom';

export default function ReactJsv() {
  const [nodejsContent, setNodejsContent] = useState(null); // State to store Node.js course content
  const [loading, setLoading] = useState(true); // State to handle loading state
  const { id } = useParams();
  const staticId = 8;
  // Fetch Node.js course content when the component mounts
  useEffect(() => {
    // Fetch data from the server (Node.js course API endpoint)
    fetch('http://localhost:5000/api/expressjs-course')
      .then((response) => response.json())
      .then((data) => {
        setNodejsContent(data);  // Store the fetched content in state
        setLoading(false);        // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching Node.js course content:', error);
        setLoading(false);
      });
  }, []);  // Empty dependency array means the request will be triggered once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  return (
    <div className="htmlv-container">
      <div className="ApiSec">
        {/* Display the Node.js course content from the database */}
        {nodejsContent && (
          <div>
            <h1>Express-Js</h1>
            {/* <h1>{nodejsContent.title}</h1> */}
            <div
              className="html-content"
              dangerouslySetInnerHTML={{ __html: nodejsContent.content }} // Render the HTML content
            />
            <div className="Ccontent2">
              <h2>Introduction</h2>
            </div>
          </div>
        )}
      </div>

      <div className="notes-container">
        <NavLink to="/expressjsassignment" className="notes">Assignment</NavLink>
        <NavLink to={`/FeedBackForm/${staticId}/${id}`} className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
