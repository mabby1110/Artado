import React, { useState } from "react";
import { LoginFormStyle } from "./LoginFormStyle";
import { useAuth } from "../../../context/authContext"
import { NavLink, useNavigate } from "react-router-dom";

export function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState()
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <LoginFormStyle>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="email">email:</label>
          <input 
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <button 
            className="modeB"
            type="submit"
          > Login </button>

        </form>
        {error && <p>{error}</p>}
        <div className="extraBSection">
          <NavLink to="/register">
            <p>Don't have an account? Register</p>
          </NavLink>
        </div>
      </div>
    </LoginFormStyle>
  );
}
