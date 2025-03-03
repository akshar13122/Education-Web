import React from 'react';
import './HtmlAssignment.css';
const HtmlAssignment = () => {
  return (
    <div className="ass-main">
         <div className="html-assignment">
      <h1>HTML Assignments</h1>
      <p className="intro">Complete the following assignments to enhance your HTML skills.</p>

      <ul className="assignments-list">
        <li className="assignment">
          <h2>1. Create a Simple Web Page Layout</h2>
          <p>Build a webpage with sections: Header, Navigation Menu, Main Content Area, and Footer.</p>
        </li>

        <li className="assignment">
          <h2>2. Build a Simple Form</h2>
          <p>Design a form with name, email, and message fields, including basic validation.</p>
        </li>

        <li className="assignment">
          <h2>3. Create a Responsive Table</h2>
          <p>Create a table with 3 rows of data and ensure responsiveness.</p>
        </li>

        <li className="assignment">
          <h2>4. Create an Image Gallery</h2>
          <p>Design an image gallery with at least 5 images, linking to larger versions.</p>
        </li>

        <li className="assignment">
          <h2>5. Implement a Navigation Bar with Dropdown</h2>
          <p>Build a navigation bar with links, including a dropdown for one of them.</p>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default HtmlAssignment;
