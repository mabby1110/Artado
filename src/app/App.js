// componente principal
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavLink } from "react-router-dom"

// AuthProvider
import { AuthProvider } from "./context/authContext"

// vistas
import { Home } from './pages/VistaHome/VistaHome'
import { Perfil } from './pages//VistaPerfil/VistaPerfil'
import { Proyectos } from "./pages/VistaProyectos/VistaProyectos"
import { Login } from "./pages/VistaLogin/VistaLogin"
import { Register } from "./pages/VistaRegister/VistaRegister"

// componentes
import { NavBar } from "./componentes/NavBar/NavBar"
import { SearchBar } from "./componentes/SearchBar/SearchBar"
import { ProjectBar } from "./componentes/ProjectBar/ProjectBar"
import { SocialBar } from "./componentes/SocialBar/SocialBar"

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <AuthProvider>
          <NavBar/>
          <SearchBar/>
          <ProjectBar/>
          <div>
            <NavLink to="/proyectos">Proyectos</NavLink>
            <NavLink to="/perfil">Perfil</NavLink>
          </div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/perfil" element={<Perfil/>} />
              <Route path="/proyectos" element={<Proyectos/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
          </Routes>
          <SocialBar/>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}
