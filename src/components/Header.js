import React from 'react'
import './css/header.css'
import Navibar from './Navibar';

function Header() {
  return (
    <div className='header container-fluid text-start p-2 text-white'>
        <Navibar />
    </div>
  )
}

export default Header