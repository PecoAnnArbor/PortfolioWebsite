import React, { useState } from 'react';
import '../css/SocialSlider.css';

const SocialSlider = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`social-slider ${isExpanded ? 'expanded' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <a href="https://github.com/PecoAnnArbor" target="_blank" rel="noopener noreferrer">
        <button className="social-button">GH</button>
      </a>
      <a href="https://www.linkedin.com/in/ian-zhang-a31058249/" target="_blank" rel="noopener noreferrer">
        <button className="social-button">LI</button>
      </a>
      <a href="https://www.instagram.com/peco_storm/" target="_blank" rel="noopener noreferrer">
        <button className="social-button">IG</button>
      </a>
      <button className="main-button" disabled>+</button>
    </div>
  );
};

export default SocialSlider;
