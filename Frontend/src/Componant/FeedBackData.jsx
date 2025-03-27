import React, { useEffect, useState } from 'react';
import './FeedBackData.css'; // Import CSS

const FeedbackData = () => {
  const [feedback, setFeedback] = useState([]); // State to store feedback data
  const [loading, setLoading] = useState(true); // Loading state
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

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

  // Filter feedback based on the search query (course name)
  const filteredFeedback = feedback.filter(item =>
    item.course_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="feedmain" style={{}}>
      <div className="feedback-data-container">
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h2 style={{ color: "white" }}>FEEDBACK DATA</h2>

{/* Search Bar */}
 {/* <div className="searchmain">
 <div className="search-bar">
  <input
    type="text"
    placeholder="Search by Course Name"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)} 
    className="search-input"
  />
</div>
 </div> */}
       <div className="searchm">
    <div className="search-bar3">
      <input
        type="text"
        placeholder="Search by Course Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="search-input"
        style={{height:"40px" , width:"400px" , color:"black"}}
      />
    </div>
    </div>

{loading ? (
  <p>Loading feedback...</p>
) : (
  <div>
    {filteredFeedback.length > 0 ? (
      <table className='feedtbll' style={{width:"100%"}}>
        <thead>
          <tr>
            <th>NAME</th> {/* Display User Name */}
            <th>COURSE NAME</th> {/* Display Course Name */}
            <th>RATINGS</th> {/* Display Rating as stars */}
            <th>ACTION</th> {/* Delete button */}
          </tr>
        </thead>
        <tbody>
          {filteredFeedback.map((item) => (
            <tr key={item.id} className='td'>
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
      </div>
    </div>
  );
};

export default FeedbackData;
