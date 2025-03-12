import React from 'react';
import './CssAssignment.css';

const CssAssignment = () => {
  return (
    <div className="ass-main">
      <div className="css-assignment">
        <h1>CSS Course Assignments</h1>
        <p className="intro">Complete the following assignments to enhance your CSS skills.</p>

        <ul className="assignments-list">
          <li className="assignment">
            <h2>1. Create a Flexbox Layout</h2>
            <p>Build a layout using Flexbox with a header, sidebar, and content area.</p>
          </li>

          <li className="assignment">
            <h2>2. Style a Form with CSS</h2>
            <p>Design a form with input fields and style it with CSS.</p>
          </li>

          <li className="assignment">
            <h2>3. Build a Responsive Navigation Bar</h2>
            <p>Create a navigation bar with links that adjust based on screen size.</p>
          </li>

          <li className="assignment">
            <h2>4. Create a CSS Grid Layout</h2>
            <p>Use CSS Grid to design a layout with multiple rows and columns.</p>
          </li>

          <li className="assignment">
            <h2>5. Style a Card Component</h2>
            <p>Design a card component with an image, text, and a button.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssAssignment;
