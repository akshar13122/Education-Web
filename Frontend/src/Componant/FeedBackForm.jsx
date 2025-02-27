import React, { Component } from 'react';

class FeedBackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseFeedback: '',
      likeCourse: '',
      query: '',
      suggestions: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, such as sending the data to a backend
    console.log('Feedback Submitted:', this.state);
    // Optionally reset the form
    this.setState({
      courseFeedback: '',
      likeCourse: '',
      query: '',
      suggestions: ''
    });
  };

  render() {
    return (
      <div className="feedback-form">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="likeCourse"
              value={this.state.likeCourse}
              onChange={this.handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          {/* 1. How is the Course? */}
          <div className="form-group">
            <label>1. How is the Course?</label>
            <textarea
              name="courseFeedback"
              value={this.state.courseFeedback}
              onChange={this.handleChange}
              placeholder="Enter your feedback"
              rows="3"
              required
            />
          </div>

          {/* 2. Did you like the course? */}
          <div className="form-group">
            <label>2. Did you like the course? (Yes/No)</label>
            <input
              type="text"
              name="likeCourse"
              value={this.state.likeCourse}
              onChange={this.handleChange}
              placeholder="Yes or No"
              required
            />
          </div>

          {/* 3. Any Query? */}
          <div className="form-group">
            <label>3. Any Query?</label>
            <textarea
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Enter your query"
              rows="2"
            />
          </div>

          {/* 4. Any Suggestions? */}
          <div className="form-group">
            <label>4. Any Suggestions?</label>
            <textarea
              name="suggestions"
              value={this.state.suggestions}
              onChange={this.handleChange}
              placeholder="Enter your suggestions"
              rows="3"
            />
          </div>

          {/* Submit button */}
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    );
  }
}

export default FeedBackForm;

