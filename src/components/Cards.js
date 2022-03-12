import React from 'react';
import CardItems from './CardItems';
// import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Keď môžem pomôžem projekty</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img-9.jpg"
              text="Keď možem športujem"
              label="Projekty"
              path="/about"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Keď možem včelárim"
              label="Projekty"
              path="/about"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Keď možem pomáham"
              label="Projekty"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
