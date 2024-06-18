import "./Datatable.scss";
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Importar o Axios

const columns = [
  { field: 'codigo', headerName: 'Código', width: 100 },
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'especializacao', headerName: 'Especialização', width: 130 },
  { field: 'papel', headerName: 'Papel', width: 130 },
];

const DatatableMedicos = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/medicos')
      .then(response => {
        const medicosFormatted = response.data.medicos.map(medico => ({
          id: medico.codigo,
          codigo: medico.codigo,
          nome: medico.nome,
          especializacao: medico.especializacao,
          papel: medico['afiliacao hospitalar'],
        }));
        setMedicos(medicosFormatted);
      })
      .catch(error => {
        console.error('Erro ao buscar médicos:', error);
      });
  }, []);

  const handleDeleteMedicos = async (codigo) => {
    if (window.confirm('Tem certeza que deseja excluir esta consulta?')) {
      try {
        const response = await axios.delete('http://localhost:3000/medicos', {
          data: { codigo }
        });
        if (response.status === 200) {
          setMedicos(medicos.filter(consulta => consulta.codigo !== codigo));
          alert('Consulta excluída com sucesso!');
        } else {
          throw new Error('Erro ao excluir consulta');
        }
      } catch (error) {
        console.error('Erro ao excluir consulta:', error);
      }
    }
  };

  const actionColumn = [{
    field: "action", 
    headerName: "Ação", 
    width: 200, 
    renderCell: (params) => {
      const medico = params.row.codigo;
      return (
        <div className="cellAction">
          <Link to={`/medicos/newmedicos/${params.row.codigo}`} style={{ textDecoration: "none" }} className="link">
            <div className="editarButton">Editar</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDeleteMedicos(medico)}>Excluir</div>
        </div>
      );
    }
  }];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Lista de Médicos
        <Link to="/medicos/newmedicos" style={{ textDecoration: "none" }} className="link">
          Adicionar Novo
        </Link>
      </div>
      <DataGrid
        rows={medicos}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
}

export default DatatableMedicos;
