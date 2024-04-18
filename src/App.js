import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/About';
import Redeem from './components/redeem';
import Working from './components/working';
import Sell from './components/sell';
import Shop from './components/shop';
import Technology from './components/technology';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/redeem" element={<Redeem />} />
        <Route exact path="/working" element={<Working />} />
        <Route exact path="/sell" element={<Sell />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/technology" element={<Technology />} />

      </Routes>

    </Router>

  );
}

export default App;
