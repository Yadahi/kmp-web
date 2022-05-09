import React from "react";

import heroSectionImg from "../images/hero-section-boys-wave.png";

function HeroSection() {
  return (
    <div className="layout background--bg-color--primary">
      <div className="layout__inner padding-top-3 padding-bottom-3">
        <div className="layout__hero-section hero-section">
          <div className="hero-section__left">
            <h1 className="hero-section__title">
              KEĎ MOŽEM <span>POMOŽEM</span>
            </h1>
            <p>
              <strong>
                Sme partička nadšencov, ktorí chcú robiť spoločnosti prospešné
                aktivity so smerovaním k udržateľnému a radostnému spôsobu
                života.
              </strong>
            </p>
          </div>
          <div className="hero-section__right">
            <img src={heroSectionImg} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
