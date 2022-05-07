import React from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import CardsSecond from "../CardsSecond";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import SectionLayout from "../Section/SectionLayout";
import { homeObjAbout, homeObjHire, homeObjDonate } from "../InfoSection/Data";
import SectionCardText from "../Section/SectionCardText";

function Home() {
  return (
    <>
      <HeroSection />
      <SectionLayout {...homeObjAbout} />
      <Cards />
      <SectionLayout {...homeObjDonate} reverse={true} />
      <SectionLayout {...homeObjHire} />
      {/* <InfoSection {...homeObjAbout} />
      <InfoSection {...homeObjHire} />
      <InfoSection {...homeObjDonate} /> */}
    </>
  );
}

export default Home;
