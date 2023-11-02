import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Container from './components/Container';

import './components/css/body.css';
import './components/css/container.css';
import './components/css/form.css'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
