import React from 'react';

import { AboutUs, Chef, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    <Chef />
    {/* <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;
