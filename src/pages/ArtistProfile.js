import { React, useState } from 'react'
import '../components/css/artist-profile.css';
import { Button, Row } from 'react-bootstrap';
import ArtistProfileActiveTab from '../components/artist-profile-components/ArtistProfileActiveTab';

function ArtistProfile() {

    var [activeArtistTab, setActiveArtistTab] = useState('my_songs');

    return (
        <div className='artist-profile-container'>
            <img className='artist-profile-banner w-100' src={''} />
            <Row className=''>
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
                    <img className='artist-picture mb-0' src={''} />
                </div>
                <div className='col-5 col-md-4 d-flex justify-content-end'>
                    <Button className='artist-profile-options me-md-5 me-2'>...</Button>
                </div>
            </Row>
            <Row>
                <div className='artist-text text-white text-center'>
                    <h2 className='artist-name'>Artist Name</h2>
                    <h6 className='artist-username mb-4 text-subtle'>Artist_username</h6>
                    <p className='artist-description'>Placeholder artist description (longform)</p>
                </div>
            </Row>
            <Row className='text-center text-white'>
                <div className='artist-profile-tabs'>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('my_songs')}>My songs</Button>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('upload_songs')}>Upload songs</Button>
                    <Button className='artist-profile-tab' onClick={() => setActiveArtistTab('earnings')}>Earnings</Button>
                    <hr className='mb-0' />
                </div>
            </Row>
            <ArtistProfileActiveTab activeTab={activeArtistTab} className='mb-5'/>
        </div>
    )
}

export default ArtistProfile