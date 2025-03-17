// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8088/api/login', { username, password })
      .then((response) => {
        setRole(response.data.role);
        localStorage.setItem('user', JSON.stringify(response.data));
        if (response.data.role === 'Admin') {
          window.location.href = '/admin-dashboard';
        } else {
          window.location.href = '/customer-dashboard';
        }
      })
      .catch((error) => {
        alert('Login failed. Please check your credentials.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
