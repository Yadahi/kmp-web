import React from "react";
import BreakerElement from "../objects/BreakerIcon";
import Gallery from "../Gallery";
import { SRLWrapper } from "simple-react-lightbox";

function Invite() {
  const galleryInvite = [
    {
      id: 0,
      name: "pozvi-nas",
      image: "../../images/invite/invite-05.jpg",
    },
    {
      id: 1,
      name: "pozvi-nas",
      image: "../../images/invite/invite-02.jpg",
    },
    {
      id: 2,
      name: "pozvi-nas",
      image: "../../images/invite/invite-03.jpg",
    },
    {
      id: 3,
      name: "pozvi-nas",
      image: "../../images/invite/invite-04.jpg",
    },
    {
      id: 4,
      name: "pozvi-nas",
      image: "../../images/invite/invite-01.jpg",
    },
    {
      id: 5,
      name: "pozvi-nas",
      image: "../../images/invite/invite-06.jpg",
    },
    {
      id: 6,
      name: "pozvi-nas",
      image: "../../images/invite/invite-07.jpg",
    },
    {
      id: 7,
      name: "pozvi-nas",
      image: "../../images/invite/invite-08.jpg",
    },
  ];

  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--gl-red page-header--color--gl-white">
          Pozvi si nás
        </h1>
        <div className="layout__inner">
          <img
            className="about__img"
            src="../../images/invite/invite-08-2.jpg"
          />
          <p className="padding-top-1">
            Ak máš chuť vidieť nás v akcii, pozvi si nás a my tebe a kamatátom,
            prípadne vašej firme prídeme pripraviť komunitnú akciu na mieru.
            Máme všetko, čo k dobrej akcii patrí - od grilu cez reprák až po
            mobilné športové pomôcky a umývateľné plastové poháre z tvrdeného
            plastu. Prídeme, navaríme, pustíme muziku, zorganizujeme športové
            aktivity. Snažíme sa pri tom myslieť aj na prírodu, a preto tvoríme
            len minimum odpadu a ten, ktorý vytvoríme aspoň vyseparujeme. Našou
            najväčšou devízou je určite pozitívny duch, ktorým dodáme každej
            akcii ten správny šmrnc. Pri našich akciách dávame šancu zapojiť sa
            do organizácie a práce ľuďom zo znevýhodneného prostredia, a ak si
            nás pozveš, dáš šancu aj im! :) Cena dohodou ;)
          </p>
          <BreakerElement />
          <SRLWrapper>
            <Gallery gallery={galleryInvite} />
          </SRLWrapper>
          {galleryInvite ? null : <BreakerElement />}
        </div>
      </div>
    </>
  );
}

export default Invite;
