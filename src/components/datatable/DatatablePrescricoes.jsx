import "./Datatable.scss";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';  // Certifique-se de importar o Link

const columns: GridColDef[] = [
  { field: 'id', headerName: 'código', width: 70 },
  { field: 'nome', headerName: 'nome', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'senha', headerName: 'senha', width: 130 },
  { field: 'papel', headerName: 'papel', width: 130 },
];

const rows = [
  { id: 1, senha: 'Snow', nome: 'Jon', age: 35 },
  { id: 2, senha: 'Lannister', nome: 'Cersei', age: 42 },
  { id: 3, senha: 'Lannister', nome: 'Jaime', age: 45 },
  { id: 4, senha: 'Stark', nome: 'Arya', age: 16 },
  { id: 5, senha: 'Targaryen', nome: 'Daenerys', age: null },
  { id: 6, senha: 'Melisandre', nome: null, age: 150 },
  { id: 7, senha: 'Clifford', nome: 'Ferrara', age: 44 },
  { id: 8, senha: 'Frances', nome: 'Rossini', age: 36 },
  { id: 9, senha: 'Roxie', nome: 'Harvey', age: 65 },
];

const DatatablePrescricoes = () => {
  const actionColumn = [{
    field: "action", 
    headerName: "Action", 
    width: 200, 
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/prescricoes/newprescricoes" style={{ textDecoration: "none" }} className="link">
          <div className="editarButton">Editar</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      );
    }
  }];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Prescrições
        <Link to="/prescricoes/newprescricoes" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}  
        checkboxSelection
      />
    </div>
  );
}

export default DatatablePrescricoes;
