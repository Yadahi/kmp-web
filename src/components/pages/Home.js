import React from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import SectionLayout from "../Section/SectionLayout";
import {
  homeObjAbout,
  homeObjContact,
  homeObjDonate,
} from "../Data/SectionData";

function Home() {
  return (
    <>
      <HeroSection />
      <SectionLayout {...homeObjAbout} reverse={true} />
      <Cards />
      <SectionLayout {...homeObjDonate} />
      <SectionLayout
        {...homeObjContact}
        bgColor="gl-red-400"
        reverse={true}
        btnColor="gl-red"
      />
    </>
  );
}

export default Home;
