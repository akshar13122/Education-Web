import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import htmlimg from "./images/htmlimg.jpg";
import cssimg from "./images/cssimg.png";
import react2 from "./images/react2.png";
import nodejs2 from "./images/nodejs2.png";
import ex from "./images/ex.png";
import mongo3 from "./images/mongo3.png";

const MyCourse = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const uid = user ? user.id : null;

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!uid) return;
      try {
        const response = await fetch(`http://localhost:5000/api/enrollment/${uid}`);
        const data = await response.json();
        console.log(data);
        if (data.enrollments) {
          setEnrollments(data.enrollments);
        }
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [uid]);

  const courses = [
    { name: "HTML", link: "/Htmlv/1" },
    { name: "CSS", link: "/Cssv/3" },
    { name: "Java", link: "/Javav/4" },
    { name: "Python", link: "/Pythonv/5" },
    { name: "ReactJs", link: "/reactjsv/6" },
    { name: "NodeJs", link: "/nodejsv/7" },
    { name: "Express", link: "/expressjsv/8" },
    { name: "mongo", link: "/mongodbv/9" },
  ];

  const getImageForCourse = (courseName) => {
    switch (courseName) {
      case "HTML": return htmlimg;
      case "CSS": return cssimg;
      case "Java": return img9;
      case "Python": return img8;
      case "ReactJs": return react2;
      case "NodeJs": return nodejs2;
      case "Express": return ex;
      case "mongo": return mongo3;
      default: return "";
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter courses to show only enrolled ones
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => {
      const storedCourseName = enrollment.coursename.replace(/[-\s]/g, "").toLowerCase();
      const currentCourseName = course.name.replace(/[-\s]/g, "").toLowerCase();
      return storedCourseName === currentCourseName && enrollment.enrolled.trim().toUpperCase() === "YES";
    })
  );

  // Apply search filter to enrolled courses
  const filteredCourses = enrolledCourses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle enroll button click
  const handleEnrollClick = (courseName) => {
    const isAlreadyEnrolled = enrollments.some((enrollment) => {
      const storedCourseName = enrollment.coursename.replace(/[-\s]/g, "").toLowerCase();
      return storedCourseName === courseName.replace(/[-\s]/g, "").toLowerCase() &&
             enrollment.enrolled.trim().toUpperCase() === "YES";
    });

    if (isAlreadyEnrolled) {
      alert("You are already enrolled in this course.");
    } else {
      // Implement the enroll logic here (if needed)
      console.log(`Enrolling in ${courseName}`);
    }
  };

  return (
    <div className="course-menu">
      <div className="center">
        <div className="search-profile-container">
          <div className="searchbar-main">
            <input
              type="text"
              placeholder="Search enrolled courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
              style={{height:"45px",width:"400px"}}
            />
          </div>
        </div>
      </div>

      <div className="course-grid">
        {loading ? (
          <p>Loading courses...</p>
        ) : filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => {
            const isEnrolled = enrollments.some((enrollment) => {
              const storedCourseName = enrollment.coursename.replace(/[-\s]/g, "").toLowerCase();
              return storedCourseName === course.name.replace(/[-\s]/g, "").toLowerCase() &&
                     enrollment.enrolled.trim().toUpperCase() === "YES";
            });

            return (
              <div key={index} className="course-card">
                <img
                  src={getImageForCourse(course.name)}
                  alt={`${course.name} Course`}
                  className="course-image"
                />
                <h2>{course.name}</h2>
                <NavLink
                  to={`${course.link}/${uid}`}
                  className="btn22"
                  style={{ marginRight: "3px",borderRadius:"5px",fontSize:"13px" }}
                >
                  {course.name}
                </NavLink>
                <button
                  className="btn22"
                  style={{
                    marginLeft: "3px",
                    backgroundColor: isEnrolled ? "green" : "blue",
                    cursor: isEnrolled ? "not-allowed" : "pointer",
                    fontSize:"13px"
                  }}
                  onClick={() => handleEnrollClick(course.name)}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? "Enrolled" : "Enroll"}
                </button>
              </div>
            );
          })
        ) : (
          <p>No enrolled courses found</p>
        )}
      </div>
    </div>
  );
};

export default MyCourse;
