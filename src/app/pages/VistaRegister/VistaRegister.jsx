import { useState } from "react";
import { LoginFormStyle } from "../VistaLogin/LoginForm/LoginFormStyle";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <LoginFormStyle>
      <div className="formContainer">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="userInput">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.art"
              onChange={handleChange}
            />
          </div>
          <div className="passInput">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <button className="submitB" type="submit">
            Register
          </button>
        </form>
        {error && <p>{error}</p>}
        <div className="extraBSection">
          <p>
            Already have an account?
            <NavLink to="/login">
              <button className="modeB">Login</button>
            </NavLink>
          </p>
        </div>
      </div>
    </LoginFormStyle>
  );
}
