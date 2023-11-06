import React, {useState} from 'react'
import './css/form-content.css';

function FormContent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: 'listener',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:2900/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
  return (
      <form className='form-content' onSubmit={handleSubmit}>
        <div className='form-row d-flex mb-4'>
            <div className='form-group col-md-6 pe-2'>
                <label htmlFor='inputFirstname'>First name</label>
                  <input type="text" className='form-control shadow-sm' id='inputFirstname' name="firstName" value={formData.firstName} placeholder='Enter first name' onChange={handleChange} required/>
            </div>
            <div className='form-group col-md-6 ps-2'>
                <label htmlFor='inputLastname'>Last name</label>
                  <input type="text" className='form-control shadow-sm' id='inputLastname' name="lastName" value={formData.lastName} placeholder='Enter last name' onChange={handleChange} required />
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-group'>
                <label htmlFor='inputEmail'>Email Address</label>
                  <input type="email" className='form-control shadow-sm w-100' id='inputEmail' name="email" value={formData.email} placeholder='Enter email address' onChange={handleChange} required />
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-group password-container'>
                <label htmlFor='inputPassword'>Password</label>
                  <input type="password" className='form-control shadow-sm w-100' id='inputPassword' name="password" value={formData.password} placeholder='Enter password' onChange={handleChange} required />
                <button type='button' id="togglePassword" onClick={() => togglePasswordVisibility()}><i className="far fa-eye fa-eye-slash" id="pwVisIcon"></i></button>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className="form-group">
                <label htmlFor='selectUserType'>Select User Type</label>
                  <select className='form-select shadow-sm' id="selectUserType" name="userType" value={formData.userType} onChange={handleChange} required>
                    <option value='listener'>Listener</option>
                    <option value='artist'>Artist</option>
                </select>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-check text-start'>
                <input type="checkbox" className='form-check-input shadow-sm' id='inputAgree'/>
                <label htmlFor='inputAgree' className='form-check-label'>By creating an account, you agree to our <a href="#">Terms of Service</a>, <a href='#'>Privacy Policy</a> and our default <a href="#">Notification Settings</a></label>
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