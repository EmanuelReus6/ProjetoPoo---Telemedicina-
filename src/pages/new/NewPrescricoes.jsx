import React from 'react'
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const NewPrescricoes = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>Adicionar Novas Prescrições</h1></div>
        <div className="bottom">
        <div className="left">
          <img src="https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?w=360&t=st=1717963692~exp=1717964292~hmac=bf4df23bcfa9b662b2fcf33c88383299e39b8772a090f7fe5a70984b616bf870" alt="" className='img'/>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Código Consulta</label>
                <input type='text' placeholder='Código Consulta'></input>
              </div>
              <div className="formInput">
                <label>Medicamento</label>
                <input type='text' placeholder='Medicamento'></input>
              </div>
              <div className="formInput">
                <label>Dosagem</label>
                <input type='text' placeholder='Dosagem'></input>
              </div>
              <div className="formInput">
                <label>Frequência</label>
                <input type='text' placeholder='Frequência'></input>
              </div>
              <div className="formInput">
                <label>Data de início</label>
                <input type='text' placeholder='Data de início'></input>
              </div>
              <div className="formInput">
                <label>Data de fim</label>
                <input type='text' placeholder='Data de fim'></input>
              </div>
              <button>Novo</button>
              <button>Salvar Alterações</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPrescricoes
