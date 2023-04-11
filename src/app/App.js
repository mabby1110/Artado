// componente principal
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// vistas
import { Home } from './pages/VistaHome/VistaHome'
import { Perfil } from './pages/VistaPerfil'
import { Proyectos } from './pages/VistaProyectos'
import { Login } from './pages/VistaLogin'

// componentes
import { NavBar } from "./componentes/NavBar/NavBar"
import { ProjectBar } from "./componentes/ProjectBar/ProjectBar"
import { SocialBar } from "./componentes/SocialBar/SocialBar"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="main">
        <ProjectBar/>
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
