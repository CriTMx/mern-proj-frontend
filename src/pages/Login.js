import React from 'react'
import ContainerLeft from '../components/ContainerLeft'
import Separator from '../components/Separator'
import LoginFormHeader from '../components/LoginFormHeader'
import ContainerRightLogin from '../components/ContainerRightLogin'

function Login() {
  return (
    <div className='login-page'>
        <div className='row w-100'>
          <ContainerLeft />
          <ContainerRightLogin />
        </div>
    </div>
  )
}

export default Login