import React, { useState, useEffect } from "react";
import "../css/Home.css";
import brushStroke from "../brushStroke.png";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const contentElement = document.querySelector(".content");

    const handleScroll = () => {
      const scrollPosition = contentElement.scrollTop;
      const windowHeight = contentElement.offsetHeight;

      if (scrollPosition > windowHeight * 0.05) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    contentElement.addEventListener("scroll", handleScroll);

    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-container">
        {/* SVG overlay */}
        <img src={brushStroke} alt="Brush Stroke Overlay" className="overlay-svg" />
        
        <div>
          <h1 className="name">Ian Zhang</h1>
          {/* data-aos="fade-up" to fade up*/}
          <p className="description" data-aos-delay="200">
            Developer passionate about <b>interactive</b> and <b>dynamic</b> applications with expertise in Python, C++, and JavaScript.
            Currently working with <b>Qt</b> and <b>React</b> to create user-friendly, visually engaging solutions.
            <br /><br />
            Welcome to my website
          </p>
        </div>
        <span className={`description scroll-down-button ${isScrolled ? "fade-out" : ""}`}>
        ↓
        </span>
      </div>
    </>
  );
}

export default Home;
