import React from 'react'


function RecArtists_Instance(artistimage, artistname) {

    var artistname = artistname.toString()

    return (
        <div className='rec-artists-instance text-center text-white'>
            <img src={artistimage} width={'100px'} height={'100px'} className='mb-3 rec-artists-instance-img'/>
            <p className='rec-artists-instance-text'>{artistname}</p>
        </div>
    )
}

export default RecArtists_Instance