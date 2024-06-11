import './list.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatablePacientes from '../../components/datatable/DatatablePacientes'

const ListPacientes = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatablePacientes/>
      </div>
    </div>
  )
}

export default ListPacientes
