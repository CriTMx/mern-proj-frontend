import React from 'react'
import { Link } from 'react-router-dom'

function LoginToSignupLink() {
  return (
    <div className='signup-link text-white'>
        Don't have an account yet? <Link to='/signup' className='text-decoration-none'>Register here</Link>
    </div>
  )
}

export default LoginToSignupLink