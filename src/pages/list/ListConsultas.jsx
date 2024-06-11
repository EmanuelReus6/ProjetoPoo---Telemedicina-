import './List.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableConsultas from '../../components/datatable/DatatableConsultas'

const ListConsultas = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableConsultas/>
      </div>
    </div>
  )
}

export default ListConsultas
