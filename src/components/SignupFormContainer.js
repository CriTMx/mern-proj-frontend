import React from 'react';
import SignupFormHeader from './SignupFormHeader';
import './css/form-container.css';
import SignupFormContent from './SignupFormContent';
import Separator from './Separator';
import SocialsSignupGroup from './SocialsSignupGroup';
import SignupToLoginLink from './SignupToLoginLink';

function FormContainer() {
  return (
    <div className='form-container'>
        <SignupFormHeader />
        <SignupFormContent />
        <Separator />
        <SocialsSignupGroup />
        <SignupToLoginLink />
    </div>
  )
}

export default FormContainer