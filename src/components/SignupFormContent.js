import React from 'react'
import './css/form-content.css';

function FormContent() {
  return (
    <form className='form-content'>
        <div className='form-row d-flex mb-4'>
            <div className='form-group col-md-6 pe-2'>
                <label for='inputFirstname'>First name</label>
                <input type="text" className='form-control shadow-sm' id='inputFirstname' placeholder='Enter first name' />
            </div>
            <div className='form-group col-md-6 ps-2'>
                <label for='inputLastname'>Last name</label>
                <input type="text" className='form-control shadow-sm' id='inputLastname' placeholder='Enter last name' />
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-group'>
                <label for='inputEmail'>Email Address</label>
                <input type="email" className='form-control shadow-sm w-100' id='inputEmail' placeholder='Enter email address' />
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-group password-container'>
                <label for='inputPassword'>Password</label>
                <input type="password" className='form-control shadow-sm w-100' id='inputPassword' placeholder='Enter password' />
                <button type='button' id="togglePassword" onClick={() => togglePasswordVisibility()}><i class="far fa-eye fa-eye-slash" id="pwVisIcon"></i></button>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div class="form-group">
                <label for='selectUserType'>Select User Type</label>
                <select className='form-select shadow-sm'>
                    <option value='listener' selected>Listener</option>
                    <option value='artist'>Artist</option>
                </select>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-check text-start'>
                <input type="checkbox" className='form-check-input shadow-sm' id='inputAgree'/>
                <label for='inputAgree' className='form-check-label'>By creating an account, you agree to our <a href="#">Terms of Service</a>, <a href='#'>Privacy Policy</a> and our default <a href="#">Notification Settings</a></label>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-submit'>
                <button type='submit' className='btn-submit shadow'>Create an account</button>
            </div>
        </div>
    </form>
  )
}

function togglePasswordVisibility()
{
    const pw = document.querySelector('#inputPassword');
    const pwVisButton = document.querySelector('#pwVisIcon');

    const type = pw.getAttribute('type') === 'password' ? 'text' : 'password';
    pw.setAttribute('type', type);
    pwVisButton.classList.toggle('fa-eye-slash');
}

export default FormContent