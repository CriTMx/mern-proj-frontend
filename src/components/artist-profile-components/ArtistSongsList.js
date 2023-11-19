import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../css/artist-songs-list.css';
import ArtistSongInstance from './ArtistSongInstance';

function ArtistSongsList({ playNewSong, updatePlayerUIDetails }) {

  const [songsData, setSongsData] = useState([]);

  function updateSongsData(){
    fetch(`${process.env.REACT_APP_BACKEND_URI}:2900/song/artist_uploaded`, {
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
  }

  useEffect(() => {
    updateSongsData();
  },[])

  return (
    <Container fluid='true' className='text-white'>
      <div className='artist-songs-list ps-2 pe-2'>
        {
          songsData.map((song) => (
            <ArtistSongInstance key={song._id} songId={song.songstorage_id} artistSongImg={song.thumbnail} artistSongTitle={song.title} artistSongSubtitle={`By ${song.artist}`} playNewSong={playNewSong} updateSongsData={updateSongsData} updatePlayerUIDetails={updatePlayerUIDetails} />
          ))
        }
      </div>
    </Container>
  )
}

export default ArtistSongsList