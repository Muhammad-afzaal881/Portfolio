import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Project';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* root redirect */}
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
