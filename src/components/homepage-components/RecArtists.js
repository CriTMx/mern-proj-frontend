import React from 'react'
import { Container, Row } from 'react-bootstrap'
import RecArtists_Instance from './RecArtists_Instance'
import '../css/homepage-rec-artists.css'

function RecArtists() {
  return (
    <Container fluid='true' className='text-white'>
        <h3 className='rec-artists-title mb-4'>Recommended Artists</h3>
        <Row className='d-flex justify-content-center'>
            <div className='col-4 d-lg-flex p-0 justify-content-around'>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
            </div>
            <div className='col-4 d-lg-flex p-0 justify-content-around'>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
            </div>
            <div className='col-4 d-lg-flex p-0 justify-content-around'>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
                <RecArtists_Instance artistimage='' artistname='Placeholder'/>
            </div>
        </Row>
    </Container>
  )
}

export default RecArtists