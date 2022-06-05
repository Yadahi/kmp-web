import React from "react";
import BreakerElement from "../objects/BreakerIcon";

function Invite() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--gl-red page-header--color--gl-white">
          Pozvi si nás
        </h1>
        <div className="layout__inner">
          <img className="about__img" src="../../images/aboutus.png" />
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
        </div>
        <BreakerElement />

        <div className="layout__inner layout__project">
          {/* {articles.map((article) => {
            return (
              <Card
                key={article.id}
                image={article.gallery[0].image}
                text={article.text}
                path={`/projekty/${article.id}`}
                title={article.title}
              />
            );
          })} */}
        </div>
      </div>
    </>
  );
}

export default Invite;
