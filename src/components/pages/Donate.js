import React from "react";
import { Link } from "react-router-dom";

import BreakerElement from "../objects/BreakerIcon";

function Donate() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--red text--color--white">
          Podpor nás
        </h1>
        <div className="layout__inner">
          <h2 className="text--center text--color--tertiary">
            Ako nás môžete podporiť ?
          </h2>
          <div className="layout__donate donate">
            <div className="donate__left">
              <p>
                Zapojte sa do našich <Link to="/projekty"> akcií</Link> alebo sa
                zúčastnite s vašou firmou / zamestnávateľom nášho{" "}
                <a
                  href="https://www.facebook.com/events/2165929666972224/"
                  target="_blank"
                >
                  futsalového turnaja
                </a>
              </p>
            </div>
            <div className="donate__right donate__img">
              <img
                src="../../images/img-donate.png "
                alt=""
                class="donate__img"
              />
            </div>
          </div>
        </div>
        <div className="layout background--bg-tints--primary-200">
          <div className="layout__inner">
            <div className="layout__donate donate">
              <div className="donate__left donate__img">
                <img
                  className="donate__img"
                  src="../../images/img-donate-second.png "
                  alt=""
                />
              </div>
              <div className="donate__right">
                <p>
                  Darujte priamo na náš{" "}
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
                <h4 className="text--color--red">
                  IBAN: SK19 8330 0000 0027 0165 8592
                </h4>
                <p>&nbsp;</p>
                <p>
                  Venujte nám <span className="text--color--red">2%</span> z
                  dane
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="layout__inner">
          <h2 className="text--center text--color--tertiary">
            Ďakujeme partnerom &#10084;
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
