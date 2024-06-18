import "./Datatable.scss";
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';

const columns = [
  { field: 'codigo', headerName: 'Código', width: 100 },
  { field: 'nome', headerName: 'Nome', width: 200 },
  { field: 'genero', headerName: 'Gênero', width: 130 },
  { field: 'nascimento', headerName: 'Nascimento', width: 150 },
  { field: 'endereco', headerName: 'Endereço', width: 250 },
];

const DatatablePacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pacientes');
        if (response.data.pacientes) {
          setPacientes(response.data.pacientes.map(paciente => ({
            id: paciente.codigo,
            nome: paciente.nome,
            genero: paciente.genero,
            nascimento: new Date(paciente.nascimento).toLocaleDateString('pt-BR'),
            endereco: paciente.endereco,
            codigo: paciente.codigo
          })));
        }
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      }
    };

    fetchPacientes();
  }, []);

  const handleDelete = async (codigo) => {
    if (window.confirm('Tem certeza que deseja excluir este paciente?')) {
      try {
        const response = await axios.delete('http://localhost:3000/pacientes', {
          data: { codigo }
        });
        if (response.status === 200) {
          setPacientes(pacientes.filter(paciente => paciente.codigo !== codigo));
          alert('Paciente excluído com sucesso!');
        } else {
          throw new Error('Erro ao excluir paciente');
        }
      } catch (error) {
        console.error('Erro ao excluir paciente:', error);
      }
    }
  };

  const actionColumn = {
    field: 'action',
    headerName: 'Ações',
    width: 150,
    renderCell: (params) => {
      const onClickDelete = () => handleDelete(params.row.codigo);

      return (
        <div className="cellAction">
          <Link to={`/pacientes/newpacientes/${params.row.id}`} style={{ textDecoration: 'none' }} className="link">
            <div className="editarButton">Editar</div>
          </Link>
          <div className="deleteButton" onClick={onClickDelete}>Excluir</div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Lista de Pacientes
        <Link to="/pacientes/newpacientes" style={{ textDecoration: 'none' }} className="link">
          Adicionar Novo
        </Link>
      </div>
      <DataGrid
        rows={pacientes}
        columns={[...columns, actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatablePacientes;
