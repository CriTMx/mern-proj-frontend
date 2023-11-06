import React from 'react'
import { Link } from 'react-router-dom'

function NavSignupButton() {
  return (
    <span className='nav-signup-btn btn ms-auto'>
        <Link to='/signup' className='link text-decoration-none'>Signup</Link>
    </span>
  )
}

export default NavSignupButton