// componente principal
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavLink } from "react-router-dom"

// vistas
import { Home } from './pages/VistaHome/VistaHome'
import { Perfil } from './pages//VistaPerfil/VistaPerfil'
import { Proyectos } from "./pages/VistaProyectos/VistaProyectos"
import { Login } from "./pages/VistaLogin/VistaLogin"
import { Register } from "./pages/VistaRegister/VistaRegister"

// componentes
import { NavBar, NavBarTwo } from "./componentes/NavBar/NavBar"
import { SearchBar } from "./componentes/SearchBar/SearchBar"
import { ProjectBar } from "./componentes/ProjectBar/ProjectBar"
import { SocialBar } from "./componentes/SocialBar/SocialBar"
import { useAuth } from "./context/authContext"

export default function App() {
  const {user} = useAuth()

  return (
    <BrowserRouter>
      {
      user 
        ? <div className="main">
              <NavBar/>
              <SearchBar/>
              <ProjectBar/>
              <NavBarTwo/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="/perfil" element={<Perfil/>} />
                  <Route path="/proyectos" element={<Proyectos/>} />
              </Routes>
              <SocialBar/>
          </div>
        : <Login/>
      }
    </BrowserRouter>
  )
}
