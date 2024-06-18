import "./Datatable.scss";
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';

const columns = [
  { field: 'codigo', headerName: 'Código', width: 100 },
  { field: 'codconsulta', headerName: 'Consulta', width: 130 },
  { field: 'medicamento', headerName: 'Medicamento', width: 200 },
  { field: 'dosagem', headerName: 'Dosagem', width: 150 },
  { field: 'frequencia', headerName: 'Frequência', width: 150 },
  { field: 'datainicio', headerName: 'Data Início', width: 200 },
  { field: 'datafim', headerName: 'Data Fim', width: 200 },
];

const DatatablePrescricoes = () => {
  const [prescricoes, setPrescricoes] = useState([]);

  useEffect(() => {
    const fetchPrescricoes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/prescricoes');
        const prescricoesComIds = response.data.prescricoes.map((prescricao, index) => ({
          ...prescricao,
          id: index + 1,
          datainicio: new Date(prescricao.datainicio).toLocaleDateString('pt-BR'),
          datafim: new Date(prescricao.datafim).toLocaleDateString('pt-BR')
        }));
        setPrescricoes(prescricoesComIds);
      } catch (error) {
        console.error('Erro ao buscar prescrições:', error);
      }
    };

    fetchPrescricoes();
  }, []);

  const handleDeletePrescricao = (codigo) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta prescrição?');
    if (!confirmDelete) {
      return;
    }

    axios.delete('http://localhost:3000/prescricoes', { data: { codigo } })
      .then(response => {
        if (response.status === 200) {
          setPrescricoes(prescricoes.filter(prescricao => prescricao.codigo !== codigo));
          alert('Prescrição excluída com sucesso!');
        } else {
          throw new Error('Erro ao excluir prescrição');
        }
      })
      .catch(error => {
        console.error('Erro ao excluir prescrição:', error);
      });
  };

  const actionColumn = {
    field: 'action',
    headerName: 'Ação',
    width: 200,
    renderCell: (params) => {
      const prescricao = params.row;
      return (
        <div className="cellAction">
          <Link to={`/prescricoes/newprescricoes/${prescricao.codigo}`} style={{ textDecoration: 'none' }} className="link">
            <div className="editarButton">Editar</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDeletePrescricao(prescricao.codigo)}>Excluir</div>
        </div>
      );
    }
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Prescrições
        <Link to="/prescricoes/newprescricoes" style={{ textDecoration: 'none' }} className="link">
          Adicionar Nova
        </Link>
      </div>
      <DataGrid
        rows={prescricoes}
        columns={[...columns, actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}  
        getRowId={(row) => row.id}
      />
    </div>
  );
}

export default DatatablePrescricoes;
