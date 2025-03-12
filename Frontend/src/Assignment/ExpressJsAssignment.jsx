import React from 'react';
import './CssAssignment.css';

const ExpressJsAssignment = () => {
  return (
    <div className="ass-main">
      <div className="css-assignment">
        <h1>Express.js Course Assignments</h1>
        <p className="intro">Complete the following assignments to enhance your Express.js skills.</p>

        <ul className="assignments-list">
          <li className="assignment">
            <h2>1. Build a Basic Express Server</h2>
            <p>Create a simple Express.js server that responds with "Hello, Express!" when accessed.</p>
          </li>

          <li className="assignment">
            <h2>2. Create a RESTful API</h2>
            <p>Design a REST API using Express.js with the standard CRUD operations (Create, Read, Update, Delete).</p>
          </li>

          <li className="assignment">
            <h2>3. Implement Middleware</h2>
            <p>Create custom middleware in Express.js to log request details (method, URL, timestamp) before each request is handled.</p>
          </li>

          <li className="assignment">
            <h2>4. Use Express Router</h2>
            <p>Break your Express.js server into multiple route files using `express.Router()` for a modular approach.</p>
          </li>

          <li className="assignment">
            <h2>5. Handle Form Data</h2>
            <p>Create an Express.js application that handles both `GET` and `POST` requests to submit form data (e.g., name, email) and store them in a JSON file.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpressJsAssignment;
