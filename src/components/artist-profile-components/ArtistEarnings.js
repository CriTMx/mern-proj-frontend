import React from 'react'
import { Container } from 'react-bootstrap'
import NoEarnings from '../media/no_earnings.png';
import '../css/artist-earnings.css';

function ArtistEarnings() {
  return (
    <Container className='text-white'>
        <h2 className='artist-earnings-header text-start'>Earnings</h2>
        <p className='artist-earnings-header-sub'>Get your earnings and paycheck details here</p>
        <div className='no-earnings p-5 d-flex flex-column justify-content-center align-items-center text-center'>
            <img src={NoEarnings} className='no-earnings-img' />
            <p className='no-earnings-text text-subtle'>Your earnings will appear here when your releases go live</p>
        </div>
    </Container>
  )
}

export default ArtistEarnings