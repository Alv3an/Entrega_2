import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import About from './Pages/About/About';

const App = () => {

  return (
    <div> { }
      <Router>
        <div id="div-header">
          <div id="menu">
            <Header />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:gender" element={<CharacterPage />} />
          <Route path="/details/:id" element={<AboutPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
