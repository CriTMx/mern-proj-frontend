import React from 'react'
import { Row } from 'react-bootstrap'

function PlayerSongInstace({playerSongImg, playerSongTitle, playerSongSubtitle}) {
  return (
    <div className='player-song-instance d-flex align-items-center'>
        <div className='d-none d-md-block'>
            <img src={playerSongImg} className='player-song-instance-img me-4' />
        </div>
        <div className='player-song-instance-text d-flex'>
            <h5 className='player-song-instance-title mb-2'>{playerSongTitle}</h5>
            <p className='player-song-instance-subtitle text-subtle'>{playerSongSubtitle}</p>
        </div>
    </div>
  )
}

export default PlayerSongInstace