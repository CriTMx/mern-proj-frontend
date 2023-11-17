import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../css/artist-songs-list.css';
import ArtistSongInstance from './ArtistSongInstance';

function ArtistSongsList() {

  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:2900/song/artist_uploaded', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        setSongsData(data.songs);
      })
      .catch(error => console.error('Error fetching data:', error));
  },[])

  return (
    <Container fluid='true' className='text-white'>
      <div className='artist-songs-list ps-2 pe-2'>
        {
          songsData.map((song) => (
            <ArtistSongInstance key={song.id} artistSongImg={song.thumbnail} artistSongTitle={song.title} artistSongSubtitle={`By ${song.artist}`} />
          ))
        }
      </div>
    </Container>
  )
}

export default ArtistSongsList