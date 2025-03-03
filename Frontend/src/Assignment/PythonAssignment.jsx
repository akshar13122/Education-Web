import React from 'react';
import './CssAssignment.css';

const PythonAssignment = () => {
  return (
    <div className="ass-main">
      <div className="css-assignment">
        <h1>Python Course Assignments</h1>
        <p className="intro">Complete the following assignments to enhance your Python skills.</p>

        <ul className="assignments-list">
          <li className="assignment">
            <h2>1. Write a Python Program to Reverse a String</h2>
            <p>Write a program that takes a string as input and prints it in reverse order.</p>
          </li>

          <li className="assignment">
            <h2>2. Create a Python Program to Find Factorial of a Number</h2>
            <p>Write a program that calculates the factorial of a given number.</p>
          </li>

          <li className="assignment">
            <h2>3. Implement a Simple Calculator Using Python</h2>
            <p>Write a Python program that can perform basic arithmetic operations (addition, subtraction, multiplication, division).</p>
          </li>

          <li className="assignment">
            <h2>4. Create a Python Program to Check if a Number is Prime</h2>
            <p>Write a program that checks if a number is prime or not.</p>
          </li>

          <li className="assignment">
            <h2>5. Implement a Python Program to Find Fibonacci Series</h2>
            <p>Write a program to generate the Fibonacci series up to a given number.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PythonAssignment;
