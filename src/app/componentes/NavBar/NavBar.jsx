import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/artadoLogo.png";
// css global
import { NavBarStyle, NavBarStyleTwo } from "./NavBarStyle";
import { useAuth } from "../../context/authContext";

export function NavBar() {
  return (
    <NavBarStyle className="NavBar">
      <div className="navContent">
        <NavLink to="/">
          <img className="logoImg" src={Logo} alt="" />
        </NavLink>
      </div>
    </NavBarStyle>
  );
}

export function NavBarTwo() {
  const {user, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    await logout()
    navigate('/')
  }

  return (
    <NavBarStyleTwo className="navTwo">
      <div className="linkContainer">
        <NavLink to="/proyectos" className="proLink">
          Proyectos
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="profileContainer">
        <NavLink to="/perfil" className="profileLink">
          <img
            className="profileImg"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </NavLink>
      </div>
    </NavBarStyleTwo>
  );
}
