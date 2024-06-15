import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get('/usuario'); // URL relativa
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>senha:</label>
          <input
            type="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
