import React from "react";

import BreakerElement from "../objects/BreakerIcon";

function SectionCardText(props) {
  const { text } = props;
  return (
    <>
      <h1>{text}</h1>
      <BreakerElement />
    </>
  );
}

export default SectionCardText;
