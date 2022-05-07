import React from "react";
import { useNavigate } from "react-router-dom";

function SectionCardText(props) {
  const {
    buttonLabel: button,
    description,
    headline: title,
    topLine: label,
  } = props;
  console.log(props);
  let navigate = useNavigate();
  return (
    <>
      <div>{label}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={() => {
          navigate("/o-nas");
        }}
      >
        {button}
      </button>
    </>
  );
}

export default SectionCardText;
