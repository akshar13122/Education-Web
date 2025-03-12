import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import './FeedBackForm.css';

const FeedBackForm = () => {
  const { id } = useParams(); // Retrieve userId from the URL parameters

  const [formData, setFormData] = useState({
    courseLike: '',
    query: '',
    suggestions: '',
    rating: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the userId to the console for debugging
    console.log("User ID from URL:", id);

    // Add userId to formData
    const dataToSubmit = { ...formData, id };

    // Debug: Log the data being sent
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
            courseLike: '',
            query: '',
            suggestions: '',
            rating: '1'
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
      <h2>Course Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group222">
          <label>1. Do you like the course?</label>
          <input
            type="text"
            name="courseLike"
            value={formData.courseLike}
            onChange={handleChange}
            placeholder="Please type your answer"
            required
          />
        </div>

        <div className="form-group222">
          <label>2. Any query or difficulty?</label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Please write your query or difficulty here"
            rows="4"
          />
        </div>

        <div className="form-group222">
          <label>3. Any suggestions?</label>
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            placeholder="Please write your suggestions here"
            rows="4"
          />
        </div>

        <div className="form-group222">
          <label>4. Rate the course from 1 to 10</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group222">
          <button id='bbtn' type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedBackForm;
