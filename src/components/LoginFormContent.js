import React from 'react'
import './css/form-content.css';

function LoginFormContent() {
  return (
    <form className='form-content'>
        <div className='form-row mb-4'>
            <div className='form-group'>
                <label for='inputEmailLogin'>Email Address</label>
                <input type="email" className='form-control shadow-sm w-100' id='inputEmailLogin' placeholder='Enter email address' />
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-group password-container'>
                <label for='inputPasswordLogin'>Password</label>
                <input type="password" className='form-control shadow-sm w-100' id='inputPasswordLogin' placeholder='Enter password' />
                <button type='button' id="togglePassword" onClick={() => togglePasswordVisibility()}><i class="far fa-eye fa-eye-slash" id="pwVisIcon"></i></button>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-check text-start'>
                <input type="checkbox" className='form-check-input shadow-sm' id='inputRemember'/>
                <label for='inputRemember' className='form-check-label'>Remember me</label>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-submit'>
                <button type='submit' className='btn-submit shadow'>Login to account</button>
            </div>
        </div>
    </form>
  )
}

function togglePasswordVisibility()
{
    const pw = document.querySelector('#inputPasswordLogin');
    const pwVisButton = document.querySelector('#pwVisIcon');

    const type = pw.getAttribute('type') === 'password' ? 'text' : 'password';
    pw.setAttribute('type', type);
    pwVisButton.classList.toggle('fa-eye-slash');
}

export default LoginFormContent