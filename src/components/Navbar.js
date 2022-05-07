import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import text from "../images/text.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container layout__inner">
          {/* navigation logo */}
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" style={{ marginRight: "10" }} />
            <img src={text} alt="text" />
          </Link>
          {/* contains two components: button and menu */}
          <div className="navbar__menu">
            {/* button */}
            <div className="navbar__button" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            {/* menu */}
            <ul className={click ? "navbar__list active" : "navbar__list"}>
              <li className="navbar__item">
                <Link
                  to="/about"
                  className="navbar__link"
                  onClick={closeMobileMenu}
                >
                  O nás
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="/projects"
                  className="navbar__link"
                  onClick={closeMobileMenu}
                >
                  Projekty
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="/sign-up"
                  className="navbar__link"
                  onClick={closeMobileMenu}
                >
                  Objednaj
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="/sign-up"
                  className="navbar__link"
                  onClick={closeMobileMenu}
                >
                  Podpor nás
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
