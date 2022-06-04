import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Projects from "./components/pages/Projects";
import Article from "./components/ProjectSection/Article.js";
import ScrollToTop from "./components/ScrollToTop";
import Donate from "./components/pages/Donate";
import Contact from "./components/pages/Contact";
import initCookies from "./js/cookieConsent";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initCookies();
  }, []);
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
            <Route path="/podpor-nas" exact element={<Donate />} />
            <Route path="/kontakt" exact element={<Contact />} />
            <Route path="*" exact element={<Home />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
