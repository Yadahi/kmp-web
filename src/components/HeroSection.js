import React from "react";

import { useNavigate } from "react-router-dom";
import heroImg from "../images/hero-section-img.png";

function HeroSection() {
  let navigate = useNavigate();
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
            <button
              className="button"
              onClick={() => {
                navigate("/o-nas");
              }}
            >
              Viacej
            </button>
          </div>
          <div className="hero-section__right">
            {/* <img scr={heroImg} alt="hero" /> */}
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </div>
    // <div className="hero-container">
    //   <div className="hero-container__wrapper">
    //     <div className="hero-container__title">
    //       <h1 className="h1">
    //         KEĎ MOŽEM <span>POMOŽEM</span>
    //       </h1>
    //     </div>
    //     <div className="hero-container__description">
    //       <p className="text--red">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
    //         ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    //         tempor incididunt ut labore et dolore magna aliqua.
    //       </p>
    //     </div>
    //     <div className="hero-btns">
    //       <Button
    //         className="btns"
    //         buttonStyle="btn--primary"
    //         buttonSize="btn--medium"
    //       >
    //         GET STARTED
    //       </Button>
    //       <Button
    //         className="btns"
    //         buttonStyle="btn--primary"
    //         buttonSize="btn--medium"
    //       >
    //         WATCH TRAILER
    //       </Button>
    //     </div>
    //     <div className="hero-container__image">
    //       <img src={heroImg} alt="kids" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeroSection;
