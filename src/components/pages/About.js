import React from "react";

import IntroSection from "../IntroSection/IntroElement";
import DescriptionSection from "../IntroSection/IntroDescElement";
import IntroValues from "../IntroSection/IntroValues";
import BreakerElement from "../objects/BreakerIcon";

function About() {
  return (
    <>
      <div>
        <h1 className="h1 page-header bg-yellow font-blue">
          Keď môžem predstavím sa
        </h1>
      </div>
      <DescriptionSection />
      <BreakerElement />
      <IntroValues />
      <BreakerElement />
      <IntroSection />
    </>
  );
}

export default About;
