import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/artist-songs-list.css';
import ArtistSongInstance from './ArtistSongInstance';

function ArtistSongsList() {
  return (
    <Container fluid='true' className='text-white'>
        <div className='artist-songs-list ps-2 pe-2'>
            <ArtistSongInstance artistSongImg={''} artistSongTitle={'Placeholder Title'} artistSongSubtitle={'By subtitle'} />
        </div>
    </Container>
  )
}

export default ArtistSongsList