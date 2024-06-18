import { useState, useEffect } from 'react'; // Importa hooks useState e useEffect do React
import axios from 'axios'; // Importa a biblioteca Axios para fazer requisições HTTP

import './new.scss'; // Importa o arquivo de estilos SCSS
import Sidebar from "../../components/sidebar/Sidebar"; // Importa o componente Sidebar
import Navbar from "../../components/navbar/Navbar"; // Importa o componente Navbar
import { Navigate, useNavigate, useParams } from 'react-router-dom'; // Importa componentes para navegação e obtenção de parâmetros de URL do react-router-dom

const New = () => { // Define o componente funcional New
  const navigate = useNavigate(); // Hook para navegação programática
  const { userId } = useParams(); // Hook para obter o parâmetro userId da URL
  const [codigo, setCodigo] = useState(''); // Estado para armazenar o código do usuário
  const [name, setName] = useState(''); // Estado para armazenar o nome do usuário
  const [senha, setSenha] = useState(''); // Estado para armazenar a senha do usuário
  const [email, setEmail] = useState(''); // Estado para armazenar o email do usuário
  const [papel, setPapel] = useState(''); // Estado para armazenar o papel do usuário

  useEffect(() => { // Hook de efeito que é executado quando o componente é montado ou quando userId muda
    if (userId) { // Se userId está definido
      fetchUserData(userId); // Chama a função fetchUserData com userId
    }
  }, [userId]); // Dependência do hook useEffect é userId

  const fetchUserData = async (userId) => { // Função assíncrona para buscar dados do usuário
    try {
      const response = await axios.get(`http://localhost:3000/usuarios/${userId}`); // Faz uma requisição GET para buscar os dados do usuário
      const data = response.data; // Extrai os dados da resposta
      setCodigo(data.codigo.toString()); // Atualiza o estado com o código do usuário
      setName(data.nome); // Atualiza o estado com o nome do usuário
      setSenha(data.senha); // Atualiza o estado com a senha do usuário
      setEmail(data.email); // Atualiza o estado com o email do usuário
      setPapel(data.papel); // Atualiza o estado com o papel do usuário
    } catch (error) { // Captura erros
      console.error('Erro ao buscar usuário:', error); // Exibe o erro no console
    }
  };

  const submitData = async (event) => { // Função assíncrona para enviar dados do formulário
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    try {
      const payload = { // Cria um objeto com os dados do formulário
        codigo: userId,
        nome: name,
        senha: senha,
        email: email,
        papel: papel
      };

      let response; // Declara uma variável para a resposta da requisição
      if (userId) { // Se userId está definido, é uma atualização
        response = await axios.put(`http://localhost:3000/usuarios`, payload); // Faz uma requisição PUT para atualizar o usuário
        alert("Usuário atualizado com sucesso!"); // Exibe uma mensagem de sucesso
      } else { // Se userId não está definido, é uma criação
        response = await axios.post(`http://localhost:3000/usuarios`, payload); // Faz uma requisição POST para criar um novo usuário
        alert("Usuário adicionado com sucesso!"); // Exibe uma mensagem de sucesso
      }

      // Reseta os estados do formulário
      setCodigo('');
      setName('');
      setSenha('');
      setEmail('');
      setPapel('');
      navigate("/users") // Navega de volta para a lista de usuários
    } catch (error) { // Captura erros
      console.error('Erro ao salvar usuário:', error); // Exibe o erro no console
    }
  };

  return ( // Renderiza o componente
    <div className="new">
      <Sidebar /> {/* Renderiza o componente Sidebar */}
      <div className="newContainer">
        <Navbar /> {/* Renderiza o componente Navbar */}
        <div className="top">
          <h1>{userId ? 'Editar Usuário' : 'Adicionar Novo Usuário'}</h1> {/* Exibe o título apropriado */}
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://img.freepik.com/fotos-gratis/garota-ruiva-sorridente-apontando-o-dedo-elogiando-voce-escolhendo-ou-recrutando-convidando-para-fazer-companhia-vestindo-roupas-casuais-em-branco_176420-40021.jpg?w=740&t=st=1718723980~exp=1718724580~hmac=3850c77c421c4f10a490abe73934ea18a30ca6cd7887eadc7e6ad3daddfac55c"
              alt=""
              className="img"
            /> {/* Renderiza uma imagem */}
          </div>
          <div className="right">
            <form onSubmit={submitData}> {/* Define o manipulador de envio do formulário */}
              {userId && ( // Se userId está definido, renderiza o campo de código
                <div className="formInput">
                  <label>Código</label>
                  <input
                    type="text"
                    placeholder="Código"
                    value={userId}
                    onChange={(e) => setCodigo(e.target.value)}
                    disabled
                  />
                </div>
              )}
              <div className="formInput">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Papel</label>
                <input
                  type="text"
                  placeholder="Papel"
                  value={papel}
                  onChange={(e) => setPapel(e.target.value)}
                />
              </div>
              <button type="submit">
                {userId ? 'Salvar Alterações' : 'Adicionar Usuário'}
              </button> {/* Botão de envio do formulário */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New; // Exporta o componente New como exportação padrão
