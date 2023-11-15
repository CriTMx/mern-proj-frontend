import React from 'react'

function ArtistSongInstance({artistSongImg, artistSongTitle, artistSongSubtitle}) {
  return (
    <div className='artist-song-instance text-center me-sm-3 mb-4' id='artistSongInstance'>
        <img src={artistSongImg} className='artist-song-instance-img mb-3 mt-4' />
        <p className='artist-song-played-instance-title mb-2'>{artistSongTitle}</p>
        <p className='artist-song-instance-subtitle text-subtle'>{artistSongSubtitle}</p>
    </div>
  )
}

export default ArtistSongInstance