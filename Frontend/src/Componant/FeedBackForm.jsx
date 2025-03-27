import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import './FeedBackForm.css';

const FeedBackForm = () => {
  var { id, staticId } = useParams(); // Retrieve userId and courseId from the URL parameters

  // Log userId and courseId when the component is mounted
  useEffect(() => {
    console.log("User ID:", id);
    console.log("Course ID:", staticId);
  }, [id, staticId]);

  const [formData, setFormData] = useState({
    rating: 0, // Initially, rating is 0
  });

  const [error, setError] = useState(""); // State for validation message

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
    setError(""); // Clear error message when a rating is selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure a rating is selected
    if (formData.rating === 0) {
      alert("Please select a rating before submitting.")
      // setError("Please select a rating before submitting.");
      return;
    }

    // Prepare data to be sent, including userId, courseId, and rating
    const dataToSubmit = {
      rating: formData.rating,
      name: id,  // User ID
      coursename: staticId,  // Course ID
    };

    // Log the data being sent
    console.log("Data being submitted:", dataToSubmit);

    // Submit the feedback data to the backend
    fetch("http://localhost:5000/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          // Reset the form after submission
          setFormData({ rating: 0 });
          setError(""); // Clear error message
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
          <div className="stars-container">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < formData.rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(index + 1)}
              >
                ★
              </span>
            ))}
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="form-group222">
          <button id="bbtn" type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedBackForm;
