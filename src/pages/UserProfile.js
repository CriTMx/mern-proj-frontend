import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import '../components/css/user-profile.css';
import UserProfileActiveTab from '../components/user-profile-components/UserProfileActiveTab';

function UserProfile() {
    var [activeUserTab, setActiveUserTab] = useState('liked_songs');
    const [userDetails, setUserDetails] = useState({
        name: 'Listener Name',
        username: 'Listener Username'
    })

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('user-token');
            const decoded = jwtDecode(token);
            const id = decoded.id;
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/user/${id}/details`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserDetails(data);
                } else {
                    console.error('Failed to fetch song details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching song details:', error.message);
            }
        };

        fetchData();

    }, []);


    return (
        <Container className='user-profile-container text-white pt-5 pb-5 text-center'>
            <img src={'/images/profile_pic.png'} className='user-profile-picture mb-3' />
            <h2 className='artist-name'>{userDetails.name}</h2>
            <h3 className='user-profile-username'>{userDetails.username}</h3>
            <p className='text-subtle'>{userDetails.email}</p>
            <Row className='w-100'>
                <div className='user-profile-tabs text-center d-flex justify-content-center align-items-center'>
                    <Button className='user-profile-tab' onClick={() => setActiveUserTab('liked_songs')}>Liked songs</Button>
                    <Button className='user-profile-tab' onClick={() => setActiveUserTab('edit_profile_user')}>Edit profile</Button>
                </div>
                <hr className='mt-3 mb-0' />
            </Row>
            <UserProfileActiveTab activeTab={activeUserTab} />
        </Container>

    )
}

export default UserProfile