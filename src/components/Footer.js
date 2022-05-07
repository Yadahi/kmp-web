import React from "react";
import { LogoIcon, TextIcon } from "./objects/LogoIcons";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="layout__footer footer footer--bg-color--secondary">
      <div className="footer__navigation ">
        <span className="footer__navigation--link">
          <Link to="/about">O nás</Link>
        </span>
        <span className="footer__navigation--link">
          <Link to="/projects">Projekty</Link>
        </span>
        <span className="footer__navigation--link">
          <Link to="/">Objednaj</Link>
        </span>
        <span className="footer__navigation--link">
          <Link to="/">Podpor nás</Link>
        </span>
      </div>
      <div className="footer__address">
        <h4>Kontakt</h4>
        <p>Keď môžem pomôžem</p>
        <p>Moldavská 1164/9</p>
        <p>04011 Košice</p>
        <p>IČO: 51278561</p>
        <a href="mailto:kedmozempomozem.oz@gmail.com">
          kedmozempomozem.oz@gmail.com
        </a>
      </div>
      <div className="footer__icons">
        <Link to="/" className="logo__footer">
          <LogoIcon color="red" />
          <TextIcon color="red" />
        </Link>

        <div className="social-icon">
          <a
            className="social-icon__link facebook"
            href="https://www.facebook.com/ozkedmozempomozem/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f fa-lg" />
          </a>
          {/* <a
            className="social-icon__link instagram"
            href="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-lg" />
          </a> */}
          <a
            className="social-icon__link youtube"
            href="https://www.youtube.com/channel/UCep8_UMzidsC4q8tG2Jk4nw"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube fa-lg" />
          </a>
          <a
            className="social-icon__link twitter"
            href="https://www.twitter.com/KPomozem"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter fa-lg" />
          </a>
        </div>
      </div>
      <div className="footer__info">
        <small className="website-rights ">Keď môžem pomôžem © 2022</small>
      </div>
    </div>
  );
}

export default Footer;
