import React from "react"
import { useState } from "react"

import { SocialBarStyle } from "./SocialBarStyle"
import SocialCard from "./SocialCard/SocialCard"

export function SocialBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <SocialBarStyle>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? '☰' : 'x'}
      </button>
      <div className={`socialBarContent ${isSidebarOpen ? 'open' : ''}`}>
        <div className="titleSection">
          <h2>Usuarios destacados</h2>
        </div>
        <div className="cardSection">
          <h5>Roles</h5> 
          <div className="cards">
            <SocialCard />
            <SocialCard /> 
            <SocialCard />
          </div>
        </div>
      </div>
    </SocialBarStyle>
  )
}
