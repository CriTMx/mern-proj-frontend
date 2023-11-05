import React from 'react'
import './css/header.css'
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header container-fluid text-start p-2 text-white'>
        <Navbar />
    </div>
  )
}

export default Header