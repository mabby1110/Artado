import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

// css global
import { NavBarStyle } from "../Ye"

export function NavBar() {
    return (
        <NavBarStyle className="NavBar">
            <NavLink to="/proyectos">Proyectos</NavLink>
            <NavLink to="/">ARTADO</NavLink>
            <NavLink to="/perfil">Perfil</NavLink>
        </NavBarStyle>
    );
}