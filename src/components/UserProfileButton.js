import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import './css/user-dropdown-menu.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function UserProfileButton() {
  const [username, setUsername] = useState("USER");
  let navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    if(token!=null){
      const decodedToken = jwtDecode(token);
      if (decodedToken.usr) {
        setUsername(decodedToken.usr);
      } else {
        setUsername("ERROR");
      }
    }
    else {
      setUsername("ERROR");
    }
  }, [isLoggedIn]);

  const userLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  }


  return (
    <Dropdown className='me-3 dropdown-container'>
      <Dropdown.Toggle id="dropdown-basic" className='d-flex flex-row align-items-center bg-transparent border-0'>
        <span className='material-symbols-outlined me-3'>account_circle</span>
        <div>
          {username}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className='p-0 m-0 user-dropdown-menu'>
        <span className='d-flex dropdown-menu-row'>
          <Dropdown.Item href="#/action-1" className='dropdown-item text-white float-start'>Playlists</Dropdown.Item>
          <span className='material-symbols-outlined float-end text-white align-self-center me-2'>headphones</span>
        </span>
        <span className='d-flex dropdown-menu-row'>
          <Dropdown.Item href="#/action-2" className='dropdown-item text-white float-start'>Profile</Dropdown.Item>
          <span className='material-symbols-outlined float-end text-white align-self-center me-2'>person</span>
        </span>
        <span className='d-flex dropdown-menu-row'>
          <Dropdown.Item href="#/action-2" className='dropdown-item text-white float-start'>Settings</Dropdown.Item>
          <span className='material-symbols-outlined float-end text-white align-self-center me-2'>settings</span>
        </span>
        <span className='d-flex logout-button'>
          <Dropdown.Item as="button" className='dropdown-item text-white float-start' onClick={userLogout}>Log Off</Dropdown.Item>
          <span className='material-symbols-outlined float-end text-white align-self-center me-2'>logout</span>
        </span>
        <div className='hr-dropdown-container d-flex justify-content-center'>
          <hr className='text-white dropdown-hr'></hr>
        </div>
        <div className='dropdown-footer text-white'>
          <p className='dropdown-footer-text'>Join <Link className='text-decoration-none dropdown-footer-link'>Rhythmix for artists</Link> and release your original songs</p>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserProfileButton;
