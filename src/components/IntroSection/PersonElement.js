import "./PersonElement.scss";

import React from "react";

function PersonElement({
  reverse = false,
  id,
  name,
  src = "nic",
  description,
}) {
  return (
    <div className="intro-person__container">
      <div className="intro-person__row">
        <div className="intro-person__img">
          <img src={src} alt="text" />
        </div>

        <div className="intro-person__title">
          <h3 className="h3 font-blue align-center">{name}</h3>
        </div>
        <div className="intro-person__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonElement;
