import React from 'react'
import { Link } from 'react-router-dom'

function NavLoginButton() {
  return (
    <span className='nav-login-btn btn'>
        <Link to='/login' className='link text-decoration-none'>Login</Link>
    </span>
  )
}

export default NavLoginButton