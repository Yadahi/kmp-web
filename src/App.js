import React from "react";
// import './App.scss';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
