import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './EnrolledUser.css'

const EnrolledUser = () => {
  const { id } = useParams(); // Get user ID from URL
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    fetchEnrollments();
  }, [id]);

  const fetchEnrollments = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/enrollment/${id}`);
      const data = await response.json();

      if (data.enrollments) {
        setEnrollments(data.enrollments);
      }
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    } finally {
      setLoading(false);
    }
  };

 
    // const handleRemoveEnrollment = async (courseName) => {
    //     console.log("Removing course:", courseName);
      
    //     if (!window.confirm(`Are you sure you want to remove enrollment for ${courseName}?`)) {
    //       return;
    //     }
      
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/enrolled/remove/${id}?courseName=${courseName}`, {
    //             method: "DELETE",
    //             headers: { "Content-Type": "application/json" },
    //           });
          
      
    //       const result = await response.json();
    //       if (result.success) {
    //         alert("Enrollment removed successfully.");
    //         setEnrollments(enrollments.filter(enrollment => enrollment.coursename !== courseName));
    //       } else {
    //         alert("Failed to remove enrollment.");
    //       }
    //     } catch (error) {
    //       console.error("Error removing enrollment:", error);
    //     }
    //   };
  

  return (
    <div className="mainfdata">
        <div className="feeddata">
      <h2 style={{color:"white"}}>Enrolled Courses</h2>
      {/* <p>User ID: {id}</p> */}

      {loading ? (
        <p>Loading enrollments...</p>
      ) : enrollments.length > 0 ? (
        <table border="1" className="entable" >
          <thead>
            <tr>
              {/* <th>NAME</th>  */}
              <th>COURSE NAME</th>
              {/* <th>ENROLLMENT STATUS</th> */}
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment, index) => (
                     <tr
                     key={index}
                     style={{
                       backgroundColor: hoverIndex === index ? "rgba(47, 102, 156, 0.74)" : "transparent",
                       transition: "0.3s",
                     }}
                     onMouseEnter={() => setHoverIndex(index)}
                     onMouseLeave={() => setHoverIndex(null)}
                   >
                {/* <td>{enrollment.name}</td> */}
                <td>{enrollment.coursename}</td>
                {/* <td>{enrollment.enrolled}</td> */}
                {/* <td>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemoveEnrollment(enrollment.coursename)}
                  >
                    Remove
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No enrollments found for this user.</p>
      )}
    </div>
    </div>
  );
};

export default EnrolledUser;
