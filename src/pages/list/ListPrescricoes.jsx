import './list.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatablePrescricoes from '../../components/datatable/DatatablePrescricoes'

const ListPrescricoes = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatablePrescricoes/>
      </div>
    </div>
  )
}

export default ListPrescricoes
