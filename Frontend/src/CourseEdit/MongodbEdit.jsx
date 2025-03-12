import React, { useState, useEffect } from 'react';
import './HtmlEdit.css'; // Make sure you have the styles in a separate CSS file

const MongodbEdit = () => {
  const [course, setCourse] = useState({
    title: '',
    content: ''
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch course data from the backend when component mounts
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-course/1'); // Assuming the ID is 1
        const data = await response.json();
        setCourse({
          title: data.title,
          content: data.content
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value
    }));
  };

  // Handle form submission to update course
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/update-course/9', { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert('Failed to update the course');
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="htmlmaincr">
           <div className='htmlcrmain2'>
      <h1 className="course-title2">{course.title}</h1>
      <p className="course-content2">{course.content}</p>

      <h2>Edit Mongo-Db Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            value={course.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
    </div>
  );
};

export default MongodbEdit;
