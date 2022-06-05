import React from "react";
import { Link } from "react-router-dom";

import BreakerElement from "../objects/BreakerIcon";

function Donate() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--secondary text--color--gl-red">
          Keď môžeš podporíš
        </h1>
        <div className="layout__inner">
          <h3 className="text--center text--color--tertiary">
            Ako nás môžete podporiť ?
          </h3>
          <p className="donate__annotation">
            Ak máš nejaký ten finančný prebytok a hľadáš, kde by si ho rozumne
            daroval, ponúkame ti možnosť. Dokonca viacero. Môžeš nám poslať
            jednorázovú platbu priamo na náš transparentný účet :
          </p>
          <div className="layout__donate donate">
            <div className="donate__left">
              <p>
                Môžeš nám poslať jednorázovú platbu priamo na náš{" "}
                <a
                  href="https://ib.fio.sk/ib/transparent?a=2701658592"
                  target="_blank"
                >
                  transparentný účet
                </a>
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Číslo účtu:</strong>
              </p>
              <h4 className="text--color--gl-red">
                IBAN: SK19 8330 0000 0027 0165 8592
              </h4>
              <p>&nbsp;</p>
              <p>
                Venuj nám <span className="text--color--gl-red">2%</span> z
                dane.
              </p>
              <p>&nbsp;</p>
              <p>
                Zapojte sa do našich <Link to="/projekty"> akcií</Link>.
              </p>
            </div>
            <div className="donate__right donate__img">
              <img
                src="../../images/img-donate.png "
                alt=""
                className="donate__img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
