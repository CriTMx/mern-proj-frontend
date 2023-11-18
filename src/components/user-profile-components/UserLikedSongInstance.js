import React from 'react'
import { Button, Container } from 'react-bootstrap';
import '../css/user-liked-song-instance.css'

function UserLikedSongInstance({userLikedSongImg, userLikedSongTitle, userLikedSongSubtitle}) {
    return (
        <div className='user-liked-song-instance text-center me-sm-3 mb-4' id='userLikedSongInstance'>
            <div className='user-liked-song-img-container'>
                <img src={userLikedSongImg} className='user-liked-song-instance-img mb-3 mt-4' />
                <span className='material-symbols-outlined symbol-filled mb-0' id='userLikedIcon'>favorite</span>
                <Button className='user-liked-song-play-btn'><span className='material-symbols-outlined symbol-filled' onClick={() => {}}>play_circle</span></Button>
            </div>
            <p className='user-liked-song-played-instance-title mb-2'>{userLikedSongTitle}</p>
            <p className='user-liked-song-instance-subtitle text-subtle'>{userLikedSongSubtitle}</p>
        </div>
  )
}

export default UserLikedSongInstance