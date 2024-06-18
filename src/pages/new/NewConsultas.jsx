import { useEffect, useState } from 'react';
import axios from 'axios';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';

const NewConsultas = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    codpaciente: '',
    codmedico: '',
    horariodata: '',
    status: '',
    descricao: ''
  });

  useEffect(() => {
    if (userId) {
      setFormData(prevState => ({
        ...prevState,
        codigo: userId
      }));
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userId) {
        await axios.put(`http://localhost:3000/consultas`, formData);
        alert('Consulta atualizada com sucesso!');
      } else {
        await axios.post('http://localhost:3000/consultas', formData);
        alert('Consulta criada com sucesso!');
      }
      navigate('/consultas');
    } catch (error) {
      console.error('Erro ao salvar consulta:', error);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{userId ? 'Editar Consulta' : 'Adicionar Nova Consulta'}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://img.freepik.com/fotos-gratis/casal-que-sofre-de-infertilidade_23-2149430773.jpg?t=st=1718724273~exp=1718727873~hmac=25117d89a88c3ceda6b4f5325c542450432752e9b4e629cb0dc7595be752e1f3&w=740"
              alt=""
              className="img"
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              {userId && (
                <div className="formInput">
                  <label>Código</label>
                  <input
                    type="text"
                    name="codigo"
                    value={formData.codigo}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              )}
              <div className="formInput">
                <label>Código Paciente</label>
                <input
                  type="text"
                  name="codpaciente"
                  placeholder="Código Paciente"
                  value={formData.codpaciente}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Código Médico</label>
                <input
                  type="text"
                  name="codmedico"
                  placeholder="Código Médico"
                  value={formData.codmedico}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Horário e Data</label>
                <input
                  type="text"
                  name="horariodata"
                  placeholder="2024-06-15"
                  value={formData.horariodata}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  placeholder="Status"
                  value={formData.status}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Descrição</label>
                <input
                  type="text"
                  name="descricao"
                  placeholder="Descrição"
                  value={formData.descricao}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">
                {userId ? 'Salvar Alterações' : 'Adicionar Consulta'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConsultas;
