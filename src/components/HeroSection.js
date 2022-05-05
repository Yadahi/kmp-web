import React from "react";
import { Button } from "./Button";
import heroImg from "../images/hero-section-img.png";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-container__wrapper">
        <div className="hero-container__title">
          <h1 className="h1">
            KEĎ MOŽEM <span>POMOŽEM</span>
          </h1>
        </div>
        <div className="hero-container__description">
          <p className="text--red">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            WATCH TRAILER
          </Button>
        </div>
        <div className="hero-container__image">
          <img src={heroImg} alt="kids" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
