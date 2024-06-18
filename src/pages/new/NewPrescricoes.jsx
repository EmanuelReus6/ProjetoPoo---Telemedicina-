import { useState } from 'react';
import axios from 'axios';
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useNavigate, useParams } from 'react-router-dom';

const NewPrescricoes = () => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');
  const [codconsulta, setCodconsulta] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [datainicio, setDatainicio] = useState('');
  const [datafim, setDatafim] = useState('');
  const {userId} = useParams();


  async function postData(event) {
    event.preventDefault(); 
    try {
      const payload = {
        codigo: userId,
        codconsulta: codconsulta,
        medicamento: medicamento,
        dosagem: dosagem,
        frequencia: frequencia,
        datainicio: datainicio,
        datafim: datafim
      };

      
      if (userId) {
        await axios.put(`http://localhost:3000/prescricoes`, payload);
        alert("Prescricoes atualizado com sucesso!");
      } else {
        await axios.post(`http://localhost:3000/prescricoes`, payload);
        alert("Prescricoes criado com sucesso!");
      }
      navigate("/prescricoes")
    } catch (error) {
      console.error('Erro ao salvar prescricoes:', error);
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
          <img src="https://img.freepik.com/fotos-premium/medico-feminino-escrita-prescricoes-tabela_13339-264312.jpg?w=740" alt="" className='img'/>
          </div>
          <div className="right">
            <form onSubmit={postData}>
              <div className="formInput">
                {userId && (
                <div className="formInput">
                  <label>Código</label>
                  <input
                    type='text'
                    placeholder='Código'
                    value={userId}
                    readOnly 
                  />
                </div>
              )}
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
                <input type='text' placeholder='2024-06-13' value={datainicio} onChange={e => setDatainicio(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Data de fim</label>
                <input type='text' placeholder='2024-06-13' value={datafim} onChange={e => setDatafim(e.target.value)}></input>
              </div>
              <button type="submit">
                {userId ? 'Salvar Prescrições' : 'Adicionar Prescrições'}
              </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPrescricoes
