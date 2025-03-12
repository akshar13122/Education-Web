import React from 'react';
import './CssAssignment.css';

const NodejsAssignment = () => {
  return (
    <div className="ass-main">
      <div className="css-assignment">
        <h1>Node.js Course Assignments</h1>
        <p className="intro">Complete the following assignments to enhance your Node.js skills.</p>

        <ul className="assignments-list">
          <li className="assignment">
            <h2>1. Build a Simple HTTP Server</h2>
            <p>Use Node.js to create a simple HTTP server that responds with "Hello, World!" when accessed.</p>
          </li>

          <li className="assignment">
            <h2>2. Create a Basic REST API</h2>
            <p>Design a basic REST API using Express.js with endpoints like GET, POST, PUT, DELETE for managing resources (e.g., users or tasks).</p>
          </li>

          <li className="assignment">
            <h2>3. Implement File Operations</h2>
            <p>Write a Node.js script to perform file operations such as reading, writing, and appending to a file.</p>
          </li>

          <li className="assignment">
            <h2>4. Connect to a Database</h2>
            <p>Create a Node.js app that connects to a MongoDB or MySQL database and performs basic CRUD operations (Create, Read, Update, Delete).</p>
          </li>

          <li className="assignment">
            <h2>5. Build a Simple Authentication System</h2>
            <p>Develop a basic authentication system using JWT (JSON Web Token) for user login and session management in Node.js.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NodejsAssignment;
