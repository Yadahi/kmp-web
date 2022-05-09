import React from "react";

import BreakerElement from "../objects/BreakerIcon";

function Contact() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--secondary text--color--tertiary">
          Kontakt
        </h1>
        <div className="layout__inner padding-bottom-1">
          <p>
            Na našich akciách sú vítaní všetci. Ak sa teda dozvieš o nejakej
            našej akcii, prípadne uvidíš pozvánku tu na stránke alebo na
            facebooku a máš chuť prísť, tak neváhaj a poď. Radi ťa spoznáme a
            môžeš byť súčasťou našich akcií, nech sa týkajú čohokoľvek - športu,
            prírody alebo kultúry. Najlepšie ak donesieš i kamarátov či rodinku.{" "}
          </p>
          <p>&nbsp;</p>
          <p>
            Naša komunita má permanentne dvere otvorené a ak máš chuť a náladu
            podeliť sa o svoj čas s nami, budeme radi. Ak máš nejaké nápady čo
            by si chcel realizovať, prípadne vylepšiť naše akcie a pomôcť nám,
            budeme ešte radšej. Nič nám nerobí väčšiu radosť než spoznávať nové
            dobré srdcia, ktoré majú ochotu robiť niečo pre druhých a teda i pre
            seba. Kľudne nám napíš a my sa ti ozveme.
          </p>
        </div>
        <div className="layout__inner padding-top-1">
          <div className="layout__contact contact">
            <h3 class="contact__title">Kde sídlíme</h3>
            <div className="contact__address">
              <p>
                <strong>Keď môžem pomôžem</strong>
              </p>
              <p>Moldavská 9</p>
              <p>040 11 Košice</p>
              <p>&nbsp;</p>
              <p>IČO: 51278561</p>
              <p>DIČ: 2120949556</p>
            </div>
            <div className="contact__media">
              <span>Email: </span>
              <a href="mailto:kedmozempomozem.oz@gmail.com">
                kedmozempomozem.oz@gmail.com
              </a>
              <div className="footer__icons">
                <div className="social-icon">
                  <a
                    className="social-icon__link facebook"
                    href="https://www.facebook.com/ozkedmozempomozem/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f fa-lg" />
                  </a>
                  <a
                    className="social-icon__link youtube"
                    href="https://www.youtube.com/channel/UCep8_UMzidsC4q8tG2Jk4nw"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <i className="fab fa-youtube fa-lg" />
                  </a>
                  <a
                    className="social-icon__link twitter"
                    href="https://www.twitter.com/KPomozem"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Moldavsk%C3%A1%209%20%20040%2011%20Ko%C5%A1ice&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://fmovies-online.net"></a>
              <br />
              <a href="https://www.embedgooglemap.net"></a>
            </div>
          </div>
          {/* <BreakerElement /> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
