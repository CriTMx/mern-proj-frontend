import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"

function UserProfileButton() {
  const [username, setUsername]  = useState("USER");
 
  useEffect(() => {
    const token = jwtDecode(localStorage.getItem('user-token'));
    if (token.usr) {
      setUsername(token.usr);
    } else {
      setUsername("USER");
    }
  }, [localStorage.getItem('user-token')]);


  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle d-flex flex-row text-white align-items-center" type="button">
        <span className='material-symbols-outlined'>account_circle</span>
        <div>
          {username}
        </div>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Playlists
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default UserProfileButton;
