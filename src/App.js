import {BrowserRouter, Routes, Route} from 'react-router-dom';
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


function App() {
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
          <Route path='/artist_profile' element={<ArtistProfile />} />
          <Route path='/artist_profile/edit' element={<ArtistProfileEdit />} />
        </Routes>
        <Footer />
        <PlayerUI />
      </div>
    </BrowserRouter>
  );
}

export default App;
