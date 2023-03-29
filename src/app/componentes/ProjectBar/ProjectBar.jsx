import React from "react"
import { ProjectBarStyle } from "./ProjectBarStyle"
import { ProjectCard1, ProjectCard2 } from "./ProjectCard/ProjectCard"

export function ProjectBar() {
  return (
    <ProjectBarStyle className="ProjectBar">
      <div className="profilePic">
        <img src="https://picsum.photos/200/300" alt="" className="userPic" />
      </div>
      <div className="barContent">
        <h2>Mis Proyectos</h2> 
        <div className="projectSection1">
          <ProjectCard1 />
          <ProjectCard1 />
          <ProjectCard1 /> 
          <ProjectCard1 />
        </div>
        <h2>Otros Proyectos</h2>
        <div className="projectSection2">
          <ProjectCard2 />
        </div>
      </div>
    </ProjectBarStyle>
  )
}
