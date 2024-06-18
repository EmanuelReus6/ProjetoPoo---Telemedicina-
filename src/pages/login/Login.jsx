import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Importa o arquivo CSS

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get('/users'); // URL relativa
      setData(response.data.usuarios);
      console.log(response.data);

      let userFound = false;
      for (const usuario of response.data.usuarios) {
        if (usuario.login === nome && usuario.senha === senha) {
          userFound = true;
          break;
        }
      }

      if (userFound) {
        navigate('/home');
        setNome('');
        setSenha('');
      } else {
        alert('Dados inválidos');
      }
    } catch (error) {
      console.error('Erro ao obter dados de usuário:', error);
    }
  }

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="https://static6.depositphotos.com/1032489/548/i/950/depositphotos_5480747-stock-photo-the-young-black-doctor.jpg" alt="Imagem de login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password" // Corrigi o tipo de input para senha
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
