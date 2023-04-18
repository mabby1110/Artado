// componente principal
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavLink } from "react-router-dom"

// vistas
import { Home } from './pages/VistaHome/VistaHome'
import { Perfil } from './pages//VistaPerfil/VistaPerfil'
import { Proyectos } from "./pages/VistaProyectos/VistaProyectos"
import { Login } from "./pages/VistaLogin/VistaLogin"

// componentes
import { NavBar, NavBarTwo } from "./componentes/NavBar/NavBar"
import { SearchBar } from "./componentes/SearchBar/SearchBar"
import { ProjectBar } from "./componentes/ProjectBar/ProjectBar"
import { SocialBar } from "./componentes/SocialBar/SocialBar"

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <NavBar/>
        <SearchBar/>
        <ProjectBar/>
        <NavBarTwo/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/perfil" element={<Perfil/>} />
            <Route path="/proyectos" element={<Proyectos/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        <SocialBar/>
      </div>
    </BrowserRouter>
  )
}
