import React from 'react'
import'./Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt=''> </img>
      <ul>
        <li>Pacientes</li>
        <li>Médicos</li>
        <li>Consultas</li>
        <li>Prescições</li>
        <li>Usuários</li>
      </ul>
    </nav>
  )
}

export default Navbar
