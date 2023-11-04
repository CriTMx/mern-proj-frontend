import React from 'react'
import ContainerLeft from '../components/ContainerLeft';
import ContainerRight from '../components/ContainerRightSignup';

function Signup() {
  return (
    <div className="signup-page">
        <div className="row">
            <ContainerLeft />
            <ContainerRight />
        </div>
    </div>
  )
}

export default Signup