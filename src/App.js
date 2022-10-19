import React from 'react';
import AppProvider from './context/provider';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Search from './pages/search';
import Details from './pages/details';


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/search" element={<Search />} />      
        <Route exact path="/search/:id" element={<Details/>} />
      </Routes>
    </AppProvider>
  );
}

export default App;