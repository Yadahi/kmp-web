import React from "react";
import { LogoIcon, TextIcon } from "./objects/LogoIcons";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="layout__footer footer footer--bg-color--secondary">
      <div className="footer__navigation ">
        <Link to="/">O nás</Link>
        <Link to="/">Projekty</Link>
        <Link to="/">Objednaj</Link>
        <Link to="/">Podpor nás</Link>
        <small className="website-rights">Keď môžem pomôžem © 2022</small>
      </div>
      <div className="footer__address">
        <h4>Kontakt</h4>
        <p>Keď môžem pomôžem</p>
        <p>Moldavská 1164/9</p>
        <p>04011 Košice</p>
        <p>IČO: 51278561</p>
      </div>
      <div className="footer__icons">
        <Link to="/" className="logo__footer">
          <LogoIcon color="tertiary" />
          <TextIcon color="tertiary" />
        </Link>

        <div className="social-icon">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </Link>
          <Link
            className="social-icon-link linkedin"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </Link>
        </div>
      </div>
    </div>
    // <div className="footer__container bg-yellow">
    //   <div className="footer__wrapper">
    //     <div className="footer-link-items">
    //       {/* <h2>About us</h2> */}
    //       <Link to="/">O nás</Link>
    //       <Link to="/">Projekty</Link>
    //       <Link to="/">Objednaj</Link>
    //       <Link to="/">Podpor nás</Link>
    //     </div>
    //     <div className="footer-link-items">
    // <h2>Kontakt</h2>
    // <p>Keď môžem pomôžem</p>
    // <p>Moldavská 1164/9</p>
    // <p>04011 Košice</p>
    // <p>IČO: 51278561</p>
    //     </div>
    //     <div className="footer-link-items">
    // <div className="social-media-wrap">
    //   {/* <small className="website-rights">Keď môžem pomôžem © 2022</small> */}
    //   <div className="footer-logo">
    //     <Link to="/" className="social-logo">
    //       <img src={logo} alt="logo" />
    //       <img src={text} alt="text" />
    //     </Link>
    //   </div>
    //   <div className="social-icons">
    //     <Link
    //       className="social-icon-link facebook"
    //       to="/"
    //       target="_blank"
    //       aria-label="Facebook"
    //     >
    //       <i className="fab fa-facebook-f" />
    //     </Link>
    //     <Link
    //       className="social-icon-link instagram"
    //       to="/"
    //       target="_blank"
    //       aria-label="Instagram"
    //     >
    //       <i className="fab fa-instagram" />
    //     </Link>
    //     <Link
    //       className="social-icon-link youtube"
    //       to="/"
    //       target="_blank"
    //       aria-label="Youtube"
    //     >
    //       <i className="fab fa-youtube" />
    //     </Link>
    //     <Link
    //       className="social-icon-link twitter"
    //       to="/"
    //       target="_blank"
    //       aria-label="Twitter"
    //     >
    //       <i className="fab fa-twitter" />
    //     </Link>
    //     <Link
    //       className="social-icon-link linkedin"
    //       to="/"
    //       target="_blank"
    //       aria-label="LinkedIn"
    //     >
    //       <i className="fab fa-linkedin" />
    //     </Link>{" "}
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
