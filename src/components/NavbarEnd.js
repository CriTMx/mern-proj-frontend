import React, { useState, useEffect } from 'react';
import UserProfileButton from './UserProfileButton';
import NavSignupButton from './NavSignupButton';
import NavLoginButton from './NavLoginButton';
import { useAuth } from '../contexts/AuthContext';

function NavbarEnd() {
    const userToken = localStorage.getItem('user-token');
    const {isLoggedIn, setIsLoggedIn} = useAuth();

    useEffect(() => {
        console.log("useeffect called");
        if (userToken && userToken !== 'undefined') {
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    return (
        <div className='navbar-end ps-3'>
            {isLoggedIn ? (
                <UserProfileButton/>
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
