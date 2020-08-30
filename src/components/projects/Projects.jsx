import React from "react";
import "./project.css";

function Projects(props) {
  return (
    <>
      <div
        style={{ backgroundColor: props.color, color: props.fontColor }}
        className="projects-container"
        id="project"
      >
        <h1 className="project-title">Project</h1>
      </div>
    </>
  );
}

export default Projects;
