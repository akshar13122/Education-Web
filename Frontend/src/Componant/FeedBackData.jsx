import React, { useEffect, useState } from 'react';
import './FeedBackData.css'; // Import CSS

const FeedbackData = () => {
  const [feedback, setFeedback] = useState([]); // State to store feedback data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch feedback on component mount
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedback-data"); // Endpoint to fetch feedback
        const data = await response.json();

        if (data.feedback) {
          setFeedback(data.feedback); // Store feedback in the state
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchFeedback();
  }, []);

  // Delete feedback
  const deleteFeedback = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback-data/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setFeedback(feedback.filter(item => item.id !== id)); // Remove feedback from UI
        alert("Feedback deleted successfully!");
      } else {
        alert("Failed to delete feedback.");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  // Function to render stars based on the rating value
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="feedback-data-container">
      <h1>Feedback Data</h1>

      {loading ? (
        <p>Loading feedback...</p>
      ) : (
        <div>
          {feedback.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>User Name</th> {/* Display User Name */}
                  <th>Course Name</th> {/* Display Course Name */}
                  <th>Rating</th> {/* Display Rating as stars */}
                  <th>Delete</th> {/* Delete button */}
                </tr>
              </thead>
              <tbody>
                {feedback.map((item) => (
                  <tr key={item.id}>
                    <td>{item.user_name}</td> {/* Display User Name */}
                    <td>{item.course_name}</td> {/* Display Course Name */}
                    <td>
                      {renderStars(item.rating)} {/* Display Rating as stars */}
                    </td>
                    <td>
                      <button className="deletebtn" onClick={() => deleteFeedback(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No feedback found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackData;
