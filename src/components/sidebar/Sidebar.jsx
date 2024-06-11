import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EventIcon from '@mui/icons-material/Event';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SickIcon from '@mui/icons-material/Sick';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"



const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>TrustCare</span>
        </Link>
    </div>
    <hr/>
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
                <PersonIcon className='icon'/>
                <span>usuários</span>
            </li>
            </Link>
            <p className="title">FUCTION</p>
            <Link to="/pacientes" style={{textDecoration:"none"}}>
            <li>
                <SickIcon className='icon'/>
                <span>pacientes</span>
            </li>
            </Link>
            <Link to="/medicos" style={{textDecoration:"none"}}>
            <li>
                <HealthAndSafetyIcon className='icon'/>
                <span>médicos</span>
            </li>
            </Link>
            <p className="title">OPERATION</p>
            <Link to="/consultas" style={{textDecoration:"none"}}>
            <li>
                <EventIcon className='icon'/>
                <span>consultas</span>
            </li>
            </Link>
            <Link to="/prescricoes" style={{textDecoration:"none"}}>
            <li>
                <MedicalServicesIcon className='icon'/>
                <span>prescrições</span>
            </li>
            </Link>
            <p className="title">LOG OUT</p>
            <Link to="/login" style={{textDecoration:"none"}}>
            <li>
                <LogoutIcon className='icon'/>
                <span>log out</span>
            </li>
            </Link>
        </ul>
    </div>
    </div>
  )
}

export default Sidebar
