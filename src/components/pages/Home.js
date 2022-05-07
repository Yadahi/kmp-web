import React from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import SectionLayout from "../Section/SectionLayout";
import {
  homeObjAbout,
  homeObjContact,
  homeObjDonate,
} from "../InfoSection/Data";

function Home() {
  return (
    <>
      <HeroSection />
      <SectionLayout {...homeObjAbout} />
      <Cards />
      <SectionLayout {...homeObjDonate} reverse={true} />
      <SectionLayout {...homeObjContact} bgColor="red-400" />
    </>
  );
}

export default Home;
