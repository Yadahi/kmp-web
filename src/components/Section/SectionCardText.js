import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

function SectionCardText(props) {
  const {
    buttonLabel: button,
    description,
    descriptionColor,
    headline: title,
    headlineColor: titleColor = "",
    topLine: label,
    path,
    btnColor,
  } = props;
  console.log(props);
  let navigate = useNavigate();
  return (
    <>
      <div className="section__label">
        <h4>{label}</h4>
      </div>
      <h2 className={`{${titleColor} ? text--color--${titleColor} : ''}`}>
        {title}
      </h2>
      <p
        className={`{${descriptionColor} ? text--color--${descriptionColor} : ''}`}
      >
        <strong>{description}</strong>
      </p>
      <Button path={path} label={label} color={btnColor} />
    </>
  );
}

export default SectionCardText;
