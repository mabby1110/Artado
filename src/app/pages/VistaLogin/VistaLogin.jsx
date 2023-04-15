import React, { useState } from 'react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login/signup logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">user:</label>
        <input type="user" id="user" value={user} onChange={(e) => setUser(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>

      <p>
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Signup' : 'Login'}</button>
      </p>
    </div>
  );
};