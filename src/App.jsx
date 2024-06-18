// Importing the necessary components for different pages in the application
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

// Importing list components for different types of data
import List from "./pages/list/List";
import ListConsultas from "./pages/list/ListConsultas";
import ListMedicos from "./pages/list/ListMedicos";
import ListPacientes from "./pages/list/ListPacientes";
import ListPrescricoes from "./pages/list/ListPrescricoes";

// Importing components for adding new data entries
import New from "./pages/new/New";
import NewConsultas from "./pages/new/NewConsultas";
import NewMedicos from "./pages/new/NewMedicos";
import NewPacientes from "./pages/new/NewPacientes";
import NewPrescricoes from "./pages/new/NewPrescricoes";

// Importing necessary components from the react-router-dom library for routing
import {
  BrowserRouter,  // Wraps the entire application to enable routing
  Routes,         // A container for all the Route components
  Route,          // Represents a single route in the application
} from "react-router-dom";

// Defining the App component that contains the routing logic
function App() {
  return (
    <BrowserRouter>      {/* BrowserRouter component wraps the entire application to use HTML5 history API for cleaner URLs */}
      <Routes>           {/* Routes component wraps all Route components to define the different routes */}
        <Route path="/"> {/* Route for the root path */}
          <Route index element={<Home/>}/>              {/* Default route element for the root path, renders the Home component */}
          <Route path="login" element={<Login/>}/>      {/* Route for /login, renders the Login component */}
          <Route path="users">                         {/* Parent route for /users */}
            <Route index element={<List/>}/>           {/* Default route for /users, renders the List component */}
            <Route path="new/:userId?" element={<New/>}/> {/* Route for /users/new or /users/new/:userId, renders the New component */}
          </Route>
          <Route path="consultas">                    {/* Parent route for /consultas */}
            <Route index element={<ListConsultas/>}/> {/* Default route for /consultas, renders the ListConsultas component */}
            <Route path="newconsultas/:userId?" element={<NewConsultas/>}/> {/* Route for /consultas/newconsultas or /consultas/newconsultas/:userId, renders the NewConsultas component */}
          </Route>
          <Route path="medicos">                      {/* Parent route for /medicos */}
            <Route index element={<ListMedicos/>}/>   {/* Default route for /medicos, renders the ListMedicos component */}
            <Route path="newmedicos/:userId?" element={<NewMedicos/>}/> {/* Route for /medicos/newmedicos or /medicos/newmedicos/:userId, renders the NewMedicos component */}
          </Route>
          <Route path="pacientes">                    {/* Parent route for /pacientes */}
            <Route index element={<ListPacientes/>}/> {/* Default route for /pacientes, renders the ListPacientes component */}
            <Route path="newpacientes/:userId?" element={<NewPacientes/>}/> {/* Route for /pacientes/newpacientes or /pacientes/newpacientes/:userId, renders the NewPacientes component */}
          </Route>
          <Route path="prescricoes">                  {/* Parent route for /prescricoes */}
            <Route index element={<ListPrescricoes/>}/> {/* Default route for /prescricoes, renders the ListPrescricoes component */}
            <Route path="newprescricoes/:userId?" element={<NewPrescricoes/>}/> {/* Route for /prescricoes/newprescricoes or /prescricoes/newprescricoes/:userId, renders the NewPrescricoes component */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // Exporting the App component as the default export from this module