import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EventIcon from '@mui/icons-material/Event';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SickIcon from '@mui/icons-material/Sick';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
        <span className='logo'>TrustCare</span>
    </div>
    <hr/>
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <PersonIcon className='icon'/>
                <span>usuários</span>
            </li>
            <p className="title">FUCTION</p>
            <li>
                <SickIcon className='icon'/>
                <span>pacientes</span>
            </li>
            <li>
                <HealthAndSafetyIcon className='icon'/>
                <span>médicos</span>
            </li>
            <p className="title">OPERATION</p>
            <li>
                <EventIcon className='icon'/>
                <span>consultas</span>
            </li>
            <li>
                <MedicalServicesIcon className='icon'/>
                <span>prescrições</span>
            </li>
            <p className="title">LOG OUT</p>
            <li>
                <LogoutIcon className='icon'/>
                <span>log out</span>
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
    </div>
    </div>
  )
}

export default Sidebar
