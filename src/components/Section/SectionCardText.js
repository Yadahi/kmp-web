import React from "react";
import { useNavigate } from "react-router-dom";

function SectionCardText(props) {
  const {
    buttonLabel: button,
    description,
    descriptionColor,
    headline: title,
    topLine: label,
    path,
  } = props;
  console.log(props);
  let navigate = useNavigate();
  return (
    <>
      <div className="section__label">
        <h4>{label}</h4>
      </div>
      <h2>{title}</h2>
      <p
        className={`{${descriptionColor} ? text--color--${descriptionColor} : ''}`}
      >
        <strong>{description}</strong>
      </p>
      <button
        className="button"
        onClick={() => {
          navigate(path);
        }}
      >
        {button}
      </button>
    </>
  );
}

export default SectionCardText;
