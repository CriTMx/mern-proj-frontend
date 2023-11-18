import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import '../components/css/user-profile.css';
import UserProfileActiveTab from '../components/user-profile-components/UserProfileActiveTab';

function UserProfile() {
    var [activeUserTab, setActiveUserTab] = useState('liked_songs');

    return (
    <Container className='user-profile-container text-white pt-5 pb-5 text-center'>
        <img src={''} className='user-profile-picture mb-3'/>
        <h3 className='user-profile-username'>Placeholder_username</h3>
        <p className='text-subtle'>placeholder_email@example.com</p>
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