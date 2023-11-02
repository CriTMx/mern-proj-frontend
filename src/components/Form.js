import React from 'react'

export default function Form() {
  return (
    <form className='form'>
        <div className='form-div mb-3'>
            <div className='form-label-div'>
                <label for="loginInputEmail" class="form-label"><b>Email Address</b></label>
            </div>
            <input type="email" className='form-control' id='loginInputEmail' placeholder='Enter your email ID'/>
        </div>
        <div className='form-div mb-4'>
            <div className='form-label-div'>
                <label for="loginInputPassword" class="form-label"><b>Password</b></label>
            </div>
            <input type="password" className='form-control' id='loginInputPassword' placeholder='Enter your password' />
        </div>
        <div className='form-div mb-4'>
            <div className='form-check-div me-sm-5 me-2 mb-2 d-inline'>
                <input type='checkbox' className='form-check-input me-2' id='loginRemember'/>
                <label className='form-check-label' for='loginRemember'>Remember me</label>
            </div>
            <div className='form-forgot-div ms-sm-4 ms-2 mb-2 d-inline-flex'>
                <a href="#" target='_blank'>Forgot password?</a>
            </div>
        </div>
        <div className='form-button'>
            <button className='btn btn-success w-100'>Log In</button>
        </div>
    </form>
  )
}
