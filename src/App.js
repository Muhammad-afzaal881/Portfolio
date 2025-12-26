import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Project';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
