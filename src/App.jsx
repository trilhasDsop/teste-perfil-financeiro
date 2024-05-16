import React from 'react';
import { HashRouter,Routes, Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Home from './Page/Home/Home';
import Resultado from './Page/Resultado/Resultado';
import User from './Context/dataContext';
import ButtonTop from './Components/Button/ButtonTop';
import ProtectedRoute from './Components/Protected Route/ProtectedRoute';

function App() {
  return (
    <HashRouter>
      <Header />
      <User>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route 
            exact
            path='resultado' 
            element={
              <ProtectedRoute>
                <Resultado />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </User>
      <ButtonTop />
    </HashRouter>
  )
}

export default App
