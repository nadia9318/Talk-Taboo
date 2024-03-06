import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recent from './pages/Recent';
import Community from './pages/Community';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Settings from './pages/Settings'
import Navbar from './components/Navbar';

function App() {
  return (

    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}




//function App() {
  //return (
   // <div className="App">
     // <header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
       // <p>
       //   Edit <code>src/App.js</code> and save to reload.
       // </p>
       // <a
       //   className="App-link"
       //   href="https://reactjs.org"
       //   target="_blank"
       //   rel="noopener noreferrer"
      //  >
      //    Learn React
      //  </a>
     //</header>
  //  </div>
 /// );
//}

export default App;
