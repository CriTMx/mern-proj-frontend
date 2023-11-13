import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function NavLoginButton() {
  return (
    <span className='nav-login-btn btn m-0'>
      <LinkContainer to='/login' className='link text-decoration-none'><Nav.Link className='navbar-link-button'>login</Nav.Link></LinkContainer>
    </span>
  )
}

export default NavLoginButton