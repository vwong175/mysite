import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';

import { useState, useEffect } from 'react';
import ReachOut from './components/reachOut';

function App() {
  return (
    <div>
      <Home/>
      <About/> {/*TODO - Want to make the about section same height as window screen size*/}

      <ReachOut/>
    </div>
  )
}

export default App;
