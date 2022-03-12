import "./IntroElement.scss";
import { Persons } from "./PersonsData";

import React from "react";
import PersonElement from "./PersonElement";

const IntroSection = () => {
  const id = 1;
  const reverse = false;
  const topLine = "Napdis";
  const headlineColor = "color";
  const headline = "headline";
  const description = "description";
  const descriptionColor = "descritptionColor";
  const buttonLabel = "button Label";
  const img = "img";
  const alt = "alt";
  const imgSize = "imgSize";

  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__wrapper">
          <h2 className="h2 font-blue">Naš team &hearts;</h2>
          <p>
            Tu nájdeš všetky dobré duše, ktoré svojou aktivitou prispievajú k
            tomu, aby naše OZ fungovalo a vyvíjalo akúsi aktivitu. Veríme v
            dynamiku teamu a vieme, že raz zatiahne jeden, inokedy druhý, občas
            všetci naraz. Každý vie niečo a spolu vieme takmer všetko.
          </p>
        </div>
        <div className="intro__wrapper intro__wrapper--grid">
          {Persons.map(function (item) {
            return <PersonElement {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
