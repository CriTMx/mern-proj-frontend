import React from 'react'
import { Container, Row } from 'react-bootstrap'
import RecArtists_Instance from './RecArtists_Instance'
import '../css/homepage-rec-artists.css'

function RecArtists() {
  return (
    <Container fluid='true' className='text-white mb-5'>
      <h3 className='rec-artists-title mb-4'>Recommended Artists</h3>
      <Row className='d-flex justify-content-center'>
        <div className='col-4 d-lg-flex p-0 justify-content-around'>
          <RecArtists_Instance artistimage='https://routenote.com/blog/wp-content/uploads/2022/01/2.-The-Weeknd.jpg'
            artistname='The Weeknd' />
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9'
            artistname='Drake' />
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab67616100005174785f913ef1b4dd22cd8b4e0c'
            artistname='Martin Garrix' />
        </div>
        <div className='col-4 d-lg-flex p-0 justify-content-around'>
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab6761610000e5eb41e4a3b8c1d45a9e49b6de21'
            artistname='Marshmello' />
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c'
            artistname='Alan Walker' />
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952'
            artistname='Ariana Grande' />
        </div>
        <div className='col-4 d-lg-flex p-0 justify-content-around'>
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b'
            artistname='Eminem' />
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3'
            artistname='Arijit Singh' />
          <RecArtists_Instance artistimage='https://i.scdn.co/image/ab67706c0000da84dbd5c5674cb0c9d788bbb8dc'
            artistname='Metro Boomin' />
        </div>
      </Row>
    </Container>
  )
}

export default RecArtists