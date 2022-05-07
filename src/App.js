import React from "react";
// import './App.scss';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Projects from "./components/pages/Projects";
import SignUp from "./components/pages/SignUp.js";
import ErrorPage from "./components/pages/ErrorPage.js";
import Article from "./components/ProjectSection/Article.js";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/o-nas" exact element={<About />} />
            <Route path="/projekty" exact element={<Projects />} />
            <Route path="/projekty/:id" exact element={<Article />} />
            <Route path="/podpor-nas" exact element={<SignUp />} />
            <Route path="/kontakt" exact element={<SignUp />} />
            <Route path="*" exact element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
