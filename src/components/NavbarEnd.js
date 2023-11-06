import React from 'react'
import UserProfileButton from './UserProfileButton'

function NavbarEnd() {

    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') return (
        <UserProfileButton />
    )
    
    return (
        <div>
            <NavSignupButton />
            <NavLoginButton /> 
        </div>
    )
}

export default NavbarEnd