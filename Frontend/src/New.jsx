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

const CourseMenu = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const uid = user ? user.id : null;

  console.log("User ID:", uid);

  useEffect(() => {
    // Function to check if 30 minutes have passed
    const checkLoginExpiration = () => {
      const loginTime = localStorage.getItem("loginTime");
      if (loginTime) {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - parseInt(loginTime, 10)) / (1000 * 60); // Convert to minutes
        if (elapsedTime >= 30) { // 30 minutes
          localStorage.clear(); // Clear all localStorage data
          window.location.reload(); // Refresh the page
        }
      }
    };
  
    if (uid) {
      // Store login time if not already stored
      if (!localStorage.getItem("loginTime")) {
        localStorage.setItem("loginTime", Date.now().toString());
      }
  
      // Check expiration every minute
      const interval = setInterval(checkLoginExpiration, 60 * 1000);
  
      return () => clearInterval(interval);
    }
  }, [uid]);
  
  

  useEffect(() => {
    const fetchEnrollments = async () => {
      // if (!uid) return;
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

    if (uid) {
      const hasReloaded = localStorage.getItem("hasReloaded");
      if (!hasReloaded) {
        localStorage.setItem("hasReloaded", "true");
        window.location.reload();
      }
    }

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
    { name: "Mongo", link: "/mongodbv/9" },
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
      case "Mongo": return mongo3;
      default: return "";
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEnrollClick = (course) => {
    if (!uid) {
      alert("Please log in first to enroll.");
      return;
    }

    const enrollPath = `/${course.name.toLowerCase().replace(/\s+/g, "")}enroll/${course.link.split("/").pop()}/${uid}`;
    const isEnrolled = enrollments.some((enrollment) => {
      const storedCourseName = enrollment.coursename.replace(/[-\s]/g, "").toLowerCase();
      const currentCourseName = course.name.replace(/[-\s]/g, "").toLowerCase();
      return storedCourseName === currentCourseName && enrollment.enrolled.trim().toUpperCase() === "YES";
    });

    if (isEnrolled) {
      alert("You are already enrolled.");
    } else {
      navigate(enrollPath);
    }
  };

  return (
    <div className="course-menu">
      <div className="center">
        <div className="search-profile-container">
          <div className="searchbar-main">
            <input
            style={{height:"45px",width:"400px"}}
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
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
              const currentCourseName = course.name.replace(/[-\s]/g, "").toLowerCase();
              return storedCourseName === currentCourseName && enrollment.enrolled.trim().toUpperCase() === "YES";
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
                  to={isEnrolled ? `${course.link}/${uid}` : "#"}
                  className="btn22"
                  style={{ marginRight: "3px" , borderRadius:"5px" ,fontWeight:"550",fontSize:"13px"}}
                  onClick={(event) => {
                    if (!isEnrolled) {
                      event.preventDefault();
                      alert("Please enroll first.");
                    }
                  }}
                >
                  {course.name}
                </NavLink>
                <button
                  className="btn22"
                  style={{
                    marginLeft: "3px",
                    cursor: isEnrolled ? "default" : "pointer",
                    backgroundColor: isEnrolled ? "green" : "transparent",
                    fontSize:"13px"
                  }}
                  onClick={() => handleEnrollClick(course)}
                >
                  {isEnrolled ? "Enrolled" : "Enroll"}
                </button>
              </div>
            );
          })
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default CourseMenu;
