import React from 'react';

import './App.css';
import Router from './Route'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/shared/Header';
import Banner from './components/dashboard/Banner';

import Feedback from './components/shared/Feedback';
import Connect from './components/shared/Connect';
import Footer from './components/shared/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Banner />

          <Router />

          <Feedback />
          <Connect />
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
