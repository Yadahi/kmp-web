import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoIcon, TextIcon } from "./objects/LogoIcons";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

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
              <div className="display-flex">
                <LogoIcon />
                <TextIcon />
              </div>
            </Link>
            {/* contains two components: button and menu */}
            <div className="navbar__menu">
              {/* button */}
              <div className="navbar__button" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              {/* menu */}
              <ul className={click ? "navbar__list active" : "navbar__list"}>
                <li className="navbar__item" id="home">
                  <Link
                    to="/"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    <HomeIcon /> Domov
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/o-nas"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    <PersonIcon /> O nás
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/projekty"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    <FolderSpecialIcon /> Projekty
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/podpor-nas"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    <VolunteerActivismIcon /> Podpor nás
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/pozvi-nas"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    <EmojiPeopleIcon /> Pozvi nás
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link
                    to="/kontakt"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    <EmailIcon /> Kontakt
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
