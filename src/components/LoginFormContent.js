import React, {useState} from 'react'
import './css/form-content.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginFormContent() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        longterm: false
    });
    const {isLoggedIn, setIsLoggedIn } = useAuth();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json(); 

                if (data.accessToken) {
                    localStorage.clear();
                    localStorage.setItem('user-token', data.accessToken);
                    setIsLoggedIn(true);
                    navigate("/home");
                } else {
                    console.error('Login failed: No access token found');
                    alert("Login failed");
                    setIsLoggedIn(false);
                }
            } else {
                if (response.status === 401) {
                    response.json().then(data => {
                        alert(data.message);
                    }).catch(error => {
                        console.error('Error parsing JSON:', error);
                    });
                    return;
                }
                console.error('Login failed');
                alert("Backend inaccessible")
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert(error);
        }
    };

  return ( 
      <form className='form-content' onSubmit={handleLogin}>
        <div className='form-row mb-4'>
            <div className='form-group'>
                <label htmlFor='inputEmailLogin'>Email Address</label>
                  <input type="email" className='form-control shadow-sm w-100' id='inputEmailLogin' placeholder='Enter email address' name='email' value={formData.email} onChange={handleChange} required/>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-group password-container'>
                <label htmlFor='inputPasswordLogin'>Password</label>
                  <input type="password" className='form-control shadow-sm w-100' id='inputPasswordLogin' placeholder='Enter password' name='password' value={formData.password} onChange={handleChange} required/>
                <button type='button' id="togglePassword" onClick={() => togglePasswordVisibility()}><i className="far fa-eye fa-eye-slash" id="pwVisIcon"></i></button>
            </div>
        </div>
        <div className='form-row mb-4'>
            <div className='form-check text-start'>
                  <input type="checkbox" className='form-check-input shadow-sm' id='inputRemember' name="longterm" onChange={handleChange} value={formData.longterm} />
                <label htmlFor='inputRemember' className='form-check-label' >Remember me</label>
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