import { React, useState, useEffect, useRef } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Howl, Howler } from 'howler';
import './css/player-ui.css';
import PlayerSongInstace from './PlayerSongInstace';

function PlayerUI() {
  var [playButtonIcon, setPlayButtonIcon] = useState('play_circle');
  var [isPlaying, setIsPlaying] = useState(false);
  var [musicTime, setMusicTime] = useState(0);
  var [progress, setProgress] = useState(0);
  var [volume, setVolume] = useState(50);
  var [count, setCount] = useState(0);
  var [playerDisplay, setPlayerDisplay] = useState('shown');

  const sound = useRef(new Howl({ src: ['/music/song.mp3'] }));

  sound.current.on('load', () => {
    console.log("loaded");
    setPlayButtonIcon('play_circle');
    setIsPlaying(false);
    setProgress(0);
    document.getElementById("seeker-bar").value = 0;
    sliderChange();

    updateCurrentDuration();
    updateTotalDuration();
  });

  //called every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      if(isPlaying){
        const sliderElement = document.getElementById("seeker-bar");
        updateCurrentDuration();
        setProgress((prevProgress) => {
          if(sound.current.duration()!=0){
            const newProgress = Math.round((sound.current.seek() / sound.current.duration()) * 100);
            sliderElement.value = newProgress;
            const value = sliderElement.value;
            console.log("value is " + value);
            console.log("progress is " + newProgress);
            sliderElement.style.background = 'linear-gradient(to right, #1877F2 0%, #1877F2 ' + value + '%, #fff ' + value + '%, white 100%)'
            return newProgress;
          }
          return prevProgress;
        })
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);


  useEffect(() => {
    updateCurrentDuration();
    updateTotalDuration();
  }, [isPlaying])

  useEffect(() => {
    console.log(isPlaying);
    isPlaying ? sound.current.play() : sound.current.pause();
    console.log(`sound playing state is ${sound.current.playing()}`);
  }, [isPlaying]);

  useEffect(() => {
    sound.current.volume(volume / 100);
  }, [volume])

  function updateCurrentDuration() {
    const currentDurationElement = document.getElementById("songDurationCurrent");

    const currentDuration = sound.current.seek();
    const currentMinutes = Math.floor(currentDuration / 60);
    const currentSeconds = Math.floor(currentDuration - currentMinutes * 60);
    const currentDurationSecondsString = currentSeconds.toString();
    const finalCurrentDurationSecondsString = currentDurationSecondsString.length > 1 ? currentDurationSecondsString : "0" + currentDurationSecondsString;
    currentDurationElement.innerHTML = `${currentMinutes}:${finalCurrentDurationSecondsString}`;
  }

  function updateTotalDuration() {
    const totalDurationElement = document.getElementById("songDurationTotal");
    const totalDuration = sound.current.duration();
    const totalMinutes = Math.floor(totalDuration / 60);
    const totalSeconds = Math.floor(totalDuration - totalMinutes * 60);
    const totalDurationSecondsString = totalSeconds.toString();
    const finalTotalDurationSecondsString = totalDurationSecondsString.length > 1 ? totalDurationSecondsString : "0" + totalDurationSecondsString;
    totalDurationElement.innerHTML = `${totalMinutes}:${finalTotalDurationSecondsString}`;
  }

  function sliderChange() {
    const sliderElement = document.getElementById("seeker-bar");
    console.log('this called');
    var value = sliderElement.value;
    sound.current.seek((value / 100) * sound.current.duration());
    setProgress(value);
    sliderElement.style.background = 'linear-gradient(to right, #1877F2 0%, #1877F2 ' + value + '%, #fff ' + value + '%, white 100%)'
  }

  function handleVolumeBarChange() {
    const volumeBar = document.getElementById('volumeBar');
    const volumeIcon = document.getElementById('musicVolumeIcon');
    var volumeVal = volumeBar.value;
    setVolume(volumeVal);
    volumeBar.style.background = 'linear-gradient(to right, #1877F2 0%, #1877F2 ' + volumeVal + '%, #fff ' + volumeVal + '%, white 100%)'

    if (volumeVal > 50) {
      volumeIcon.innerHTML = "volume_up";
    }
    else if (volumeVal <= 50 && volumeVal > 0) {
      volumeIcon.innerHTML = "volume_down";
    }
    else {
      volumeIcon.innerHTML = "volume_off";
    }
  }

  function handlePlayButton() {
    setPlayButtonIcon(playButtonIcon === 'play_circle' ? 'pause_circle' : 'play_circle');
    setIsPlaying(isPlaying == false ? true : false);
  }

  function handleFavButtonClick() {
    var favButton = document.getElementById('musicFavHeartIcon');
    favButton.classList.toggle('symbol-filled');
  }

  function handlePlayerUIDisplay()
  {
    var displayButton = document.getElementById('displayButton');
    var playerUI = document.getElementById('playerUI')
    displayButton.classList.toggle('rotate-icon');

    if (playerDisplay === 'shown')
    {
      playerUI.style.bottom = '-130px';
      setPlayerDisplay('hidden');
      return;
    }
    playerUI.style.bottom = '0';
    setPlayerDisplay('shown');
    return;
  }

  function fetchAndPlayNewSong() {
    const songId = '65550ff1d3601b84b682a8c4'; 
    const newSongUrl = `http://localhost:2900/song/${songId}/download`;

    fetch(newSongUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch audio file: ${response.statusText}`);
        }
        return response.blob();
      })
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        
        sound.current.stop();
        sound.current.unload();
    

        // Update the Howl instance with the new audio file
        sound.current = new Howl({ src: [objectURL], format: ['mp3']});

        console.log('prolly updated');
        console.log(objectURL);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <Container fluid='true' className='player-container text-white ps-5 pe-5 pt-4 pb-4' id='playerUI'>
      <Row>
        <div className='col-md-4 col-6'>
          <PlayerSongInstace playerSongImg={''} playerSongTitle={'Placeholder Title'} playerSongSubtitle={'By subtitle'} />
        </div>
        <div className='col-md-4 d-none d-md-block text-center music-control-container'>
          <div>
            <Button className='music-control-btn me-4'><span className='material-symbols-outlined symbol-filled d-flex align-self-center music-control-icon' id='prevMusicIcon'>skip_previous</span></Button>
            <Button className='music-control-btn me-4' onClick={() => handlePlayButton()}><span className='material-symbols-outlined symbol-filled d-flex align-self-center music-control-icon' id='playMusicIcon'>{playButtonIcon}</span></Button>
            <Button className='music-control-btn'><span className='material-symbols-outlined symbol-filled d-flex align-self-center music-control-icon' id='nextMusicIcon'>skip_next</span></Button>
          </div>
          <div className='mt-3 d-flex flex-row align-items-center gap-2'>
            <div className='float-start song-timer' id='songDurationCurrent'>0:00</div>
            <input type='range' onChange={sliderChange} id='seeker-bar' value={progress}></input>
            <div className='float-end song-timer' id='songDurationTotal'>5:00</div>
            <div className='seeker-bar-container'>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-6 d-flex align-items-center justify-content-end text-center music-utility-container'>
          <Button className='music-favorite-button me-md-4 me-2' onClick={() => handleFavButtonClick()}><span className='material-symbols-outlined d-flex align-self-center music-utility-icon mt-0' id='musicFavHeartIcon'>favorite</span></Button>
          <span className="material-symbols-outlined symbol-filled me-2 mt-0" id='musicVolumeIcon'>volume_up</span>
          <input type='range' id='volumeBar' onChange={() => handleVolumeBarChange()} min={0} max={100} value={volume} />
          <Button className='expand-player-ui-btn' id='displayButton' onClick={() => handlePlayerUIDisplay()}><span className='material-symbols-outlined p-0 m-0'>expand_more</span></Button>
        </div>
      </Row>
      <Button onClick={() => fetchAndPlayNewSong()}>Load New Song</Button>
    </Container>
  )
}

export default PlayerUI