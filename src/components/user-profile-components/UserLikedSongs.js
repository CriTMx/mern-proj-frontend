import React from 'react'
import { Container } from 'react-bootstrap'
import UserLikedSongInstance from './UserLikedSongInstance'

function UserLikedSongs() {
    return (
        <Container fluid='true' className='user-liked-songs-container'>
            <div className='user-liked-songs-list'>
                <UserLikedSongInstance userLikedSongImg={''} userLikedSongTitle={'Placeholder Title'} userLikedSongSubtitle={'By subtitle'}/>
                <UserLikedSongInstance userLikedSongImg={''} userLikedSongTitle={'Placeholder Title'} userLikedSongSubtitle={'By subtitle'}/>
                <UserLikedSongInstance userLikedSongImg={''} userLikedSongTitle={'Placeholder Title'} userLikedSongSubtitle={'By subtitle'}/>
                <UserLikedSongInstance userLikedSongImg={''} userLikedSongTitle={'Placeholder Title'} userLikedSongSubtitle={'By subtitle'}/>
                <UserLikedSongInstance userLikedSongImg={''} userLikedSongTitle={'Placeholder Title'} userLikedSongSubtitle={'By subtitle'}/>
            </div>
        </Container>
    )
}

export default UserLikedSongs