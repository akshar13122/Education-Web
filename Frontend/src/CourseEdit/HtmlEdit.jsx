import React, { useState, useEffect } from "react";
import "./HtmlEdit.css";

const HtmlEdit = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ heading: "", content: "", link: "" });
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({ heading: "", content: "", link: "" });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/html-courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value.trim() === "" ? "This field is required" : "" }));
  };

  const isValidURL = (url) => {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*\/?$/;
    return urlPattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
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

    // Validate URL
    if (!isValidURL(course.link)) {
      setErrors((prev) => ({ ...prev, link: "Please enter a valid URL (e.g., https://example.com)" }));
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/html-courses${editId ? `/${editId}` : ""}`, {
        method: editId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        alert(`Course ${editId ? "updated" : "added"} successfully!`);
        fetchCourses();
        setCourse({ heading: "", content: "", link: "" });
        setEditId(null);
        setErrors({ heading: "", content: "", link: "" });
      }
    } catch (error) {
      console.error(`Error ${editId ? "updating" : "adding"} course:`, error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/html-courses/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Course deleted successfully!");
        fetchCourses();
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="htmlmaincr">
      <div className="secmain">
        <h2>{editId ? "Edit Course" : "Add New Content"}</h2>
        <form onSubmit={handleSubmit}>
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

export default HtmlEdit;
