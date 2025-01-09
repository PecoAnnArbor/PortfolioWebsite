import React from "react";
import "../css/ProjectCard.css";

function ProjectCard({ link, title, description, techStack }) {
  return (
    <a className="project-link" href={link}>
      <div className="project-card">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
