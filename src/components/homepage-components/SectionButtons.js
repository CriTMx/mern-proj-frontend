import React from 'react'
import { Button } from 'react-bootstrap'
import '../css/section-buttons.css'

function SectionButtons() {
  return (
    <div className='section-buttons mt-md-4 mb-md-4 mt-2 mb-3 d-flex justify-content-lg-center'>
        <Button className='section-button' type='button'>All</Button>
        <Button className='section-button' type='button'>Trending Now</Button>
        <Button className='section-button' type='button'>New Songs</Button>
        <Button className='section-button' type='button'>Moods & Genre</Button>
        <Button className='section-button' type='button'>Top Albums</Button>
        <Button className='section-button' type='button'>Top Artists</Button>
        <Button className='section-button' type='button'>Podcasts</Button>
    </div>
  )
}

export default SectionButtons