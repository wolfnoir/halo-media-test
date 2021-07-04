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
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

function App() {  
  if(window.innerWidth > 1024) {
    configureAnchors({offset: -160});
  }
  else {
    configureAnchors({offset: -100});
  }
  return (
    <div>
      <NavBar />
      <ScrollableAnchor id={'home'}>
        <Home/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'releases'}>
        <Releases/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'tour'}>
        <Tour/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'videos'}>
        <Videos/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'store'}>
        <Store/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'photos'}>
        <Photos/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'subscribe'}>
        <Subscribe/>
      </ScrollableAnchor>
      <Footer />
    </div>
  );
}

export default App;
