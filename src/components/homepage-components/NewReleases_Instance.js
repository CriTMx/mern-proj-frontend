import React from 'react'

function NewReleases_Instance({newReleasesImg, newReleasesTitle, newReleasesSubtitle}) {
  return (
    <div className='new-releases-instance text-center me-sm-3 mb-4' id='newReleasesInstance'>
        <img src={newReleasesImg} className='recently-played-instance-img mb-3 mt-4' />
        <p className='new-releases-played-instance-title mb-2'>{newReleasesTitle}</p>
        <p className='new-releases-instance-subtitle'>{newReleasesSubtitle}</p>
    </div>
  )
}

export default NewReleases_Instance