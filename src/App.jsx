import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Layout/Header/Header';
import { Home } from './Page/Home/Home';
import { Resultado } from './Page/Resultado/Resultado';
import { Playlist } from './Page/Playlist/Playlist';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='resultado' element={<Resultado />} />
        <Route path='playlist' element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
