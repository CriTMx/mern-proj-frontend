import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import '../components/css/all-songs.css';
import AllSongs_Instance from '../components/AllSongs_Instance';


function AllSongs({ playNewSong}) {

  const [songsData, setSongsData] = useState([]);

  function updateSongsData() {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/song/all`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setSongsData(data.songs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    updateSongsData();
  }, [])

  return (
    <Container fluid='true' className='all-songs-container text-white p-5'>
        <h3 className='all-songs-header mb-5'>All songs</h3>
        <div className='all-songs-list d-flex flex-wrap justify-content-center'>
        {
          songsData.map((song) => (
            <AllSongs_Instance key={song._id} songId={song.songstorage_id} songImg={song.thumbnail} songTitle={song.title} songSubtitle={`By ${song.artist}`} playNewSong={playNewSong}/>
          ))
        }
        </div>
    </Container>
  )
}

export default AllSongs