import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

//listas
import List from "./pages/list/List";
import ListConsultas from "./pages/list/ListConsultas";
import ListMedicos from "./pages/list/ListMedicos";
import ListPacientes from "./pages/list/ListPacientes";
import ListPrescricoes from "./pages/list/ListPrescricoes";

//adicionar
import New from "./pages/new/New";
import NewConsultas from "./pages/new/NewConsultas";
import NewMedicos from "./pages/new/NewMedicos";
import NewPacientes from "./pages/new/NewPacientes";
import NewPrescricoes from "./pages/new/NewPrescricoes";

import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="consultas">
          <Route index element={<ListConsultas/>}/>
          <Route path="newconsultas" element={<NewConsultas/>}/>
        </Route>
        <Route path="medicos">
          <Route index element={<ListMedicos/>}/>
          <Route path="newmedicos" element={<NewMedicos/>}/>
        </Route>
        <Route path="pacientes">
          <Route index element={<ListPacientes/>}/>
          <Route path="newpacientes" element={<NewPacientes/>}/>
        </Route>
        <Route path="prescricoes">
          <Route index element={<ListPrescricoes/>}/>
          <Route path="newprescricoes" element={<NewPrescricoes/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
