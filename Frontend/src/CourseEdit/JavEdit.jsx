import React, { useState, useEffect } from "react";
import "./HtmlEdit.css";

const JavaEdit = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ heading: "", content: "", link: "" });
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({ heading: "", content: "", link: "" });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/java-courses");
      const data = await response.json();
      setCourses(data.length > 0 ? data : [{ heading: "Example Heading", content: "Example Content", link: "https://example.com" }]);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value.trim() === "" ? "This field is required" : "" }));
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(course).forEach((key) => {
      if (!course[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (!isValidURL(course.link)) {
      setErrors((prev) => ({ ...prev, link: "Please enter a valid URL (e.g., https://example.com)" }));
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/java-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (response.ok) {
        fetchCourses();
        setCourse({ heading: "", content: "", link: "" });
        setErrors({ heading: "", content: "", link: "" });
        alert("Course added successfully!");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="htmlmaincr">
      <div className="secmain">
        <h2>{editId ? "Edit Course" : "Add New Content"}</h2>
        <form onSubmit={handleAddCourse}>
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
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.heading}</td>
                  <td>{course.content}</td>
                  <td>
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      {course.link}
                    </a>
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

export default JavaEdit;
