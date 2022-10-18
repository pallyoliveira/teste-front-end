import React from 'react';
import AppProvider from './context/provider';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Search from './pages/search';
import Videos from './pages/videos';
import Details from './pages/details';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/search" element={<Search />} />
        {/* <Route exact path="/videos" element={<Videos />} /> */}
        <Route exact path="/search/:id" element={<Details/>} />
      </Routes>
    </AppProvider>
  );
}

export default App;