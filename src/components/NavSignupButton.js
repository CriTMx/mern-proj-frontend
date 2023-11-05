import React from 'react'
import { Link } from 'react-router-dom'

function NavSignupButton() {
  return (
    <span className='nav-signup-btn btn ms-auto'>
        <Link to='/signup' className='link pt-2 pb-2 text-decoration-none text-white'>Signup</Link>
    </span>
  )
}

export default NavSignupButton