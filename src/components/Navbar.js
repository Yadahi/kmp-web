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
        <div className="layout__navigation">
          <div className="navbar__container ">
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
                    to="/o-nas"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    O nás
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/projekty"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    Projekty
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/podpor-nas"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    Podpor nás
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/kontakt"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
