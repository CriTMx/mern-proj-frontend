import React from 'react'

function UserProfileButton() {
  return (
    <div className='dropdown'>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='material-symbols-outlined'>account_circle</span>
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Playlists</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
        </ul>
    </div>
  )
}

export default UserProfileButton