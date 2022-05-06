import React from "react";

import productImg from "../../images/girl.jpg";
import Card from "../Card";
import BreakerElement from "../BreakerIcon";

function Products() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--tertiary page-header--color--white">
          Projekty
        </h1>
      </div>
      <div className="layout__inner">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <BreakerElement />

      <div className="layout__inner layout__project">
        <Card
          image={productImg}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          path="/about"
          title="Keď možem športujem"
        />
        <Card
          image={productImg}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          path="/about"
          title="Keď možem športujem"
        />
        <Card
          image={productImg}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          path="/about"
          title="Keď možem športujem"
        />
        <Card
          image={productImg}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          path="/about"
          title="Keď možem športujem"
        />
        <Card
          image={productImg}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          path="/about"
          title="Keď možem športujem"
        />
      </div>

      {/* <h1 className="about">PROJEKTY</h1>
      <div className="info-container">
        <div className="info-wrapper">
          <p style={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Products;
