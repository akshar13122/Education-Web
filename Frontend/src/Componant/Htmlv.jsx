import React from 'react';
import htmlsample from '../video/htmlsample.mp4'; // Assuming this is the correct path to your video
import { NavLink } from 'react-router-dom';
import "./Htmlv.css";

export default function Htmlv() {
  const handleIntroductionClick = () => {
    window.open("http://www.nematrian.com/HTMLTutorialIntroduction", "_blank");
  };

  return (
    <div className="htmlv-container">
      {/* <video width="500" height="400" controls>
        <source src={htmlsample} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className='ApiSec'>
        <p onClick={handleIntroductionClick} className="clickable-text">Introduction</p>
      </div>
      <div className="notes-container">
        {/* For external link, use <a> tag */}
        <a href="http://www.nematrian.com/HTMLTutorialIntroduction" target="_blank" rel="noopener noreferrer" className="notes">
          Notes
        </a>
        <NavLink to="/FeedBackForm" className="notes">
          Feedback
        </NavLink>
      </div>
    </div>
  );
}
