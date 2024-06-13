import React from 'react'
import axios from 'axios';
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const NewMedicos = () => {

  const [codigo, setCodigo] = useState('');
  const [codusuario, setCodusuario] = useState('');
  const [nome, setNome] = useState('');
  const [especializacao, setEspecializacao] = useState('');
  const [afiliacaohospitalar, setAfiliacaohospitalar] = useState('');

  async function postData(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    try {
      const response = await axios.post('http://localhost:3000/medicos', {
        codusuario: codusuario,
        nome: nome,
        especializacao: especializacao,
        afiliacaohospitalar: afiliacaohospitalar
      });
      alert("Medico criado com sucesso!");
      setCodusuario('');
      setNome('');
      setEspecializacao('');
      setAfiliacaohospitalar('');
    } catch (e) {
      console.log(e);
    }
  }

  async function putData() {
    try {
      const response = await axios.put('http://localhost:3000/medicos', {
        codigo: codigo,
        codusuario: codusuario,
        nome: nome,
        especializacao: especializacao,
        afiliacaohospitalar: afiliacaohospitalar
      });
      alert("Medico atualizado com sucesso!");
      setCodigo('');
      setCodusuario('');
      setNome('');
      setEspecializacao('');
      setAfiliacaohospitalar('');
    } catch (e) {
      console.log(e);
    }
  }



  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>Adicionar Novos Médicos</h1></div>
        <div className="bottom">
        <div className="left">
          <img src="https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?w=360&t=st=1717963692~exp=1717964292~hmac=bf4df23bcfa9b662b2fcf33c88383299e39b8772a090f7fe5a70984b616bf870" alt="" className='img'/>
          </div>
          <div className="right">
            <form onSubmit={postData}>
              <div className="formInput">
                <label>Código</label>
                <input type='text' placeholder='Código (Apenas para realizar uma alteração)' value={codigo} onChange={e => setCodigo(e.target.value)}></input>
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
                <label>Especialização</label>
                <input type='text' placeholder='Especialização' value={especializacao} onChange={e => setEspecializacao(e.target.value)}></input>
              </div>
              <div className="formInput">
                <label>Afiliação Hospitalar</label>
                <input type='text' placeholder='Afiliação Hospitalar' value={afiliacaohospitalar} onChange={e => setAfiliacaohospitalar(e.target.value)}></input>
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

export default NewMedicos
