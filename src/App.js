import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';
import './components/css/body.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArtistUploader from './pages/ArtistUploader';
import Homepage from './pages/Homepage';
import PlayerUI from './components/PlayerUI';
import ArtistProfile from './pages/ArtistProfile';
import ArtistProfileEdit from './pages/ArtistProfileEdit';
import UserProfile from './pages/UserProfile';

function App() {
  var [isPlaying, setIsPlaying] = useState(false);
  var [progress, setProgress] = useState(0);
  var [count, setCount] = useState(0);
  var [playButtonIcon, setPlayButtonIcon] = useState('play_circle');

  const [sound, setSound] = useState(new Howl({ src: ['/music/song.mp3'] }))

  sound.on('load', () => {
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
      if (isPlaying) {
        const sliderElement = document.getElementById("seeker-bar");
        updateCurrentDuration();
        setProgress((prevProgress) => {
          if (sound.duration() != 0) {
            const newProgress = Math.round((sound.seek() / sound.duration()) * 100);
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

  function handlePlayButton() {
    setPlayButtonIcon(playButtonIcon === 'play_circle' ? 'pause_circle' : 'play_circle');
    setIsPlaying(isPlaying == false ? true : false);
  }

  function sliderChange() {
    const sliderElement = document.getElementById("seeker-bar");
    console.log('this called');
    var value = sliderElement.value;
    console.log(`after slider chage ${value} ${sound.duration()} ${(value / 100) * sound.duration() }`);
    sound.seek((value / 100) * sound.duration());
    setProgress(value);
    sliderElement.style.background = 'linear-gradient(to right, #1877F2 0%, #1877F2 ' + value + '%, #fff ' + value + '%, white 100%)'
  }

  function updateCurrentDuration() {
    const currentDurationElement = document.getElementById("songDurationCurrent");

    const currentDuration = sound.seek();
    const currentMinutes = Math.floor(currentDuration / 60);
    const currentSeconds = Math.floor(currentDuration - currentMinutes * 60);
    const currentDurationSecondsString = currentSeconds.toString();
    const finalCurrentDurationSecondsString = currentDurationSecondsString.length > 1 ? currentDurationSecondsString : "0" + currentDurationSecondsString;
    currentDurationElement.innerHTML = `${currentMinutes}:${finalCurrentDurationSecondsString}`;
  }

  function updateTotalDuration() {
    const totalDurationElement = document.getElementById("songDurationTotal");
    const totalDuration = sound.duration();
    const totalMinutes = Math.floor(totalDuration / 60);
    const totalSeconds = Math.floor(totalDuration - totalMinutes * 60);
    const totalDurationSecondsString = totalSeconds.toString();
    const finalTotalDurationSecondsString = totalDurationSecondsString.length > 1 ? totalDurationSecondsString : "0" + totalDurationSecondsString;
    totalDurationElement.innerHTML = `${totalMinutes}:${finalTotalDurationSecondsString}`;
  }

  function fetchAndPlayNewSong(songId) {
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

        sound.stop();
        sound.unload();


        // Update the Howl instance with the new audio file
        setSound(new Howl({ src: [objectURL], format: ['mp3'] }));

        console.log('prolly updated');
        console.log(objectURL);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/artist_upload' element={<ArtistUploader />} />
          <Route path='home' element={<Homepage />} />
          <Route path='/artist_profile' element={<ArtistProfile playNewSong={fetchAndPlayNewSong} />}/>
          <Route path='/artist_profile/edit' element={<ArtistProfileEdit />} />
          <Route path='/user_profile' element={<UserProfile />} />
        </Routes>
        <Footer />
        <PlayerUI isPlaying={isPlaying} updateCurrentDuration={updateCurrentDuration} updateTotalDuration={updateTotalDuration} playButtonIcon={playButtonIcon} handlePlayButton={handlePlayButton} sliderChange={sliderChange} progress={progress} sound={sound}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
