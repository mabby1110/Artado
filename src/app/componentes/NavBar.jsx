import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

export function NavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/proyectos">Proyectos</NavLink></li>
                <li><NavLink to="/">ARTADO</NavLink></li>
                <li><NavLink to="/perfil">Perfil</NavLink></li>
            </ul>
        </nav>
    );
}