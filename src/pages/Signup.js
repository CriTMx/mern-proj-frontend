import React from 'react'
import ContainerLeft from '../components/ContainerLeft';
import ContainerRight from '../components/ContainerRightSignup';

function Signup() {
  return (
    <div className="signup-page p-0">
        <div className="row m-auto">
            <ContainerLeft />
            <ContainerRight />
        </div>
    </div>
  )
}

export default Signup