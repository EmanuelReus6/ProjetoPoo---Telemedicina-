import React from 'react'
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const NewPacientes = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top"><h1>Adicionar Novos Pacientes</h1></div>
        <div className="bottom">
        <div className="left">
          <img src="https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?w=360&t=st=1717963692~exp=1717964292~hmac=bf4df23bcfa9b662b2fcf33c88383299e39b8772a090f7fe5a70984b616bf870" alt="" className='img'/>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Código Usuário</label>
                <input type='text' placeholder='Código Usuário'></input>
              </div>
              <div className="formInput">
                <label>Nome</label>
                <input type='text' placeholder='Nome'></input>
              </div>
              <div className="formInput">
                <label>Nascimento</label>
                <input type='text' placeholder=''></input>
              </div>
              <div className="formInput">
                <label>Gênero</label>
                <input type='text' placeholder='Gênero'></input>
              </div>
              <div className="formInput">
                <label>Endereço</label>
                <input type='text' placeholder='Endereço'></input>
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

export default NewPacientes
