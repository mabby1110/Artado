import React, { useState } from "react";
import { LoginFormStyle } from "./LoginFormStyle";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <LoginFormStyle>
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="userInput">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="passInput">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <button className="submitB" type="submit">
            Login
          </button>
        </form>
        {error && <p>{error}</p>}
        <div className="extraBSection">
          <p>
            "Don't have an account?
            <NavLink to="/register">
              <button className="modeB">Signup</button>
            </NavLink>
          </p>
        </div>
      </div>
    </LoginFormStyle>
  );
}
