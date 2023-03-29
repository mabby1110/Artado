import React from "react";
import { NavLink } from "react-router-dom";
// css global
import { NavBarStyle } from "./NavBarStyle";

export function NavBar() {
  return (
    <NavBarStyle className="NavBar">
      <div className="navContent">
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/">ARTADO</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
      </div>
    </NavBarStyle>
  );
}
