import React from 'react';
import htmlsample from '../video/htmlsample.mp4'; // Assuming this is the correct path to your video
import { NavLink } from 'react-router-dom';

export default function ReactJsv() {
  return (
    <div className="htmlv-container">
      <p className="video-info">You will get brief knowledge about Express-Js from this course.</p>
      <video width="500" height="400" controls>
        <source src={htmlsample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="notes-container">
        <NavLink to="/expressjsassignment" className="notes">Assignment</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>
    </div>
  );
}