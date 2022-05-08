import React from "react";

import BreakerElement from "../objects/BreakerIcon";

function Contact() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--secondary text--color--tertiary">
          Kontakt
        </h1>
        <div className="layout__inner">
          <div className="layout__section contact">
            <div className="contact_address">
              <p>Keď môžem pomôžem</p>
              <p>Moldavská 9</p>
              <p>040 11 Košice</p>
              <p>IČO: 51278561</p>
              <p>DIČ: 2120949556</p>
            </div>
            <div className="contact__media">
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
