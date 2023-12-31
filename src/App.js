import './App.css';
import Login from './components/login/Login';
import LogOut from './components/Logout/Logout';
import Profile from './components/profile/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './chiru.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' width={150} height={150}></img>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path='/authorize' element={[<LogOut />, <Profile />]}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
