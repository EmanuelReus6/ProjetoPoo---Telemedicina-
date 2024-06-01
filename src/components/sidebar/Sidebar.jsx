import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
        <span className='logo'>bilon</span>
    </div>
    <hr/>
    <div className="center">
        <ul>
            <li>
                <span>dashboard</span>
            </li>
            <li>
                <span>dashboard</span>
            </li>
            <li>
                <span>dashboard</span>
            </li>
            <li>
                <span>dashboard</span>
            </li>
        </ul>
    </div>
    <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar
