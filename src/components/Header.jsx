import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import logovid from '../assets/logovid.mp4'
import autoprefixer from 'autoprefixer'
import Navbar from './Navbar'

const Header = () => {
  const { isLoggedIn, isAdmin, user, logout } = React.useContext(AuthContext);
  return (
    <div className="header">
      <div className='headerlogo'> <video src={logovid} autoPlay muted loop playsInline width={200} ></video> </div>
      {isLoggedIn&& <Navbar />}
      {!isLoggedIn&&<div> <button className='login-btn' ><Link to="/login">Login</Link></button> <button className='signup-btn'><Link to="/signup">Signup</Link></button>   </div>}
      {isLoggedIn && <div className='welcome-logout'> <span className='welcome-user'>{user.name}!</span> <button className='logout-btn' onClick={logout}>Logout</button> </div> }
    </div>
  )
}

export default Header
