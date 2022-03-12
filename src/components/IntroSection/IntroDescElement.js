import "./IntroDescElement.scss";

import React from "react";

function DescriptionSection() {
  return (
    <div className="intro-description">
      <div className="intro-description__container">
        <div className="intro-description__wrapper">
          <div className="intro-description__row">
            <div className="text-column">
              <h2 className="h3 font-blue">Naš príbeh</h2>
              <p>
                Sme skupina ľudí, ktorá rada venuje energiu zmysluplným
                projektom. S vášňou v srdci podporujeme rozmanitosť a spoločné
                úsilie. Radi prepájame rôzne komunity, vytvárame spolupráce a
                neformálne vzdelávame seba a iných. Naše základy sú pohyb,
                komunita, príroda a sociálno. Keď to premiešame s naším vrodeným
                optimizmom, radosťou zo života, láskou k prírode a zalejeme
                kvalitnými spoluprácami, prichádzajú výsledky.{" "}
              </p>
            </div>
            <div className="img-column">
              <img src="../../images/aboutus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
