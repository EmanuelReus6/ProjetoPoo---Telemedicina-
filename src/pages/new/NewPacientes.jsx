import React, { useState } from 'react';
import axios from 'axios';
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const NewPacientes = () => {

  const [codigo, setCodigo] = useState('');
  const [codusuario, setCodusuario] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [endereco, setEndereco] = useState('');

  async function postData(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    try {
      const response = await axios.post('http://localhost:3000/pacientes', {
        codusuario: codusuario,
        nome: nome,
        nascimento: nascimento,
        genero: genero,
        endereco: endereco
      });
      alert("Paciente criado com sucesso!");
      setCodusuario('');
      setNome('');
      setNascimento('');
      setGenero('');
      setEndereco('');
    } catch (e) {
      console.log(e);
    }
  }

  async function putData() {
    try {
      const response = await axios.put('http://localhost:3000/pacientes', {
        codigo: codigo,
        codusuario: codusuario,
        nome: nome,
        nascimento: nascimento,
        genero: genero,
        endereco: endereco
      });
      alert("Paciente alterado com sucesso!");
      setCodigo('');
      setCodusuario('');
      setNome('');
      setNascimento('');
      setGenero('');
      setEndereco('');
    } catch (e) {
      console.log(e);
    }
  }




  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>Adicionar Novos Pacientes</h1></div>
        <div className="bottom">
        <div className="left">
          <img src="https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?w=360&t=st=1717963692~exp=1717964292~hmac=bf4df23bcfa9b662b2fcf33c88383299e39b8772a090f7fe5a70984b616bf870" alt="" className='img'/>
          </div>
          <div className="right">
            <form onSubmit={postData}>
              <div className="formInput">
                <label>Código</label>
                <input type='text' placeholder='Código (apenas para realizar uma alteração)' value={codigo} onChange={e => setCodigo(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Código Usuário</label>
                <input type='text' placeholder='Código Usuário' value={codusuario} onChange={e => setCodusuario(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Nome</label>
                <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Nascimento</label>
                <input type='text' placeholder='' value={nascimento} onChange={e => setNascimento(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Gênero</label>
                <input type='text' placeholder='Gênero' value={genero} onChange={e => setGenero(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Endereço</label>
                <input type='text' placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)}></input>
              </div>
              <button type="submit">Novo</button>
              <button onClick={putData}>Salvar Alterações</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPacientes
