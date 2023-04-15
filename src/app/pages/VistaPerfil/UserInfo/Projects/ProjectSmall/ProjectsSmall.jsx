import React from "react";
import { ProjectsSmallStyle } from "./ProjectsSmallStyle";

const ProjectsSmall = () => {
  return (
    <ProjectsSmallStyle>
      <div className="projectSection">
        <li>
          <div className="imgContainer">
            <img
              src="https://picsum.photos/300"
              alt=""
              className="projectImg"
            />
            <div className="hoverSection">
              <p>Ver proyecto</p>
            </div>
          </div>
          <h5>Nombre proyecto</h5>
        </li>
      </div>
    </ProjectsSmallStyle>
  );
};

export default ProjectsSmall;
