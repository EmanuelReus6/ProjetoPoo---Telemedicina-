import { useState } from 'react';
import axios from 'axios';
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useNavigate, useParams } from 'react-router-dom';

const NewPacientes = () => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');
  const [codusuario, setCodusuario] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [endereco, setEndereco] = useState('');
  const {userId} = useParams();

  async function postData(event) {
    event.preventDefault(); 
    try {
      const payload = {
        codigo:userId,
        codusuario: codusuario,
        nome: nome,
        nascimento: nascimento,
        genero: genero,
        endereco: endereco
      };

      
      if (userId) {
        await axios.put(`http://localhost:3000/pacientes`, payload);
        alert("Paciente atualizado com sucesso!");
      } else {
        await axios.post(`http://localhost:3000/pacientes`, payload);
        alert("Paciente criado com sucesso!");
      }
      navigate("/pacientes")
    } catch (error) {
      console.error('Erro ao salvar médico:', error);
    }
  }

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>{userId ? 'Editar Paciente' : 'Adicionar Novo Paciente'}</h1></div>
        <div className="bottom">
        <div className="left">
          <img src="https://img.freepik.com/fotos-gratis/feliz-pediatra-afro-americano-segurando-uma-garotinha-no-corredor-da-clinica-medica_637285-11208.jpg?t=st=1718724040~exp=1718727640~hmac=c2702f6a06b779d705927449926a67ef10370b39fae94f3ab27cc846d320dfed&w=740" alt="" className='img'/>
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
                <label>Código Usuário</label>
                <input type='text' placeholder='Código Usuário' value={codusuario} onChange={e => setCodusuario(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Nome</label>
                <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Nascimento</label>
                <input type='text' placeholder='2000-01-01' value={nascimento} onChange={e => setNascimento(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Gênero</label>
                <input type='text' placeholder='Gênero' value={genero} onChange={e => setGenero(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Endereço</label>
                <input type='text' placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)}></input>
              </div>
              <button type="submit">
                {userId ? 'Salvar Alterações' : 'Adicionar Paciente'}
              </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPacientes
