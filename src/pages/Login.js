import React from 'react'
import AuthHeader from '../components/AuthHeader'
import LoginFormContent from '../components/LoginFormContent'
import SocialsLoginGroup from '../components/SocialsGroup'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container container-right col-10 col-sm-8 col-lg-6 p-0' id="login-page">
      <div className='form-container d-flex flex-column flex-content-start mt-5'>
        <AuthHeader text={"Log in to"}/>
        <LoginFormContent />
        <div className='separator d-flex justify-content-center mb-4'>
          <hr className='hr' />
          <p id="separatorText">Or</p>
          <hr className='hr' />
        </div>  
        <SocialsLoginGroup />
        <div className='signup-link text-white text-center'>
          Don't have an account yet? <Link to='/signup' className='text-decoration-none'>Register here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login