import React from 'react'
import '../css/jumbotron.css'
import { Button } from 'react-bootstrap'

function Jumbotron({songImage, songName, artistName}) {
  return (
    <div className='jumbotron row conatiner-fluid mt-4 mb-4 text-white'>
        <div className='col-md-3 d-flex justify-content-center align-items-center'>
          <img src={songImage} className='jumbotron-img' id='jumbotronImg'/>
        </div>
        <div className='col-md-7 jumbotron-text-col'>
          <p className='jumbotron-header text-uppercase'>Song</p>
          <h1 className='jumbotron-title mt-4 mb-4'>Song Title</h1>
          <p className='jumbotron-subtitle mt-4 mb-4'>Artist Name</p>
          <p className='jumbotron-description'>Jumbotron description text. Stream now on Rhythmix!</p>
          <Button className='jumbotron-button me-md-4 me-2 mb-4' id='jumbotronButton1'>Play</Button>
          <Button className='jumbotron-button btn-white me-md-4 mb-4 ms-2' id='jumbotronButton2'>Add to playlist</Button>
        </div>
        <div className='col-md-2 d-flex justify-content-center align-items-start'>
          <p className='jumbotron-feature-tags mb-3'>Sponsored</p>
        </div>
    </div>
  )
}

export default Jumbotron