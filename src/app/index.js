import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ProtectedRoute} from "./protectedRoute"

// vistas
import { Home } from './pages/VistaHome/VistaHome'
import { Perfil } from './pages//VistaPerfil/VistaPerfil'
import { Proyectos } from "./pages/VistaProyectos/VistaProyectos"
import { Login } from "./pages/VistaLogin/VistaLogin"
import { Register } from "./pages/VistaRegister/VistaRegister"

const root = ReactDOM.createRoot(document.getElementById("root"));

// AuthProvider
import { AuthProvider } from "./context/authContext"

import App from './App'

root.render(
  <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <App>
                <Home/>
              </App>
            </ProtectedRoute>
          }/>
          <Route path='/proyectos' element={
            <ProtectedRoute>
              <App>
                <Proyectos/>
              </App>
            </ProtectedRoute>
          }/>
          <Route path='/perfil' element={
            <ProtectedRoute>
              <App>
                <Perfil/>
              </App>
            </ProtectedRoute>
          }/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  </AuthProvider>
);

