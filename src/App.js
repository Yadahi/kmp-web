import React from "react";
// import './App.scss';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Projects from "./components/pages/Projects";
import SignUp from "./components/pages/SignUp.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
