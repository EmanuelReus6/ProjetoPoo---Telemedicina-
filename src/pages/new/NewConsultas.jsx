import React, { useState } from 'react'
import axios from 'axios';
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
//deixe aqui uma resposta: 
const NewConsultas = () => {
  const [codigo, setCodigo] = useState('');
  const [codpaciente, setCodpaciente] = useState('');
  const [codmedico, setCodmedico] = useState('');
  const [horariodata, setHorariodata] = useState('');
  const [status, setStatus] = useState('');
  const [descricao, setDescricao] = useState('');

  async function postData(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    try {
      const response = await axios.post('http://localhost:3000/consultas', {
        codpaciente: codpaciente,
        codmedico: codmedico,
        horariodata: horariodata,
        status: status,
        descricao: descricao
      });
      alert("Consulta criada com sucesso!");
      setCodpaciente('');
      setCodmedico('');
      setHorariodata('');
      setStatus('');
      setDescricao('');
    } catch (e) {
      console.log(e);
    }
  }

  async function putData() {
    try {
      const response = await axios.put('http://localhost:3000/consultas', {
        codigo: codigo,
        codpaciente: codpaciente,
        codmedico: codmedico,
        horariodata: horariodata,
        status: status,
        descricao: descricao
      });
      alert("Consulta criada com sucesso!");
      setCodigo('');
      setCodpaciente('');
      setCodmedico('');
      setHorariodata('');
      setStatus('');
      setDescricao('');
    } catch (e) {
      console.log(e);
    }
  }







  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>Adicionar Novas Consultas</h1></div>
        <div className="bottom">
        <div className="left">
          <img src="https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?w=360&t=st=1717963692~exp=1717964292~hmac=bf4df23bcfa9b662b2fcf33c88383299e39b8772a090f7fe5a70984b616bf870" alt="" className='img'/>
          </div>
          <div className="right">
            <form onSubmit={postData}>
              <div className="formInput">
                <label>Código</label>
                <input type='text' placeholder='Código (Apenas para realizar uma alteração)' value={codigo} onChange={e => setCodigo(e.target.value)} ></input>
              </div>                                                                            
              <div className="formInput">
                <label>Código Pacientes</label>
                <input type='text' placeholder='Código pacientes' value={codpaciente} onChange={e => setCodpaciente(e.target.value)} ></input>
              </div>
              <div className="formInput">
                <label>Código Médico</label>
                <input type='text' placeholder='Código Médico' value={codmedico} onChange={e => setCodmedico(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Horário e Data</label>
                <input type='text' placeholder='Horario' value={horariodata} onChange={e => setHorariodata(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Status</label>
                <input type='text' placeholder='Status' value={status} onChange={e => setStatus(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Descrição</label>
                <input type='text' placeholder='Descrição' value={descricao} onChange={e => setDescricao(e.target.value)}></input>
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

export default NewConsultas
