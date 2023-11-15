import React from 'react'
import ArtistUploader from '../../pages/ArtistUploader'
import ArtistSongsList from './ArtistSongsList'

function ArtistProfileActiveTab({activeTab}) {
  return (
    <div className='artist-active-tab-container pt-5 pb-5'>
        {activeTab == 'my_songs' && <ArtistSongsList />}
        {activeTab == 'upload_songs' && <ArtistUploader />}
    </div>
  )
}

export default ArtistProfileActiveTab