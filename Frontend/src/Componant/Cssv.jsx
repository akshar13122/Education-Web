import React from 'react';
import htmlsample from '../video/htmlsample.mp4'; // Assuming this is the correct path to your video
import { NavLink } from 'react-router-dom';

export default function Htmlv() {
  return (
    <div className="htmlv-container">
      <p className="video-info">You will get brief knowledge about CSS from this course.</p>
      <video width="500" height="400" controls>
        <source src={htmlsample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="notes-container">
        <NavLink  className="notes">Notes</NavLink>
        <NavLink to="/FeedBackForm" className="notes">Feedback</NavLink>
      </div>

    </div>

  );
}