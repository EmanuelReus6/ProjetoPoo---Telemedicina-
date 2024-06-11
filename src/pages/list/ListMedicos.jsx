import './list.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableMedicos from '../../components/datatable/DatatableMedicos'

const ListMedicos = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableMedicos/>
      </div>
    </div>
  )
}

export default ListMedicos
