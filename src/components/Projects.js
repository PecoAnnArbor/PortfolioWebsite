import "../css/Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: 
      <>
        Healthy <br /> (MHacks 2024)
      </>,
      description: "An offline app that uses computer vision to identify and log medicine names.",
      techStack: ["SwiftUI", "CoreML", "Catepillar Challenge Award"],
    },
    {
      title: "Instagram Clone",
      description: "An Instagram-like web application using JavaScript, React, and Flask.",
      techStack: ["HTML/CSS/JS", "React", "Flask", "AWS", "SQLite", "RestfulAPIs"],
    },
    {
      title: "Scaleable Search Engine",
      description: "Built on TF-IDF and PageRank algorithms on MapReduce pipeline.",
      techStack: ["HTML/CSS/JS", "React", "MongoDB", "AWS", "RestfulAPIs"],
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
