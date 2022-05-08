import React from "react";

import IntroSection from "../IntroSection/IntroElement";
import DescriptionSection from "../IntroSection/DescriptionSection";
import IntroValues from "../IntroSection/IntroValues";
import BreakerElement from "../objects/BreakerIcon";
import SectionCardPlain from "../Section/SectionCardPlain";
import SectionCardMedia from "../Section/SectionCardMedia";
import { contentData } from "../IntroSection/ContentData";

function About() {
  const { intro, introEnglish } = contentData;
  const descData = { intro, introEnglish };
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--secondary page-header--color--tertiary">
          Keď môžem predstavím sa
        </h1>
        <div className="layout__inner">
          <DescriptionSection {...descData} />

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
