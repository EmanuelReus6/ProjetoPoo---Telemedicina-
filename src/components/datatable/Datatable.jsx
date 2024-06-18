import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React
import { DataGrid } from '@mui/x-data-grid'; // Importa o componente DataGrid da biblioteca @mui/x-data-grid
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom para navegação
import axios from 'axios'; // Importa a biblioteca Axios para fazer requisições HTTP

// Define as colunas da tabela
const columns = [
  { field: 'codigo', headerName: 'Código', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'senha', headerName: 'Senha', width: 130 },
  { field: 'papel', headerName: 'Papel', width: 130 },
];

const Datatable = () => { // Define o componente funcional Datatable
  const [rows, setRows] = useState([]); // Declara o estado rows e a função setRows para atualizá-lo

  useEffect(() => { // Hook de efeito que é executado quando o componente é montado
    const fetchData = async () => { // Função assíncrona para buscar dados dos usuários
      try {
        const response = await axios.get('http://localhost:3000/usuarios'); // Faz uma requisição GET para buscar os usuários
        const usuarios = response.data.usuarios.map((usuario, index) => ({ // Mapeia os dados dos usuários para o formato esperado pelo DataGrid
          id: index + 1,
          codigo: usuario.codigo,
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
          papel: usuario.papel,
        }));
        setRows(usuarios); // Atualiza o estado rows com os dados dos usuários
      } catch (error) { // Captura erros
        console.error('Erro ao buscar usuários:', error); // Exibe o erro no console
      }
    };

    fetchData(); // Chama a função fetchData para buscar os dados dos usuários
  }, []); // O array vazio como dependência significa que este efeito roda apenas uma vez quando o componente é montado

  const handleDelete = async (codigo) => { // Função assíncrona para deletar um usuário
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) { // Pergunta ao usuário se ele tem certeza da exclusão
      try {
        const response = await axios.delete('http://localhost:3000/usuarios', {
          data: { codigo } // Envia o código do usuário a ser deletado
        });
        if (response.status === 200) { // Se a resposta é 200 (OK)
          setRows(rows.filter(usuario => usuario.codigo !== codigo)); // Remove o usuário deletado do estado rows
          alert('Usuário excluído com sucesso!'); // Alerta de sucesso
        } else {
          throw new Error('Erro ao excluir usuário'); // Lança um erro se a exclusão falhar
        }
      } catch (error) { // Captura erros
        console.error('Erro ao excluir usuário:', error); // Exibe o erro no console
      }
    }
  };

  const actionColumn = { // Define a coluna de ações
    field: 'action',
    headerName: 'Ação',
    width: 200,
    renderCell: (params) => { // Função para renderizar as células da coluna de ações
      const onClickDelete = () => handleDelete(params.row.codigo); // Função para lidar com a exclusão de um usuário
      
      return ( // Retorna os elementos de ação
        <div className="cellAction">
          <Link to={`/users/new/${params.row.codigo}`} style={{ textDecoration: 'none' }} className="link">
            <div className="editarButton">Editar</div> {/* Botão de edição */}
          </Link>
          <div className="deleteButton" onClick={onClickDelete}>Deletar</div> {/* Botão de exclusão */}
        </div>
      );
    },
  };

  return ( // Renderiza o componente
    <div className="datatable">
      <div className="datatableTitle">
        Lista de Usuários
        <Link to="/users/new" style={{ textDecoration: 'none' }} className="link">
          Adicionar Novo
        </Link> {/* Link para adicionar um novo usuário */}
      </div>
      <DataGrid
        rows={rows} // Define as linhas da tabela com o estado rows
        columns={[...columns, actionColumn]} // Adiciona a coluna de ações às colunas existentes
        pageSize={9} // Define o tamanho da página (número de linhas por página)
        rowsPerPageOptions={[9]} // Define as opções de número de linhas por página
      />
    </div>
  );
};

export default Datatable; // Exporta o componente Datatable como exportação padrão
