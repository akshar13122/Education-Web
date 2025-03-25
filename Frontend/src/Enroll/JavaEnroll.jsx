import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Enroll.css"; // Import the CSS file

const JavaEnroll = () => {
//   const { firstid, lastid } = useParams();
  const [enrolled, setEnrolled] = useState("");
  var user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var id = user.id; // Access the 'id' property from the parsed object
    console.log("User ID from localStorage:", id); // Now you can log the 'id'
  } else {
    console.log("No user found in localStorage");
  }
  var courseId = 4
  console.log("courseId",courseId);
  

  const handleEnroll = async () => {
    if (enrolled !== "YES") {
      alert("Please select 'YES' to enroll.");
      return;
    }

    const enrollmentData = {
      name: id,
      coursename: courseId,
      enrolled: "YES",
    };

    try {
      const response = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error enrolling user:", error);
      alert("Error enrolling user. Please try again.");
    }
  };

  return (
    <div className="enroll-container">
      <h2>Enroll in Course CSS</h2>
      {/* <p>Course ID: {firstid}</p>
      <p>User ID: {lastid}</p> */}
      <label>
        Enroll:
        <select value={enrolled} onChange={(e) => setEnrolled(e.target.value)}>
          <option value="">Select</option>
          <option value="YES">YES</option>
        </select>
      </label>
      <button onClick={handleEnroll}>Submit</button>
    </div>
  );
};

export default JavaEnroll;
