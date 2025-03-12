import React, { useState, useEffect } from 'react';
import { NavLink,useParams} from 'react-router-dom';
import './Htmlv.css';  

export default function ReactJsv() {
  const [reactContent, setReactContent] = useState(null);  
  const [loading, setLoading] = useState(true);            
  const [error, setError] = useState(null);                
  const { id } = useParams();
  
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
        {/* Display the ReactJS course content */}
        {reactContent && (
          <>
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: reactContent.content }} /><br/>
            <div className="Ccontent2">
              <h2><a id='h2a'   href='https://www.w3schools.com/react/default.asp'>React-Js Introduction and Features</a></h2>
              <p>You will Find all the Learning content of Node-Js Features</p><br/>
              <h2><a id='h2a' href='https://www.w3schools.com/react/react_hooks.asp'>React-Js Hooks</a></h2>
              <p>You will learn about Several React-Js Hooks with Examples</p><br/>
              <h2><a  id='h2a' href='https://www.w3schools.com/react/react_compiler.asp'>React-Js Exercises</a></h2>
              <p>You will find several Exercises of React-js</p><br/>
            </div>
            </>
        )}
      </div>

      {/* Error handling */}
      {error && <div className="error">{error}</div>}

      <div className="notes-container">
        <NavLink to="/reactjsassignment" className="notes">Assignment</NavLink>
        <NavLink to={`/FeedBackForm/${id}`} className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}
