import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Home
