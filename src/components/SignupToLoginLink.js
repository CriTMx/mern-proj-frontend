import React from 'react'
import { Link } from 'react-router-dom'

function LoginLink() {
  return (
    <div className='login-link'>
        Already have an account? <Link to='/login' className='text-decoration-none'>Sign in</Link>
    </div>
  )
}

export default LoginLink