import "./IntroValues.scss";
import sportIcon from "../../images/icons/sport-icon.svg";
import cinemaIcon from "../../images/icons/cinema-icon.svg";
import beesIcon from "../../images/icons/bees-icon.svg";

import React from "react";

function IntroValues() {
  return (
    <div className="intro-values">
      <div className="intro-values__container">
        <div className="intro-values__wrapper">
          <h2 className="h2 font-blue">Nasou misiou je pomoct</h2>
          <div className="intro-values__row">
            <div className="intro-values__column">
              <div className="intro-values__img">
                <img src={sportIcon} alt="" />
              </div>
              <div className="intro-values__title">
                <h3 class="h3 font-blue">Šport</h3>
              </div>
              <div className="intro-values__description">
                <p>Zorganizovali sme 10 sportovych aktivit</p>
              </div>
            </div>
            <div className="intro-values__column">
              <div className="intro-values__img">
                <img src={beesIcon} alt="" />
              </div>
              <div className="intro-values__title">
                <h3 class="h3 font-blue">Včely</h3>
              </div>
              <div className="intro-values__description">
                <p>Osadili sme niekolko ulov </p>
              </div>
            </div>
            <div className="intro-values__column">
              <div className="intro-values__img">
                <img src={cinemaIcon} alt="" />
              </div>
              <div className="intro-values__title">
                <h3 class="h3 font-blue">Jeden Svet</h3>
              </div>
              <div className="intro-values__description">
                <p>
                  Zorganizovali sme 2 rocniky filmoveho festivalu venovany
                  ludskym pravam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroValues;
