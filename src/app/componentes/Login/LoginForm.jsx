import React, { useState } from "react";
import { LoginStyle } from "./LoginStyle";

export const LoginForm = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    return (
        <LoginStyle>
            <form>
                <label>Usuario:</label>
                <input type="email" name="email"></input>
                <br/>
                <label>Password:</label>
                <input type="password" name="password"></input>        
            </form>
        </LoginStyle>
    );
  };