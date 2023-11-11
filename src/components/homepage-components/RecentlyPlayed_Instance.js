import React from 'react'

function RecentlyPlayed_Instance({recentlyPlayedImg, recentlyPlayedTitle, recentlyPlayedSubtitle}) {
  return (
    <div className='recently-played-instance text-center me-sm-3 mb-4' id='recentlyPlayedInstance'>
        <img src={recentlyPlayedImg} className='recently-played-instance-img mb-3 mt-4' />
        <p className='recently-played-instance-title mb-2'>{recentlyPlayedTitle}</p>
        <p className='recently-played-instance-subtitle'>{recentlyPlayedSubtitle}</p>
    </div>
  )
}

export default RecentlyPlayed_Instance