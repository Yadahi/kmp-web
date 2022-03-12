import React from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import CardsSecond from "../CardsSecond";
import Footer from "../Footer";
import InfoSection from "../InfoSection";
import { homeObjAbout, homeObjHire, homeObjDonate } from "../InfoSection/Data";

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjAbout}/>
      <Cards />
      <InfoSection {...homeObjHire}/>
      <InfoSection {...homeObjDonate}/>
      <Footer />
    </>
  );
}

export default Home;
