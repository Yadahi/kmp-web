import React from "react";
import { Button } from "../Button";
// import "./InfoElements.css"

const InfoSection = ({
  id,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  imgSize,
  alt,
  color,
  reverse,
  headlineColor,
  descriptionColor,
}) => {
  return (
    <>
      <div className={`info__container ${color}`} id={id}>
        <div className="info__wrapper">
          <div className={reverse ? "info__row--reverse" : "info__row"}>
            <div className="column1">
              <div className="text-wrapper">
                <div className={`top-line ${headlineColor}`}>{topLine}</div>
                <h1 className={`h2 ${headlineColor}`}>{headline}</h1>
                <div className={`subtitle ${descriptionColor}`}>
                  {description}
                </div>
                <div className="btn-wrap">
                  <Button path="/about">{buttonLabel}</Button>
                </div>
              </div>
            </div>
            <div className="column2">
              <div className="img-wrap">
                <img src={img} alt={alt} className={imgSize}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
