import React from "react"
import { useState } from "react";
import { ProjectBarStyle } from "./ProjectBarStyle"
import { ProjectCard1, ProjectCard2 } from "./ProjectCard/ProjectCard"

export function ProjectBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  
  return (
    <ProjectBarStyle>
      <div className="profilePic">
        <img src="https://picsum.photos/200/300" alt="" className="userPic" />
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? '☰' : 'x'}
      </button>
      <div className={`barContent ${isSidebarOpen ? 'open' : ''}`}>
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
