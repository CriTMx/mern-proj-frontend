import { React, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import SeekerCircle from './media/seeker-circle.png';

import './css/player-ui.css';
import PlayerSongInstace from './PlayerSongInstace';

function PlayerUI() {
  var [playButton, setPlayButton] = useState('play_circle');
  var [musicTime, setMusicTime] = useState(0);

  function calcMusicTime(curTime, totalTime)
  {
    setMusicTime((curTime*100)/totalTime);
  }

  function swapPlayButton()
  {
    setPlayButton(playButton === 'play_circle' ? 'pause_circle' : 'play_circle');
  }

  return (
    <Container fluid='true' className='player-container text-white ps-5 pe-5 pt-4 pb-4'>
        <Row>
            <div className='col-md-4'>
                <PlayerSongInstace playerSongImg={''} playerSongTitle={'Placeholder Title'} playerSongSubtitle={'By subtitle'} />
            </div>
            <div className='col-md-4 d-none d-md-block text-center music-control-container'>
              <div>
                <Button className='music-control-btn me-4'><span className='material-symbols-outlined d-flex align-self-center music-control-icon' id='prevMusicIcon'>skip_previous</span></Button>
                <Button className='music-control-btn me-4' onClick={() => swapPlayButton()}><span className='material-symbols-outlined d-flex align-self-center music-control-icon' id='playMusicIcon'>{playButton}</span></Button>
                <Button className='music-control-btn'><span className='material-symbols-outlined d-flex align-self-center music-control-icon' id='nextMusicIcon'>skip_next</span></Button>
              </div>
              <div className='mt-3'>
                <p className='float-start me-3 song-timer' id='songDurationCurrent'>0:00</p>
                <p className='float-end ms-3 song-timer' id='songDurationTotal'>5:00</p>
                <div className='seeker-bar-container'>
                  <div className='progress seeker-bar' role='progressbar' aria-label='Song progress' aria-valuenow={musicTime} aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style={{'width': {musicTime}}}></div>
                  </div>
                  <img className='seeker-circle' src={SeekerCircle} width={'24px'} height={'24px'} style={{}} />
                </div>
              </div>
            </div>
        </Row>
    </Container>
  )
}



export default PlayerUI