import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ArtistSongInstance({artistSongImg, artistSongTitle, artistSongSubtitle}) {
  return (
    <div className='artist-song-instance text-center me-sm-3 mb-4' id='artistSongInstance'>
        <div className='artist-song-img-container'>
          <img src={artistSongImg} className='artist-song-instance-img mb-3 mt-4' />
          <Button className='artist-song-play-btn'><span className='material-symbols-outlined symbol-filled'>play_circle</span></Button>
          <Button className='artist-song-edit-btn'><span className='material-symbols-outlined symbol-filled'>edit</span></Button>
        </div>
        <p className='artist-song-played-instance-title mb-2'>{artistSongTitle}</p>
        <p className='artist-song-instance-subtitle text-subtle'>{artistSongSubtitle}</p>
    </div>
  )
}

export default ArtistSongInstance