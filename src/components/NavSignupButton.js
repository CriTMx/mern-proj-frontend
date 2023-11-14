import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function NavSignupButton() {
  return (
    <span className='nav-signup-btn btn m-0'>
      <LinkContainer to='/signup' className='link text-decoration-none'><Nav.Link className='navbar-link-button'>Signup</Nav.Link></LinkContainer>
    </span>
  )
}

export default NavSignupButton