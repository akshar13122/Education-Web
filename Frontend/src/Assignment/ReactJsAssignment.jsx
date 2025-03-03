import React from 'react';
import './CssAssignment.css';

const ReactJsAssignment = () => {
  return (
    <div className="ass-main">
      <div className="css-assignment">
        <h1>ReactJS Course Assignments</h1>
        <p className="intro">Complete the following assignments to enhance your ReactJS skills.</p>

        <ul className="assignments-list">
          <li className="assignment">
            <h2>1. Create a Simple Counter App</h2>
            <p>Build a simple React app that increments and decrements a counter value when buttons are clicked.</p>
          </li>

          <li className="assignment">
            <h2>2. Build a Todo List App</h2>
            <p>Design a todo list app where users can add, delete, and mark tasks as completed using React.</p>
          </li>

          <li className="assignment">
            <h2>3. Create a Dynamic Form with Validation</h2>
            <p>Build a React form with multiple input fields (name, email, etc.) that validates input and displays error messages.</p>
          </li>

          <li className="assignment">
            <h2>4. Fetch Data from an API</h2>
            <p>Write a React app that fetches data from a public API and displays the results (e.g., a list of users or posts).</p>
          </li>

          <li className="assignment">
            <h2>5. Build a Simple React Router Navigation</h2>
            <p>Set up React Router and create a basic navigation system with multiple pages (Home, About, Contact).</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReactJsAssignment;
