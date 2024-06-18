import { useState, useEffect } from 'react';
import axios from 'axios';
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useParams } from 'react-router-dom';

const NewMedicos = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [codigo, setCodigo] = useState('');
  const [codusuario, setCodusuario] = useState('');
  const [nome, setNome] = useState('');
  const [especializacao, setEspecializacao] = useState('');
  const [afiliacaohospitalar, setAfiliacaohospitalar] = useState('');

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3000/medicos/${userId}`)
        .then(response => response.json())
        .then(data => {
          setCodigo(data.codigo.toString());
          setCodusuario(data.codusuario);
          setNome(data.nome);
          setEspecializacao(data.especializacao);
          setAfiliacaohospitalar(data.afiliacaohospitalar);
        })
        .catch(error => {
          console.error('Erro ao buscar médico:', error);
        });
    }
  }, [userId]);

  async function postData(event) {
    event.preventDefault(); 
    try {
      const payload = {
        codigo: userId,
        codusuario: codusuario,
        nome: nome,
        especializacao: especializacao,
        afiliacaohospitalar: afiliacaohospitalar
      };

      
      if (userId) {
        await axios.put(`http://localhost:3000/medicos`, payload);
        alert("Médico atualizado com sucesso!");
      } else {
        await axios.post(`http://localhost:3000/medicos`, payload);
        alert("Médico criado com sucesso!");
      }

      setCodigo('');
      setCodusuario('');
      setNome('');
      setEspecializacao('');
      setAfiliacaohospitalar('');
      navigate("/medicos")
    } catch (error) {
      console.error('Erro ao salvar médico:', error);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top"><h1>{userId ? 'Editar Médico' : 'Adicionar Novo Médico'}</h1></div>
        <div className="bottom">
          <div className="left">
            <img src="https://img.freepik.com/fotos-gratis/medico-de-tiro-medio-verificando-raios-x_23-2149308285.jpg?t=st=1718724208~exp=1718727808~hmac=1cecf905c626a12a799ca785c1f90040fb1bebddec3ebd4aa1808627dc57a7fc&w=360" alt="" className='img'/>
          </div>
          <div className="right">
            <form onSubmit={postData}>
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
              <div className="formInput">
                <label>Código Usuário</label>
                <input
                  type='text'
                  placeholder='Código Usuário'
                  value={codusuario}
                  onChange={(e) => setCodusuario(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Nome</label>
                <input
                  type='text'
                  placeholder='Nome'
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Especialização</label>
                <input
                  type='text'
                  placeholder='Especialização'
                  value={especializacao}
                  onChange={(e) => setEspecializacao(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Afiliação Hospitalar</label>
                <input
                  type='text'
                  placeholder='Afiliação Hospitalar'
                  value={afiliacaohospitalar}
                  onChange={(e) => setAfiliacaohospitalar(e.target.value)}
                />
              </div>
              <button type="submit">
                {userId ? 'Salvar Alterações' : 'Adicionar Médico'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMedicos;
