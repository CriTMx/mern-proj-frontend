import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"
import Dropdown from 'react-bootstrap/Dropdown'

function UserProfileButton() {
  const [username, setUsername] = useState("USER");

  useEffect(() => {
    const token = jwtDecode(localStorage.getItem('user-token'));
    if (token.usr) {
      console.log("token exists");
      setUsername(token.usr);
    } else {
      setUsername("USER");
    }
  }, [localStorage.getItem('user-token')]);


  return (
    <Dropdown className='me-3'>
      <Dropdown.Toggle id="dropdown-basic" className='d-flex flex-row align-items-center bg-transparent border-0'>
        <span className='material-symbols-outlined'>account_circle</span>
        <div>
          {username}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className='p-0 m-0 bg-transparent user-dropdown-menu'>
        <Dropdown.Item href="#/action-1" className='text-white p-0'>Playlists</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='text-white p-0'>Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='text-white p-0'>Settings</Dropdown.Item>
        <Dropdown.Item as="button" className='bg-danger text-white p-0'>Log Off</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserProfileButton;
