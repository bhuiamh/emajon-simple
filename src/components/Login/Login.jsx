import React, { useState } from 'react';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Log in
          </button>
        </form>
        <div className="login-footer">
          <p>New to our site? Sign up here</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
