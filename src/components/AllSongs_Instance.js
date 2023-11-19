import React from 'react'
import { Button } from 'react-bootstrap'

function AllSongs_Instance({songImg, songTitle, songSubtitle}) {
  return (
    <div className='song-instance text-center me-sm-3 mb-4' id='songInstance'>
        <img src={songImg} className='song-instance-img mb-3 mt-4' />
        <p className='song-instance-title mb-2'>{songTitle}</p>
        <p className='song-instance-subtitle'>{songSubtitle}</p>
        <Button className='song-play-btn'><span className='material-symbols-outlined symbol-filled'>play_circle</span></Button>
    </div>
  )
}

export default AllSongs_Instance