import React, { useState, useEffect } from "react";
import "./HtmlEdit.css";

const MongodbEdit = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ heading: "", content: "", link: "" });
  const [editId, setEditId] = useState(null);
   const [errors, setErrors] = useState({ heading: "", content: "", link: "" });


  // Fetch courses from backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Validate URL
  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new course
  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!isValidURL(course.link)) {
      alert("Please enter a valid URL (e.g., https://example.com)");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (response.ok) {
        fetchCourses();
        setCourse({ heading: "", content: "", link: "" });
        alert("Course added successfully!");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Update a course
  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    if (!isValidURL(course.link)) {
      alert("Please enter a valid URL.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/courses/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (response.ok) {
        fetchCourses();
        setCourse({ heading: "", content: "", link: "" });
        setEditId(null);
        alert("Course updated successfully!");
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  // Delete a course
  const handleDeleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchCourses();
        alert("Course deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="htmlmaincr">
      <div className="secmain">
        <h2>{editId ? "Edit Course" : "Add New Content"}</h2>
        <form onSubmit={editId ? handleUpdateCourse : handleAddCourse}>
        <h3>Heading <span style={{ color: "red" }}>*</span></h3>
          <input type="text" name="heading" value={course.heading} onChange={handleChange} placeholder="Heading" required />
          {errors.heading && <p style={{ color: "red", fontSize: "14px" }}>{errors.heading}</p>}
          
          <h3>Content <span style={{ color: "red" }}>*</span></h3>
          <textarea name="content" value={course.content} onChange={handleChange} placeholder="Content" required />
          {errors.content && <p style={{ color: "red", fontSize: "14px" }}>{errors.content}</p>}
          
          <h3>Link <span style={{ color: "red" }}>*</span></h3>
          <input type="text" name="link" value={course.link} onChange={handleChange} placeholder="Enter a valid URL (e.g., https://example.com)" required />
          {errors.link && <p style={{ color: "red", fontSize: "14px" }}>{errors.link}</p>}
          <button type="submit">{editId ? "Update Course" : "Add Course"}</button>
        </form>

        <div className="margdiv">
          <h2>Content List</h2>
          <table border="1">
            <thead>
              <tr>
                <th>HEADING</th>
                <th>CONTENT</th>
                <th>LINK</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.heading}</td>
                  <td>{course.content}</td>
                  <td>
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      {course.link}
                    </a>
                  </td>
                  <td>
                    <button id="edt" onClick={() => { setCourse(course); setEditId(course.id); }}>Edit</button>
                    <button id="dlt" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MongodbEdit;
