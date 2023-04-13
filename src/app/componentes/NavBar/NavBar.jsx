import React from "react"
import { NavLink } from "react-router-dom"
// css global
import { NavBarStyle } from "./NavBarStyle"

export function NavBar() {
  return (
    <NavBarStyle className="NavBar">
      <div className="navContent">
        <NavLink to="/">ARTADO</NavLink>
      </div>
    </NavBarStyle>
  )
}
