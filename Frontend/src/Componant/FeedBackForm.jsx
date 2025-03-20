import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import './FeedBackForm.css';

const FeedBackForm = () => {
  const { id } = useParams(); // Retrieve userId from the URL parameters

  const [formData, setFormData] = useState({
    rating: 0, // Initially, rating is 0
  });

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add userId to formData
    const dataToSubmit = { ...formData, id };

    // Log the data being sent
    console.log("Data being submitted:", dataToSubmit);

    // Submit the feedback data to the backend
    fetch("http://localhost:5000/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSubmit) // Send the data with userId
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          // Optionally, reset the form after submission
          setFormData({
            rating: 0, // Reset rating
          });
        }
      })
      .catch((err) => {
        console.error("Error submitting feedback:", err);
        alert("Error submitting feedback, please try again.");
      });
  };

  return (
    <div className="feedback-form222">
      <h2>Rate the Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group222">
          {/* <label>Rate the course:</label> */}
          <div className="stars-container">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < formData.rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(index + 1)} // Update rating on click
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group222">
          <button id="bbtn" type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedBackForm;
