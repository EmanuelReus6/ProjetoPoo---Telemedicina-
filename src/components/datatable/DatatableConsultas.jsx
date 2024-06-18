import './Datatable.scss';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';

const columns = [
  { field: 'codigo', headerName: 'Código', width: 100 },
  { field: 'codmedico', headerName: 'Médico', width: 130 },
  { field: 'codpaciente', headerName: 'Paciente', width: 130 },
  { field: 'descricao', headerName: 'Descrição', width: 200 },
  { field: 'horariodata', headerName: 'Data da Consulta', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
];

const DatatableConsultas = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/consultas');
        const consultasComId = response.data.consultas.map(consulta => ({
          ...consulta,
          id: consulta.codigo,
          horariodata: new Date(consulta.horariodata).toLocaleDateString('pt-BR')
        }));
        setConsultas(consultasComId);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    };

    fetchConsultas();
  }, []);

  const handleDeleteConsulta = async (codigo) => {
    if (window.confirm('Tem certeza que deseja excluir esta consulta?')) {
      try {
        const response = await axios.delete('http://localhost:3000/consultas', {
          data: { codigo }
        });
        if (response.status === 200) {
          setConsultas(consultas.filter(consulta => consulta.codigo !== codigo));
          alert('Consulta excluída com sucesso!');
        } else {
          throw new Error('Erro ao excluir consulta');
        }
      } catch (error) {
        console.error('Erro ao excluir consulta:', error);
      }
    }
  };

  const actionColumn = {
    field: 'action',
    headerName: 'Ação',
    width: 200,
    renderCell: (params) => {
      const consulta = params.row;
      return (
        <div className="cellAction">
          <Link to={`/consultas/newconsultas/${params.row.codigo}`} style={{ textDecoration: 'none' }} className="link">
            <div className="editarButton">Editar</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDeleteConsulta(consulta.codigo)}>Excluir</div>
        </div>
      );
    }
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Consultas
        <Link to="/consultas/newconsultas" style={{ textDecoration: 'none' }} className="link">
          Adicionar Nova
        </Link>
      </div>
      <DataGrid
        rows={consultas}
        columns={[...columns, actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableConsultas;
