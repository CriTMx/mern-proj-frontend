import React from 'react'
import SignupFormHeader from '../components/AuthHeader';
import SignupFormContent from '../components/SignupFormContent';
import SocialsSignupGroup from '../components/SocialsGroup';
import '../components/css/form-container.css';
import '../components/css/container-right.css'
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="signup-page p-0">
      <div className='container container-right col-10 col-sm-8 col-lg-6 p-0'>
        <div className='form-container d-flex flex-column flex-content-start mt-5'>
          <SignupFormHeader text={"Sign up to"}/>
          <SignupFormContent />
          <div className='separator d-flex justify-content-center mb-4'>
            <hr className='hr' />
            <p id="separatorText">Or</p>
            <hr className='hr' />
          </div>  
          <SocialsSignupGroup />
          <div className='login-link text-white'>
            Already have an account? <Link to='/login' className='text-decoration-none'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup