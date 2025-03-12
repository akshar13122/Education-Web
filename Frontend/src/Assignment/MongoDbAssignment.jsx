import React from 'react';
import './CssAssignment.css';

const MongoDbAssignment = () => {
  return (
    <div className="ass-main">
      <div className="css-assignment">
        <h1>MongoDB Course Assignments</h1>
        <p className="intro">Complete the following assignments to enhance your MongoDB skills.</p>

        <ul className="assignments-list">
          <li className="assignment">
            <h2>1. Install MongoDB and Set Up a Database</h2>
            <p>Install MongoDB on your local machine and create a new database named "school".</p>
          </li>

          <li className="assignment">
            <h2>2. Create a Collection and Insert Documents</h2>
            <p>In your "school" database, create a collection called "students" and insert at least 5 student documents with fields: name, age, and grade.</p>
          </li>

          <li className="assignment">
            <h2>3. Query Data</h2>
            <p>Write a query to retrieve all students who are older than 18 years from the "students" collection.</p>
          </li>

          <li className="assignment">
            <h2>4. Update Data</h2>
            <p>Update the grade of a student in the "students" collection to "A".</p>
          </li>

          <li className="assignment">
            <h2>5. Delete Documents</h2>
            <p>Delete a student document from the "students" collection where the student's name is "John Doe".</p>
          </li>

          <li className="assignment">
            <h2>6. Use Aggregation</h2>
            <p>Perform an aggregation on the "students" collection to calculate the average age of all students.</p>
          </li>

          <li className="assignment">
            <h2>7. Indexing</h2>
            <p>Create an index on the "name" field of the "students" collection for faster searching.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MongoDbAssignment;
