import React from 'react';
import './App.css';
import AppProvider from './context/provider';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Search from './pages/search';
import Details from './pages/details';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </AppProvider>
  );
}

export default App;