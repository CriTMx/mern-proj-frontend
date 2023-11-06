import React from 'react'
import LoginFormHeader from './LoginFormHeader'
import Separator from './Separator'
import LoginFormContent from './LoginFormContent'
import SocialsLoginGroup from './SocialsLoginGroup'
import LoginToSignupLink from './LoginToSignupLink'

function LoginFormContainer() {
  return (
    <div className='form-container d-flex flex-column flex-content-start mt-5'>
        <LoginFormHeader />
        <LoginFormContent />
        <Separator />
        <SocialsLoginGroup />
        <LoginToSignupLink />
    </div>
  )
}

export default LoginFormContainer