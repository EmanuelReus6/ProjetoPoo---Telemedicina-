// src/LoginPage.js
import React from 'react';
import './login.css'; // Importando o arquivo de estilo

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src="https://img.freepik.com/premium-photo/attractive-young-doctor_160672-2739.jpg?w=360" alt="Login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
