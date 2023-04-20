import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Welcome from './components/Welcome/Welcome';
import Game from './components/Game';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/game' element={<Game />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
