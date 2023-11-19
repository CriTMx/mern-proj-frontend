import React from 'react'
import { Container } from 'react-bootstrap'
import '../components/css/all-songs.css';
import AllSongs_Instance from '../components/AllSongs_Instance';

function AllSongs() {
  return (
    <Container fluid='true' className='all-songs-container text-white p-5'>
        <h3 className='all-songs-header mb-5'>All songs</h3>
        <div className='all-songs-list d-flex flex-wrap justify-content-center'>
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
            <AllSongs_Instance />
        </div>
    </Container>
  )
}

export default AllSongs