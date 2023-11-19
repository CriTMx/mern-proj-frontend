import { React, useState, useEffect } from 'react'
import '../components/css/artist-profile.css';
import { Button, Row } from 'react-bootstrap';
import ArtistProfileActiveTab from '../components/artist-profile-components/ArtistProfileActiveTab';
import { jwtDecode } from 'jwt-decode';

function ArtistProfile({ playNewSong, updatePlayerUIDetails }) {

    var [activeArtistTab, setActiveArtistTab] = useState('my_songs');
    const [userDetails, setUserDetails] = useState({
        name: 'Artist Name',
        username: 'Artist Username',
        email: 'placeholder@email.com',
        bio: 'Placeholder Bio',
        profilePic: '/images/profile_pic.png'
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
        <div className='artist-profile-container'>
            <img className='artist-profile-banner w-100' src={''} />
            <Row className='w-100'>
                <div className='col-5 col-md-4 followings-container'>
                    <div className='followers-label'>
                        <p className='followers-count me-2'>100K</p>
                        <p className='followers-text'>Followers</p>
                    </div>
                    <div className='following-label'>
                        <p className='following-count me-2'>5K</p>
                        <p className='following-text'>Following</p>
                    </div>
                </div>
                <div className='col-2 col-md-4 text-center artist-picture-container text-white'>
                    <img className='artist-picture mb-0' src={userDetails.profilePic} />
                </div>
                <div className='col-5 col-md-4 d-flex justify-content-end'>
                    <Button className='artist-profile-options me-md-5 me-2'>...</Button>
                </div>
            </Row>
            <Row className='w-100'>
                <div className='artist-text text-white text-center'>
                    <h2 className='artist-name'>{userDetails.name}</h2>
                    <h6 className='artist-username mb-4 text-subtle'>{userDetails.username}</h6>
                    <h6 className='artist-username mb-4 text-subtle'>{userDetails.email}</h6>
                    <p className='artist-description'>{userDetails.bio}</p>
                </div>
            </Row>
            <Row className='text-center text-white w-100'>
                <div className='artist-profile-tabs'>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('my_songs')}>My songs</Button>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('upload_songs')}>Upload songs</Button>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('edit_profile')}>Edit profile</Button>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('earnings')}>Earnings</Button>
                    <hr className='mb-0' />
                </div>
            </Row>
            <ArtistProfileActiveTab activeTab={activeArtistTab} playNewSong={playNewSong} updatePlayerUIDetails={updatePlayerUIDetails} className='mb-5'/>
        </div>
    )
}

export default ArtistProfile