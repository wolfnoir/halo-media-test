import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Releases from './components/Releases';
import Tour from './components/Tour';
import Videos from './components/Videos';
import Store from './components/Store';
import Photos from './components/Photos';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Releases />
      <Tour />
      <Videos />
      <Store />
      <Photos />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
