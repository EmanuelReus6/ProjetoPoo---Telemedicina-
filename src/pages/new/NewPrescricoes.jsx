import React, { useState } from 'react';
import axios from 'axios';
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const NewPrescricoes = () => {

  const [codigo, setCodigo] = useState('');
  const [codconsulta, setCodconsulta] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [datainicio, setDatainicio] = useState('');
  const [datafim, setDatafim] = useState('');


  async function postData(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    try {
      const response = await axios.post('http://localhost:3000/prescricoes', {
        codconsulta: codconsulta,
        medicamento: medicamento,
        dosagem: dosagem,
        frequencia: frequencia,
        datainicio: datainicio,
        datafim: datafim
      });
      alert("Prescrição criada com sucesso!");
      setCodconsulta('');
      setMedicamento('');
      setDosagem('');
      setFrequencia('');
      setDatainicio('');
      setDatafim('');
    } catch (e) {
      console.log(e);
    }
  }

  async function putData() {
    try {
      const response = await axios.put('http://localhost:3000/prescricoes', {
        codigo: codigo,
        codconsulta: codconsulta,
        medicamento: medicamento,
        dosagem: dosagem,
        frequencia: frequencia,
        datainicio: datainicio,
        datafim: datafim
      });
      alert("Prescrição alterada com sucesso!");
      setCodigo('');
      setCodconsulta('');
      setMedicamento('');
      setDosagem('');
      setFrequencia('');
      setDatainicio('');
      setDatafim('');
    } catch (e) {
      console.log(e);
    }
  }







  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>Adicionar Novas Prescrições</h1></div>
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
                <label>Código Consulta</label>
                <input type='text' placeholder='Código Consulta' value={codconsulta} onChange={e => setCodconsulta(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Medicamento</label>
                <input type='text' placeholder='Medicamento' value={medicamento} onChange={e => setMedicamento(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Dosagem</label>
                <input type='text' placeholder='Dosagem' value={dosagem} onChange={e => setDosagem(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Frequência</label>
                <input type='text' placeholder='Frequência' value={frequencia} onChange={e => setFrequencia(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Data de início</label>
                <input type='text' placeholder='Data de início' value={datainicio} onChange={e => setDatainicio(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Data de fim</label>
                <input type='text' placeholder='Data de fim' value={datafim} onChange={e => setDatafim(e.target.value)}></input>
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

export default NewPrescricoes
