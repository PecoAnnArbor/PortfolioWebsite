import React, { useEffect, useRef } from "react";
import "../css/Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectHeaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("out-of-view");
          } else {
            entry.target.classList.add("out-of-view");
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (projectHeaderRef.current) {
      observer.observe(projectHeaderRef.current);
    }
  
    return () => {
      if (projectHeaderRef.current) {
        observer.unobserve(projectHeaderRef.current);
      }
    };
  }, []);
  

  const text = "PROJECTS";

  const projects = [
    {
      name: "Personal Website",
      image: <img src="project1.png" alt="Personal Website" />,
      description: "Personal website written using React."
    },
    {
      name: "Shoe and Sandal Detection",
      image: <img src="project2.png" alt="Shoe and Sandal Detection" />,
      description: "Using CNNS to detect shoes and sandals."
    },
    // Add more projects as needed
  ];
  
  return (
    <>
      <div className="Project-header" ref={projectHeaderRef}>
        <a href="https://github.com/PecoAnnArbor" target="_blank" rel="noopener noreferrer">

          <h1>
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="wave"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.5em" : "auto", // Adjusts width for space
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </a>
      </div>

      {/* <div className="Project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
          />
        ))}
      </div> */}
    </>
  );
}

export default Projects;
