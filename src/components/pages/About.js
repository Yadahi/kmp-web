import React from "react";

import DescriptionSection from "../IntroSection/DescriptionSection";
import BreakerElement from "../objects/BreakerIcon";
import SectionCardPlain from "../Section/SectionCardPlain";
import SectionCardMedia from "../Section/SectionCardMedia";
import { contentData } from "../IntroSection/ContentData";
import Partners from "../Partners";

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
          <Partners />
        </div>
      </div>
    </>
  );
}

export default About;
