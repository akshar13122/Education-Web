import React, { useEffect, useState } from 'react';
import './Htmlv.css';
import { NavLink,useParams } from 'react-router-dom';

export default function Pythonv() {
  const [pythonContent, setPythonContent] = useState(null); // State to store Python course content
  const [loading, setLoading] = useState(true); // State to show loading while fetching data
  const { id } = useParams();
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
            <h1 style={{ textAlign: 'center' }}>Python</h1>
            <div
              className="course-content"
              style={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: pythonContent.content }} // Render the HTML content
            />
            <div className="Ccontent2">
              <h2><a id='h2a'   href='https://www.w3schools.com/python/default.asp'>Python Introduction and Features</a></h2>
              <p>You will Find all the Learning content of Node-Js Features</p><br/>
              <h2><a id='h2a' href='https://www.w3schools.com/python/python_mysql_getstarted.asp'>Python with Mysql</a></h2>
              <p>You will learn about MySQL database connectivity with Python and explore several key MySQL features</p><br/>
              <h2><a  id='h2a' href='https://www.w3schools.com/python/python_mongodb_getstarted.asp'>Python with Mongodb</a></h2>
              <p>You will learn about Mongodb database connectivity with Python and explore several key Mongodb features</p><br/>
            </div>
          </div>
        )}
      </div>

      {/* Navigation for Assignment and Feedback */}
      <div className="notes-container">
        <NavLink to="/pythonassignment" className="notes">Assignment</NavLink>
        <NavLink to={`/FeedBackForm/${id}`} className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
