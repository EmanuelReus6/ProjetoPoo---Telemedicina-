import React, { useState } from 'react';
import axios from 'axios';
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');

  async function postData(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    try {
      const response = await axios.post('http://localhost:3000/clientes', {
        nome: name,
        senha: senha,
        email: email,
        papel: papel
      });
      alert("Usuário criado com sucesso!");
      setSenha('');
      setName('');
      setEmail('');
      setPapel('');
    } catch (e) {
      console.log(e);
    }
  }

  async function putData() {
    try {
      const response = await axios.put('http://localhost:3000/clientes', {
        codigo: codigo,
        nome: name,
        senha: senha,
        email: email,
        papel: papel
      });
      alert("Usuário criado com sucesso!");
      setCodigo('');
      setSenha('');
      setName('');
      setEmail('');
      setPapel('');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top"><h1>Adicionar Novo Usuário</h1></div>
        <div className="bottom">
          <div className="left">
            <img src="https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?w=360&t=st=1717963692~exp=1717964292~hmac=bf4df23bcfa9b662b2fcf33c88383299e39b8772a090f7fe5a70984b616bf870" alt="" className='img' />
          </div>
          <div className="right">
            <form onSubmit={postData}>
              <div className="formInput">
                <label>Codigo</label>
                <input 
                  type='text' 
                  placeholder='Codigo (Apenas para realizar uma alteração)'
                  value={codigo} 
                  onChange={e => setCodigo(e.target.value)} 
                />
              </div>
              <div className="formInput">
                <label>Nome</label>
                <input 
                  type='text' 
                  placeholder='Nome'
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input 
                  type='text' 
                  placeholder='Email'
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
              </div>
              <div className="formInput">
                <label>Senha</label>
                <input 
                  type='text'
                  placeholder='Senha'
                  value={senha} 
                  onChange={e => setSenha(e.target.value)} 
                />
              </div>
              <div className="formInput">
                <label>Papel</label>
                <input 
                  type='text' 
                  placeholder='Papel'
                  value={papel} 
                  onChange={e => setPapel(e.target.value)} 
                />
              </div>
              <button type="submit">Novo</button>
              <button onClick={putData}>Salvar Alterações</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
