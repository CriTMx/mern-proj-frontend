import React from 'react'

function Populars_Instance({popularsImg, popularsTitle, popularsSubtitle}) {
  return (
    <div className='populars-instance text-center me-sm-3 mb-4' id='popularsInstance'>
        <img src={popularsImg} className='populars-instance-img mb-3 mt-4' />
        <p className='populars-instance-title mb-2'>{popularsTitle}</p>
        <p className='populars-instance-subtitle'>{popularsSubtitle}</p>
    </div>
  )
}

export default Populars_Instance