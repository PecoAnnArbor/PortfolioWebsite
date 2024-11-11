import React from "react"
import "../css/ProjectCard.css"; // Updated import path


function ProjectCard(props) {
    return(
        <div className="description">
            <h4>{props.name}</h4>
            {props.image}
            <br></br>
            {props.description}
        </div>
    )
}

export default ProjectCard;
