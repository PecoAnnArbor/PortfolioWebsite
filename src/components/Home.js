import React, { useState, useEffect } from "react";
import "../css/Home.css";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust the condition based on when you want the button to fade out
      if (scrollPosition > windowHeight * 0.05) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-container text-center d-flex align-items-center justify-content-center">
        <div>
          <h1 className="name" data-aos="fade-up">
            Ian Zhang
          </h1>
          <p className="description" data-aos="fade-up" data-aos-delay="200">
            Developer passionate about <b>interactive</b> and <b>dynamic</b> applications with expertise in Python, C++, and JavaScript.
            Currently working with <b>Qt</b> and <b>React</b> to create user-friendly, visually engaging solutions.
            <br></br>
            <br></br>
            Welcome to my website!
          </p>
        </div>
      </div>
      <span className={`description scroll-down-button ${isScrolled ? "fade-out" : ""}`}>
      ↓
      </span>
    </>
  );
}

export default Home;
