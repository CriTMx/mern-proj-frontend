import React from 'react'
import ArtistUploader from '../../pages/ArtistUploader'
import ArtistSongsList from './ArtistSongsList'
import ArtistProfileEdit from '../../pages/ArtistProfileEdit'
import ArtistEarnings from './ArtistEarnings'

function ArtistProfileActiveTab({ activeTab, playNewSong, updatePlayerUIDetails }) {
  return (
    <div className='artist-active-tab-container pt-5 pb-5'>
      {activeTab == 'my_songs' && <ArtistSongsList playNewSong={playNewSong} updatePlayerUIDetails={updatePlayerUIDetails}/>}
      {activeTab == 'upload_songs' && <ArtistUploader />}
      {activeTab == 'edit_profile' && <ArtistProfileEdit />}
      {activeTab == 'earnings' && <ArtistEarnings />}
    </div>
  )
}

export default ArtistProfileActiveTab