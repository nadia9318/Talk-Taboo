import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recent from './pages/Recent';
import Community from './pages/Community';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles';
import './global.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyles />
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
    </>
  );
}

export default App;
