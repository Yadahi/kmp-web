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
      <SectionLayout {...homeObjAbout} reverse={true} />
      <Cards />
      <SectionLayout {...homeObjDonate} />
      <SectionLayout
        {...homeObjContact}
        bgColor="red-400"
        reverse={true}
        btnColor="red"
      />
    </>
  );
}

export default Home;
