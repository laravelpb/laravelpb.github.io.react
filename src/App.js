import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Meetups from './components/Meetups';
import Volunteers from './components/Volunteers'; 
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Meetups />
      <Volunteers />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
