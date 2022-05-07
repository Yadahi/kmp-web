import React from "react";
import { Link } from "react-router-dom";

import BreakerElement from "../objects/BreakerIcon";

function Donate() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--red text--color--white">
          Podpor nas
        </h1>
        <div className="layout__inner">
          <h2 className="text--center text--color--tertiary">
            Ako nás môžete podporiť ?
          </h2>
          <div className="layout__section donate">
            <div className="donate__left">
              <h3>
                Zapojte sa do našich{" "}
                <strong>
                  <Link to="/projekty">akcií</Link>
                </strong>
              </h3>
              <p>&nbsp;</p>
              <h3>
                Zúčastnite sa s vašou firmou / zamestnávateľom nášho{" "}
                <a
                  href="https://www.facebook.com/events/2165929666972224/"
                  target="_blank"
                >
                  futsalového turnaja
                </a>
              </h3>
            </div>
            <div className="donate__right">
              <img src="../../images/img-donate.png " alt="" />
            </div>
          </div>
          <BreakerElement />
          <div className="layout__section donate">
            <div className="donate__left">
              <img
                className="donate__img"
                src="../../images/img-donate-second.png "
                alt=""
              />
            </div>
            <div className="donate__right">
              <h3>
                Darujte priamo na náš{" "}
                <a
                  href="https://ib.fio.sk/ib/transparent?a=2701658592"
                  target="_blank"
                >
                  transparentný účet
                </a>
              </h3>
              <p>
                <strong>Číslo účtu:</strong>
              </p>
              <h4 className="text--color--red">
                IBAN: SK19 8330 0000 0027 0165 8592
              </h4>
              <p>&nbsp;</p>
              <h3>
                Venujte nám <span className="text--color--red">2%</span> z dane
              </h3>
            </div>
          </div>
          <BreakerElement />
          <h2 className="text--center text--color--tertiary">
            Ďakujeme &#10084;
          </h2>
          <div className="layout__partners partners margin-top-1">
            <img
              src="../../images/partnery-1.png"
              alt=""
              className="partners__img img-1"
            />
            <img
              src="../../images/partnery-2.png"
              alt=""
              className="partners__img img-2"
            />
            <img
              src="../../images/partnery-3.png"
              alt=""
              className="partners__img img-3"
            />
            <img
              src="../../images/partnery-4.jpg"
              alt=""
              className="partners__img img-4"
            />
            <img
              src="../../images/partnery-5.jpg"
              alt=""
              className="partners__img img-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
