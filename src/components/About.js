import React from "react";
import "../css/About.css"; // Updated import path

function About() {
  return (
    <div className="home-container text-center d-flex align-items-center justify-content-center">
      <div>
        <h1 className="display-4" data-aos="fade-down">
          About Me
        </h1>
        <p className="lead" data-aos="fade-right">
          A passionate web developer with a love for creating interactive and
          dynamic web applications. With a strong foundation in JavaScript,
          React, and modern web technologies, I am dedicated to delivering
          user-friendly and visually appealing solutions. Welcome to my
          portfolio!
        </p>
      </div>
    </div>
  );
}

export default About;
