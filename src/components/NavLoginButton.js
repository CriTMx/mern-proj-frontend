import React from 'react'
import { Link } from 'react-router-dom'

function NavLoginButton() {
  return (
    <span className='nav-login-btn btn'>
        <Link to='/login' className='link pt-2 pb-2 text-decoration-none text-white'>Login</Link>
    </span>
  )
}

export default NavLoginButton