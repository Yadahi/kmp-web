import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { path, image, title, text, size = "" } = props;
  let navigate = useNavigate();
  return (
    <div
      className={`card ${size && `card--${size}`}`}
      onClick={() => {
        navigate(path);
      }}
    >
      <img className="card__image" src={image}></img>
      <h3 className="card__title">{title}</h3>
      <p className="card__annotation">{text}</p>
    </div>
  );
}

export default Card;
