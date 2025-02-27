import React from 'react';
import htmlsample from '../video/htmlsample.mp4'; // Assuming this is the correct path to your video
import { NavLink } from 'react-router-dom';
import "./Htmlv.css";

export default function Htmlv() {
  const handleIntroductionClick = () => {
    window.open("https://www.w3schools.com/html/html_intro.asp", "_blank");
  };

  return (
    <div className="htmlv-container">
      {/* <video width="500" height="400" controls>
        <source src={htmlsample} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className='ApiSec'>
        <p onClick={handleIntroductionClick} className="clickable-text">Introduction</p>
        <a href='http://www.nematrian.com/HTMLTutorialGettingStarted'>get started</a>
      </div>
      <div className="notes-container">
        {/* For external link, use <a> tag */}
        <NavLink  className="notes">Notes</NavLink>
        <NavLink to="/FeedBackForm" className="notes">
          Feedback
        </NavLink>
      </div>
    </div>
  );
}
