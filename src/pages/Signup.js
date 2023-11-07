import React from 'react'
import SignupFormHeader from '../components/SignupFormHeader';
import SignupFormContent from '../components/SignupFormContent';
import Separator from '../components/Separator';
import SocialsSignupGroup from '../components/SocialsSignupGroup';
import SignupToLoginLink from '../components/SignupToLoginLink';
import '../components/css/form-container.css';
import '../components/css/container-right.css'


function Signup() {
  return (
    <div className="signup-page p-0">
      <div className='container container-right col-10 col-sm-8 col-lg-6 p-0'>
        <div className='form-container d-flex flex-column flex-content-start mt-5'>
          <SignupFormHeader />
          <SignupFormContent />
          <Separator />
          <SocialsSignupGroup />
          <SignupToLoginLink />
        </div>
      </div>
    </div>
  )
}

export default Signup