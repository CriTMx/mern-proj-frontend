import React from 'react'
import ArtistUploader from '../../pages/ArtistUploader'
import ArtistSongsList from './ArtistSongsList'
import ArtistProfileEdit from '../../pages/ArtistProfileEdit'

function ArtistProfileActiveTab({ activeTab, playNewSong }) {
  return (
    <div className='artist-active-tab-container pt-5 pb-5'>
      {activeTab == 'my_songs' && <ArtistSongsList playNewSong={playNewSong} />}
      {activeTab == 'upload_songs' && <ArtistUploader />}
      {activeTab == 'edit_profile' && <ArtistProfileEdit />}
    </div>
  )
}

export default ArtistProfileActiveTab