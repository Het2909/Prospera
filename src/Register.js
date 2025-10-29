import React, { useState } from 'react';
import './Header.css';
import './Login and register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: integrate with registration API
    console.log('register', { name, email, password });
    alert('Register submitted (demo)');
  }

  return (
    <div className="auth-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} type="text" required />
        </label>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </label>
        <button className="btn-quote" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
