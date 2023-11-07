import React, { useState, useEffect } from 'react';
import UserProfileButton from './UserProfileButton';
import NavSignupButton from './NavSignupButton';
import NavLoginButton from './NavLoginButton';

function NavbarEnd() {
    const userToken = localStorage.getItem('user-token');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (userToken && userToken !== 'undefined') {
            setIsLoggedIn(true);
        }
    }, [userToken]);

    return (
        <div>
            {isLoggedIn ? (
                <UserProfileButton />
            ) : (
                <React.Fragment>
                    <NavSignupButton />
                    <NavLoginButton />
                </React.Fragment>
            )}
        </div>
    );
}

export default NavbarEnd;
