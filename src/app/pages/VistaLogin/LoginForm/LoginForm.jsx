import React, { useState } from "react";
import { LoginFormStyle } from "./LoginFormStyle";

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login/signup logic here
    console.log("Form submitted");
  };

  return (
    <LoginFormStyle>
      <div className="formContainer">
        <h1>{isLogin ? "Login" : "Signup"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="userInput">
            <label htmlFor="user">Username:</label>
            <input
              type="user"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="passInput">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="submitB" type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="extraBSection">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button className="modeB" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </LoginFormStyle>
  );
}
