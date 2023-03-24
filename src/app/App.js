// componente principal
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { Home } from './pages/VistaHome'
import { Perfil } from './pages/VistaPerfil'
import { Proyectos } from './pages/VistaProyectos'

import { NavBar } from "./componentes/NavBar"
import  SocialBar  from "./componentes/SocialBar/SocialBar"
import ProjectBar from "./componentes/ProjectBar/ProjectBar"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ProjectBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
      </Routes>
      <SocialBar/>
    </BrowserRouter>
  )
}
