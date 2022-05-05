import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { path, image, title, text } = props;
  return (
    <Link className="card" to={path}>
      <img className="card__image" src={image}></img>
      <h3 className="card__title">{title}</h3>
      <p className="card__annotation">{text}</p>
    </Link>
  );
}

export default Card;
