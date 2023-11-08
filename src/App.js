import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';
import './components/css/body.css';
import './components/css/container-left.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArtistUploader from './pages/ArtistUploader';


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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
