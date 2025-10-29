import React, { useState } from 'react';
import './Login and register.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: integrate with auth API
    console.log('login', { email, password });
    alert('Login submitted (demo)');
  }

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </label>
        <button className="btn-quote" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
