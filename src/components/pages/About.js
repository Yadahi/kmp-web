import React from "react";

import IntroSection from "../IntroSection/IntroElement";
import DescriptionSection from "../IntroSection/IntroDescElement";
import IntroValues from "../IntroSection/IntroValues";
import BreakerElement from "../objects/BreakerIcon";
import SectionCardPlain from "../Section/SectionCardPlain";

function About() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--secondary page-header--color--tertiary">
          Keď môžem predstavím sa
        </h1>
        <div className="layout__inner">
          <SectionCardPlain />
          <DescriptionSection />
          <BreakerElement />
          <IntroValues />
          <BreakerElement />
          <IntroSection />
        </div>
      </div>
    </>
  );
}

export default About;
